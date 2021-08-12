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
          <h1>Aprendendo no presente <br /> as tecnologias do futuro</h1>
          <p>Para acessar ao curso é <br /> por apenas <span>{product.amount}</span></p>
          <button type="button"> Embarque para o futuro</button>
        </section>
        <section className={styles.lorem}>
          <img src="/images/lorem.svg" alt="lorem" />
          <img src="/images/lorem.svg" alt="lorem" />
          <img src="/images/lorem.svg" alt="lorem" />
          <img src="/images/lorem.svg" alt="lorem" />
        </section>
      </main>

      <h1 className={styles.hero}>Valor do curso: {product.amount}</h1>
      <BuyButton priceId={product.priceId} />
<<<<<<< HEAD
=======
      <SignInButton />

>>>>>>> 6a0d5cb837cbf76e85d85d7d48683eed3d7e1285
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