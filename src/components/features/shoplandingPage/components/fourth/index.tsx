import React from 'react'
import styles from './styles.module.scss'

const Fourthsec = () => {
  return (
    <div className={styles.container}>
        <div>
            <div className={styles.background}>
                <button className={styles.button}>SLIDES</button>
            </div>
            <div className={styles.description}>
                <p>Slide into comfort and style, the perfect choice laid back luxury on any da</p>
                <button>shop slides</button>
            </div>
        </div>

        <div>
            <div className={styles.background1}>
                <button className={styles.button}>PERFUMES</button>
            </div>
            <div className={styles.description}>
                <p>Make your presence unforgettable, Discover scents that tell your story</p>
                <button>shop perfumes</button>
            </div>
        </div>

        <div>
            <div className={styles.background2}>
                <button className={styles.button}>BAGS</button>
            </div>
            <div className={styles.description}>
                <p>Carry confidence, Our bag blends function, fashion, and finesse.</p>
                <button>shop bags</button>
            </div>
        </div>
    </div>
  )
}

export default Fourthsec