import { SignInButton } from './SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
    <header className={styles.headerContainer} >
        <div className={styles.headerContent}>
            <img src="/images/logo.svg" alt="Logo" />

            <nav>
                <a href="http://localhost:3000/" className={styles.active}>Home</a>
                <a href="http://localhost:3000/posts">Posts</a>           
            </nav>

            <SignInButton />
        </div>
    </header>
    )
}