import styles from '../styles/Installation.module.css';
import Link from 'next/link';


export default function Installation() {
  return(
    <div className={styles.main}>
      <div className={styles.download}>
        <Link href='https://github.com/oslabs-beta/pinocchio/releases/download/v1.0.0-macos/pinocchio-1.0.0.dmg'><button className={styles.magnifyBorder}>Mac</button></Link>
        <Link href='https://github.com/oslabs-beta/pinocchio/releases/download/v1.0.0-win/pinocchio.Setup.1.0.0.exe'><button className={styles.magnifyBorder}>Windows</button></Link>
        <Link href='https://github.com/oslabs-beta/pinocchio/releases/download/v1.0.0-lin/pinocchio_1.0.0_amd64.deb'><button className={styles.magnifyBorder}>Linux</button></Link>
      </div>
    </div>
  )
};