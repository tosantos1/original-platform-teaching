import { useSession } from 'next-auth/client'
import styles from './styles.module.scss'

export function CursoHeader() {
  const [session] = useSession();

  return session ? (
    <>
      <main className={styles.container}>
        <section>
          <header className={styles.content_header}>
            <div className={styles.item_1}>
              <h1>Olá, {session.user.name}</h1>
              <div className={styles.welcome}>
                <p>É bom ter você de volta.</p>
                <p>Continue aprendendo, retorne para aula que parou.</p>
              </div>
            </div>
            <p>#marketing</p>
          </header>
        </section>
      </main>
    </>
  ) : (
    <h1>cadastre-se</h1>
  )
}