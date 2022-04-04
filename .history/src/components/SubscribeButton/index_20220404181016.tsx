import styles from './styles.module.scss';

interface SubscribeButton {
    price
}

export function SubscribeButton() {
    return (
        <button type="button" className={styles.SubscribeButton}>
            Subscribe now
        </button>
    )
}