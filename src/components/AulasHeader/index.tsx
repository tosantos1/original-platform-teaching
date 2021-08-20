import Link from 'next/link'
import styles from './styles.module.scss'

export function AulasHeader() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <div className={styles.item_1}>
            <ul>
              <li>
                <Link href="/curso">
                  <a>
                    Curso
                  </a>
                </Link>
              </li>
              <span> &gt; </span>
              <li>Aulas</li>
            </ul>
          </div>
          <div className={styles.item_2}>
            <img src="/images/react.svg" alt="" />
            <h4>React JS</h4>
          </div>
        </nav>
      </header>
    </>
  )
}