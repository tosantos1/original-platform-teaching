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
          <iframe src="https://player.vimeo.com/video/545744374?h=dbfd608aee" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
        </section>
        <section className={styles.sectionAccordionMobile}>
          <Accordion title="Introdução HTML" active={active} setActive={setActive} />
          <Accordion title="Introdução CSS" active={active} setActive={setActive} />
        </section>
      </main>
    </>
  )
}