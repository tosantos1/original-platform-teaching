import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.container}>
            <nav className={styles.content}>
                <img src="/images/logoLR.png" alt="LR" />
                <ul>
                    <li><a>Início</a></li>
                    <li><a>Curso</a></li>
                </ul>
                <SignInButton />
            </nav>
        </header>
    );
}