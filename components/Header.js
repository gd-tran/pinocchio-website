import styles from '../styles/Header.module.css';
import Installation from './Installation'

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>

      <div className={styles.topRow} >
        <div className={styles.colCont}>

          <div className={styles.head}>
            <img src='/pinocchio-white-nobg2.png' />
            <h1 className={styles.title}>pinocchio</h1>
            <h2 className={styles.desc}>a graphical user interface for Puppeteer test generation</h2>
          </div>
          <div className={styles.isMobile}>
            <Installation />
          </div>
        </div>
      </div>

    </>
  )
}