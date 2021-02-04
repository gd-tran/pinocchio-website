import styles from '../styles/HowToUseIt.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HowToUseIt(){
  return(
    <>
      <div className={styles.container}>
        <div className={styles.colOne}>
          {/* <div className={styles.img}> */}
          <Image src={'/file-tree-describe.gif'}
            alt="file-tree-gif"
            width={800}
            height={400}
            />
            {/* </div> */}
        </div>
        <div className={styles.colTwo}>
          <div className={styles.hRow}>
          <div className={styles.hColumn}>
          <h2 className={styles.hTwo}>No coding required.</h2>
          </div>
          </div>
          <div className={styles.pRow}>
          <p>Pinocchio minimizes <Link href="https://developers.google.com/web/tools/puppeteer">Puppeteer </Link> 
          onboarding labor and conveniently provides Puppeteer 
          methods that are often used in testing in conjunction with 
          <Link href="https://mochajs.org/"> Mocha</Link> and <Link href="https://www.chaijs.com/">Chai</Link>. 
          The result is a more seamless transition that allows developers to dive right into these technologies, 
          saving users precious time and energy.</p>
          </div>
        </div>
      </div>
    </>
  )
}