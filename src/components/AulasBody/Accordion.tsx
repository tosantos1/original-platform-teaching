import styles from './styles.module.scss'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


interface Props {
  title: string;
  active: string;
  setActive: (active: string) => void;
}

export function Accordion({ title, active, setActive }: Props) {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeading}>
        <div className={styles.accordionContainer}>
          <p>{title}</p>
          <span onClick={() => setActive(title)}>
            {active === title ? <FaChevronDown color="#FFF8F3" /> : <FaChevronUp color="#FFF8F3" />}
          </span>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + styles.accordionContent}>
        <div className={styles.accordionConteudos}>
          <div className={styles.topics}>
            <p>01 - Básico HTML </p>
            <input type="checkbox"></input>
          </div>
          <div className={styles.topics}>
            <p>02 - Classes e IDs </p>
            <input type="checkbox"></input>
          </div>
          <div className={styles.topics}>
            <p>03 - Tag e Metas </p>
            <input type="checkbox"></input>
          </div>
        </div>
      </div>
    </div>
  )
}