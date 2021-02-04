import styles from '../styles/Intro.module.css';
import Image from 'next/image'
export default function Intro() {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.itemOne}>
            <div className={styles.hRow}>
          <div className={styles.hColumn}>
          <h2 className={styles.hTwo}>Making test creation playful.</h2>
            </div>
          </div>
          <div className={styles.pRow}>
          <p>Taking advantage of our user-friendly UI makes creating tests a walk in the park.
          We take the burden away from writing tests so you can go back to 
          creating what's important: your app.</p>
          </div>
        </div>
        <div className={styles.itemTwo}>
          {/* <div className={styles.img}> */}
          <Image src={'/landing.gif'}
            alt="landing-gif"
            width={800}
            height={400}
            />
            {/* </div> */}
        </div>
      </div>
    </>
  )
}
