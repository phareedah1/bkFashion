import React from 'react'
import styles from './styles.module.scss'
import img1 from '../../../../../../public/assets/images/shop-landing/Rectangle 22.jpg'
import img2 from '../../../../../../public/assets/images/shop-landing/Rectangle 23.jpg'
import img3 from '../../../../../../public/assets/images/shop-landing/Rectangle 29.jpg'
import img4 from '../../../../../../public/assets/images/shop-landing/Rectangle 30.jpg'
import img5 from '../../../../../../public/assets/images/shop-landing/Rectangle 31.jpg'
import img6 from '../../../../../../public/assets/images/shop-landing/32.jpg'
import Image from 'next/image'
const secondsec = () => {
  return (
    <div>
        <div className={styles.slides}>
            <Image src={img1} alt='img'/>
            <Image src={img2} alt='img'/>
            <Image src={img3} alt='img'/>
            <Image src={img4} alt='img'/>
            <Image src={img5} alt='img'/>
            <Image src={img6} alt='img'/>
        </div>
    </div>
  )
}

export default secondsec