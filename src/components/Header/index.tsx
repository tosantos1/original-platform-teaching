import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/images/logoLR.png" alt="LR" />
                <nav>
                    <a>Início</a>
                    <a>Curso</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}