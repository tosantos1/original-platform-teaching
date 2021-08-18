import { useSession } from 'next-auth/client';
import styles from './styles.module.scss'

export function CursoBody() {
  const [session] = useSession();

  return session ? (
    <main className={styles.container}>
      <div className={styles.card_1}>
        <div className={styles.c1_content}>
          <img src={session.user.image} alt="Foto de perfil." />
          <div className={styles.namemail}>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
          </div>
        </div>
        <button>Acessar perfil</button>
      </div>
      <div className={styles.card_2}>
        <div className={styles.c2_content}>
          <img src="/images/react.svg" alt="" />
          <div className={styles.curso}>
            <h1>Curso <span>React JS</span></h1>
            <p>Frontend</p>
            <p>Desenvolva interfaces modernas e reativas
              na web utilizando uma biblioteca modular e escalável.</p>
          </div>
        </div>
        <button>Acessar Curso</button>
      </div>

    </main>
  ) : (
    <h1>cadastre-se</h1>
  )
}