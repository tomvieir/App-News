import { FaUser } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

export function SignInButton() {
    const { data: session } = useSession();

    return session ? (
        <button type="button" className={styles.SignInButton} >
            <img src={session.user.image} alt="" />
           <span>{session.user.name}</span> 
            <FiX color='#727272' className={styles.SvgCloseIcon} onClick={() => signOut()} />
        </button>
    ) : (
        <button type="button" className={styles.SignInButton} onClick={() => signIn('github, facebook')} >
            <FaUser color='#06ccfd' />
            
            <span>SignIn</span>

        </button>
    )
}
