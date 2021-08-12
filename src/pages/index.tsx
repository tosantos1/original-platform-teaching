import { GetStaticProps } from 'next';
import { BuyButton } from '../components/BuyButton';
import { SignInButton } from '../components/SignInButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <h1 className={styles.hero}>Valor do curso: {product.amount}</h1>
      <BuyButton priceId={product.priceId} />
      <SignInButton />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JKo2CFV1XJsSmXh3ERzVgqg', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}