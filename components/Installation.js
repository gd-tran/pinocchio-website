import styles from '../styles/Installation.module.css';
import Link from 'next/link';


export default function Installation(){
  return(
    <div className={styles.main}>
      <h1 className={styles.text}>Download</h1>
      <div className={styles.download}>
        <Link href='https://downloadlink/'><button className={styles.overlayLeftBtn}>Mac</button></Link>
        <Link href='https://downloadlink/'><button className={styles.overlayLeftBtn}>Windows</button></Link>
        <Link href='https://downloadlink/'><button className={styles.overlayLeftBtn}>Linux</button></Link>
      </div>
      <h2 className={styles.textTwo}>Remember to<code> npm install Puppeteer Mocha Chai</code></h2>
    </div>
  )
};