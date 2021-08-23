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
      <main className={styles.container}>
        <section className={styles.hero}>
          <span>
            <img src="/images/raposa.svg" alt="raposa" />
            Oi, bem vindo</span>
          <h1>Aprendendo no presente as tecnologias do futuro</h1>
          <p>Para acessar ao curso é por apenas <span>{product.amount}</span></p>
          <BuyButton priceId={product.priceId} />
        </section>
        <section className={styles.lorem}>
          <img src="/images/lorem.svg" alt="lorem" />
          <img src="/images/lorem.svg" alt="lorem" />
        </section>
        <section className={styles.loremMobile}>
          <img src="/images/lorem-v.svg" alt="lorem" />
        </section>
      </main>
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