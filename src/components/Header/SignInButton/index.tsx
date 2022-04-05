import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

export function SignInButton() {
    const {data: session} = useSession();
    console.log(session)


    return session ? (
        <button type="button" className={styles.SignInButton} >
            <img src={session.user.image} alt="" />
            {session.user.name}
            <FiX color='#727272' className={styles.SvgCloseIcon} onClick={() => signOut()}/>
        </button>
    ) : (
        <button type="button" className={styles.SignInButton} onClick={() => signIn('github')} >
            <FaGithub color='#06ccfd' />
            Entre com o Github
            
        </button>
    )
}
