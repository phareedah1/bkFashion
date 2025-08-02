import Image from 'next/image'
import styles from './styles.module.scss'
import itemone from '../../../../../../public/assets/images/landing page/item1.jpg'
import itemtwo from '../../../../../../public/assets/images/landing page/item2.jpg'
import itemthree from '../../../../../../public/assets/images/landing page/item3.png'

export default function Sectiontwo() {
    return(
        <div className={styles.slideshow_cont}>
            <div className={styles.card_cont}>
            <div className={styles.card}>
                <h2>Discover the<br />latest arrivals</h2>
                <div className={styles.line}></div>
                <p>Browse Categories</p>
                <span className={styles.icon}></span>
            </div>
            </div>
            <div>
                <Image 
                    src={itemone}
                    alt='img'
                    height={450}
                    width={320}
                />
            </div>
            <div>
                <Image 
                    src={itemtwo}
                    alt='img'
                    height={450}
                    width={320}
                />
            </div>
            <div>
                <Image 
                    src={itemthree}
                    alt='img'
                    height={450}
                    width={320}
                />
            </div>
            <div>
                <Image 
                    src={itemthree}
                    alt='img'
                    height={450}
                    width={320}
                />
            </div>
        </div>
    )
}