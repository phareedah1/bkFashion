import React from 'react'
import styles from './styles.module.scss'

const Firstsec = () => {
  return (
    <div className={styles.first_cont}>
        <div className={styles.container}>
            <div className={styles.header}><p>Your New Favourite Look is Just a Click Away.</p></div>
            <div className={styles.header2}><p>Step into the season hottest trends at unbeatable prices. Don’t miss out- Shop your favourites now!</p></div>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Firstsec