import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header(){
  return(
    <>
    
      <div className={styles.topRow}>
        
      <div className={styles.head}>
      <h1 className={styles.title}>pinocchio</h1>       
      <h2 className={styles.desc}>a graphical user interface for Puppeteer test generation</h2>

      </div>
    </div>
    </>
  )
}