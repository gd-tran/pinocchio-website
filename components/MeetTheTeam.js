import styles from '../styles/MeetTheTeam.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function MeetTheTeam (){
  return(
    <>
      <div className={styles.mainRow}>
      <div className={styles.colCont}> 
      <div className={styles.headerRow}>
      <h1> Meet the Team </h1>
      </div>
    <div className={styles.row}> 

            <div className={styles.column}>
        <Image src="/adam-profile2.jpg"width={150} height={150}  className={styles.circle}/>
        <h2 className={styles.namesCont}> Adam Joesten </h2>
          <div className={styles.iconRow}>
            <div  className={styles.icon}>
        <a href="https://github.com/AdamJoesten" target="_blank"><Image src="/github-icon-small.png" width={32} height={32}/></a>
            </div>
            <div  className={styles.icon}>
        <a href="https://www.linkedin.com/in/adamjoesten/" target="_blank"><Image src="/linkedin-icon-small.png" width={40} height={32}/></a>
            </div>
        </div>
      </div>

       <div className={styles.column}>
        <Image src="/brandi-profile.jpg"width={150} height={150} className={styles.circle}/>
        <h2 className={styles.namesCont}> Brandi Richardson </h2>
          <div className={styles.iconRow}>
            <div  className={styles.icon}>
              <a href="https://github.com/bjr2008" target="_blank"><Image src="/github-icon-small.png" width={32} height={32} /></a>
              </div>
            <div  className={styles.icon}>
        <a href="https://www.linkedin.com/in/brandi-richardson-28295158/" target="_blank"><Image src="/linkedin-icon-small.png" width={40} height={32}/></a>
              </div>
              </div>
      </div>

      <div className={styles.column}>
          <Image src="/giao-profile.jpg" width={150} height={150} className={styles.circle} />
          <div className={styles.giaoCont}>
        <h2 className={styles.giaoName}> Giao Tran </h2>
        <h6 className={styles.giao}>pronounced "Yao"</h6>
          </div>
          <div className={styles.iconRow}>
            <div  className={styles.icon}>
                <a href="https://github.com/gd-tran" target="_blank"><Image src="/github-icon-small.png" width={32} height={32} /></a>
                </div>
            <div  className={styles.icon}>
        <a href="https://www.linkedin.com/in/giao-tran-91353654/" target="_blank"><Image src="/linkedin-icon-small.png" width={40} height={32}/></a>
                </div>
                </div>
      </div>

      <div className={styles.column}>
        <Image src="/harlan-profile.jpg"width={150} height={150} className={styles.circle}/>
        <h2  className={styles.namesCont}> Harlan Evans </h2>
          <div className={styles.iconRow}>
            <div  className={styles.icon}>
                  <a href="https://github.com/harlanevans" target="_blank"><Image src="/github-icon-small.png" width={32} height={32} /></a>
                  </div>
            <div  className={styles.icon}>
        <a href="https://www.linkedin.com/in/harlan-evans/" target="_blank"><Image src="/linkedin-icon-small.png" width={40} height={32}/></a>
                  </div>
                  </div>
      </div>

      <div className={styles.column}>
        <Image src="/lex-profile.jpg"width={150} height={150} className={styles.circle}/>
        <h2  className={styles.namesCont}> Lex Choi </h2>
        <div className={styles.iconRow}>
            <div  className={styles.icon}>
        <a href="https://github.com/lexiphur" target="_blank"><Image src="/github-icon-small.png" width={32} height={32}/></a>
            </div>
        <a href="https://www.linkedin.com/in/lexchoi3/" target="_blank"><Image src="/linkedin-icon-small.png" width={40} height={32}/></a>
      </div>
      </div>

    </div>
      </div>
      </div>

    </>
  )
}