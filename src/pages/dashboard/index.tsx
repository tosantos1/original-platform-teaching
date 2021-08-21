import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { CursoBody } from '../../components/CursoBody'
import { CursoHeader } from '../../components/CursoHeader'

export default function Dashboard() {
  return (
    <>
      <CursoHeader />
      <CursoBody />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: {

    }
  }
}