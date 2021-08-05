import { signIn, signOut, useSession } from 'next-auth/client';
import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    console.log(session);

    return session ? (
        <button
            className={styles.buttonLogado}
            onClick={() => signOut()}
        > Logado </button>
    ) : (
        <button
            className={styles.buttonLogar}
            onClick={() => signIn('github')}
        > Logar </button>
    )
}