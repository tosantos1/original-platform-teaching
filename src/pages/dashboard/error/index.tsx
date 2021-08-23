import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import styles from './styles.module.scss';

export default function Error() {
  return (
    <main className={styles.container}>
      <div className={styles.error}>
        <img src="/images/biglogo.png" alt="Logo LR Robótca." />
        <div className={styles.text}>
          <h1>OPS!</h1>
          <h3><span>Você não tem permissão para acessar esta página.</span></h3>
          <h1>Você precisar fazer login e posteriormente comprar nosso curso para fazer parte dessa <span>JORNADA!!!</span></h1>
        </div>
      </div>
    </main>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
//   const session = await getSession({ req })

//   if (session?.activeSubscription) {
//     return {
//       redirect: {
//         destination: '/dashboard',
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props: {

//     }
//   }
// }