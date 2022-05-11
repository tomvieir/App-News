import styles from './contact.module.scss'

export default function Contacts() {
    return (
        <div className={styles.container}>
            <h1>Contact us</h1>
            <form action="">
               
                <input type="text" id="name" placeholder='Name' className={styles.nameBox} />

              
                <input type="email" id="email" placeholder='E-mail'className={styles.emailBox} />


                <textarea id="message" className={styles.messageBox}/>
                
                <button type="submit">Send</button>  

             </form>
    
        </div>
    )
}