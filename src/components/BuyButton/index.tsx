
import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';

interface BuyButtonProps {
  priceId: string;
}

export function BuyButton({ priceId }: BuyButtonProps) {
  const [session] = useSession()

  async function buyButtonClick() {
    if (!session) {
      signIn('github')
      return;
    }

    try {
      const response = await api.post('/buy')

      const { sessionId } = response.data;

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })

    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.buyButtonClass}
      onClick={() => buyButtonClick()}
    >
      Embarque para o futuro
    </button>
  )
}