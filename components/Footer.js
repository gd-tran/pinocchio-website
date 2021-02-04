import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
  return(
    <>
      <div className={styles.mainRow}>

        <div className={styles.mainCol}>

        <div className={styles.header}> 
          <h1> We would love your feedback and suggestions. </h1>
          <h2> Contact us | pinocchiodevs@gmail.com </h2>
        </div>

          <div className={styles.iconRow}> 
            <div  className={styles.icon}>
              <a href="https://github.com/oslabs-beta/pinocchio" target="_blank"><Image src="/github-icon-small.png" width={32} height={32}/></a>
            </div>
            <div  className={styles.icon}>
              <a href="https://www.linkedin.com/company/pinocchio-dev/" target="_blank"><Image src="/linkedin-icon-small.png" width={40} height={32}/></a>
            </div>
        </div>
        </div>


      </div>
    </>
  )
} 