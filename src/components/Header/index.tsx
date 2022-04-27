import { SignInButton } from './SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
    const { asPath } = useRouter()

    return (
    <header className={styles.headerContainer} >
        <div className={styles.headerContent}>
            <img className={styles.logo} src="/images/science.png" alt="Logo" />

            <nav>
                <Link href="/">
                    <a className = {asPath === '/' ? styles.active : ''}>Home</a>
                </Link>

                <Link href="/posts" prefetch>
                    <a className = {asPath === '/posts' ? styles.active : ''}>Posts</a>
                </Link>
                       
            </nav>

            <SignInButton />
        </div>
    </header>
    )
}