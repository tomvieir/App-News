import { useSession, signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


interface SubscribeButton {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButton) {
    const {data: session} = useSession();
    const router = useRouter()

    async function handleSubscribe() {
        if (!session) {
            signIn('github, google')
            return
        }

        if (session.activeSubscription) {
            router.push('/posts')
            return
        }

        try {
            const response = await api.post('subscribe')

            const { sessionId } = response.data;

            const stripe = await getStripeJs()
            await stripe.redirectToCheckout({sessionId: sessionId})
            

        }catch {
            toast.error('Algo deu errado! Tente novamente')
        }
    }
    return (
        <button type="button" className={styles.SubscribeButton} onClick={handleSubscribe}>
            Subscribe now
        </button>
    )
}