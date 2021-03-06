import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGoogle } from 'react-icons/fa';
import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    console.log(session);

    return session ? (
        <button
            type="button"
            className={styles.loginButton}
            onClick={() => signOut()}
        >
            <FaGoogle />
            {session.user.name}
        </button>
    ) : (
        <button
            type="button"
            className={styles.loginButton}
            onClick={() => signIn('google')}
        >
            <FaGoogle />
            Entrar com Gmail
        </button>
    )
}