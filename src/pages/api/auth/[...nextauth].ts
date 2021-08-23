import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { fauna } from '../../../services/fauna';
import { query as q } from 'faunadb';

export default NextAuth({
    providers: [
        Providers.Google({
            clientId: '931554392174-pdn87vdl4vvbqkum1v43ov3im4uh4nlt.apps.googleusercontent.com',
            clientSecret: 'tN-28_fZuTL21LltJDiBXUBh',
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
            // scope: 'read:user 1',
        }),
    ],

    jwt: {

        signingKey: process.env.SIGNING_KEY,
    },

    callbacks: {
        async session(session) {
            try {
                const userActiveSubscription = await fauna.query(
                    q.Get(
                        q.Intersection([
                            q.Match(
                                q.Index('subscription_by_user_ref'),
                                q.Select(
                                    "ref",
                                    q.Get(
                                        q.Match(
                                            q.Index('user_by_email'),
                                            q.Casefold(session.user.email)
                                        )
                                    )
                                )
                            ),
                            q.Match(
                                q.Index('subscription_by_status'),
                                "active"
                            )
                        ])
                    )
                )
                return {
                    ...session,
                    activeSubscription: userActiveSubscription,
                }
            } catch (err) {
                return {
                    ...session,
                    activeSubscription: null,
                }
            }
        },

        async signIn(user, account, profile) {
            const { email, name } = user;

            try {
                await fauna.query(
                    q.If(
                        q.Not(
                            q.Exists(
                                q.Match(
                                    q.Index('user_by_email'),
                                    q.Casefold(user.email)
                                )
                            )
                        ),
                        q.Create(
                            q.Collection('users'),
                            { data: { email } },
                        ),
                        q.Get(
                            q.Match(
                                q.Index('user_by_email'),
                                q.Casefold(user.email)
                            )
                        )
                    )
                )

                return true
            } catch {
                return false;
            }
        },
    },
})