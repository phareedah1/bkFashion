import React from 'react'
import styles from './styles.module.scss'
import image from '../../../../../../public/assets/images/shop-landing/thirdimg.jpg'
import Image from 'next/image'
const thirdsec = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p>A Touch Of Brilliance For Every Look</p>
        </div>
        <div className={styles.img_cont}>
            <Image
                src={image}
                alt='image'
                className={styles.image}
            />
        </div>
    </div>
  )
}

export default thirdsec