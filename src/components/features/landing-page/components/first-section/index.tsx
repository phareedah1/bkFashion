import React from 'react'
import imageone from '../../../../../../public/assets/images/landing page/image one.jpg'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Firstsection() {
    return(
        <div className={styles.imageone_cont}>
            <Image
                src={imageone}
                className={styles.imageone}
                alt='woman'
            />
        </div>
    )
}