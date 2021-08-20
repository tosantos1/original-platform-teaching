import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/images/logoLR.png" alt="LR" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Início</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/curso">
                        <a>Curso</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}