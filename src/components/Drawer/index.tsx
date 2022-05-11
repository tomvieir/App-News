import styles from './styles.module.scss'
import { useState } from 'react'
import { SignInButton } from '../Header/SignInButton'



export default function Drawer() {

    const [open, setOpen] = useState(false)
    const ToggleMode = () => {
        setOpen(!open)
    }
    return (
        <div className={styles.drawer}>
            <div className={open ? styles.iconActive : 'icon'} onClick={ToggleMode}>
                <div className={styles.hamburgerIcon}>
                    <div className={styles.hamburgerLine1}></div>
                    <div className={styles.hamburgerLine2}></div>
                    <div className={styles.hamburgerLine3}></div>

                </div>

                <aside>
                    <div className={styles.signInAside}>
                        <SignInButton />
                    </div>
                    
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/posts">Posts</a>
                            </li>
                            <li>
                                <a href="/contacts">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </aside>



            </div>
        </div>

    )
}