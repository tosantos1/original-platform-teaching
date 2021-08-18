import { query as q } from 'faunadb';

import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
    paymentId: string,
    customerId: string,
    createAction = false,
) {
    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerId
                )
            )
        )
    )

    const payment = await stripe.paymentIntents.retrieve(paymentId)


    const subscriptionData = {
        id: payment.id,
        userId: userRef,
        status: payment.status,
        //  price_id: payment.pay.data[0].price_id,
    }


    if (createAction) {
        await fauna.query(
            q.Create(
                q.Collection('subscriptions'),
                { data: subscriptionData }
            )
        )
    } else {
        await fauna.query(
            q.Replace(
                q.Select(
                    "ref",
                    q.Get(
                        q.Match(
                            q.Index('subscription_by_id'),
                            paymentId,
                        )
                    )
                ),
                { data: subscriptionData }
            )
        )
    }
}