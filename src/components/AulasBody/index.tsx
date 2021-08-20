import { useState } from 'react'
import { Accordion } from './Accordion'
import styles from './styles.module.scss'


export function AulasBody() {
  const [active, setActive] = useState("Introdução HTML")

  return (
    <>
      <main className={styles.main}>
        <section className={styles.sectionAccordion}>
          <Accordion title="Introdução HTML" active={active} setActive={setActive} />
          <Accordion title="Introdução CSS" active={active} setActive={setActive} />
        </section>
        <section className={styles.sectionVideo}>
          <iframe src="https://player.vimeo.com/video/539964022?h=2903e0cbde&color=fe03e1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
        </section>
      </main>
    </>
  )
}