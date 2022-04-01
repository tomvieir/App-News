import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export function SignInButton() {
    const  isUserLoggedIn = true


    return isUserLoggedIn ? (
        <button type="button" className={styles.SignInButton}>
            <FaGithub color='#eba417'/>
            Entre com o Github
        </button>
    ) : (
        <button type="button" className={styles.SignInButton}>
        <FaGithub color='#2ceb17'/>
        Entre com o Github
    </button>
    )
}
