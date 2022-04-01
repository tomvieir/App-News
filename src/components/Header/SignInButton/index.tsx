import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
    const  isUserLoggedIn = false;


    return isUserLoggedIn ? (
        <button type="button" className={styles.SignInButton}>
            <FaGithub color='#17eb4c'/>
            Tom Vieira
            <FiX color='#727272' className={styles.SvgCloseIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.SignInButton}>
            <FaGithub color='#d8d20b' />
            Entre com o Github
            
        </button>
    )
}
