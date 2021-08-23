import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { AulasBody } from "../../../components/AulasBody";
import { AulasHeader } from "../../../components/AulasHeader";

export default function Aulas() {
  return (
    <>
      <AulasHeader />
      <AulasBody />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      }
    }
  }
  return {
    props: {

    }
  }
}