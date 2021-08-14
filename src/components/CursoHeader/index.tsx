import styles from './styles.module.scss'

export function CursoHeader() {
  return (
    <>
      <main className={styles.container}>
        <section>
          <header className={styles.content_header}>
            <div className={styles.item_1}>
              <h1>Olá, Tiago</h1>
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
  )
}