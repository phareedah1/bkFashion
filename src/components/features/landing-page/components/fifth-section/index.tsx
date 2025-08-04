import styles from './styles.module.scss'
import imageone from '../../../../../../public/assets/images/landing page/Frame 1686562999.jpg'
import imagetwo from '../../../../../../public/assets/images/landing page/heels.jpg'
import imagethree from '../../../../../../public/assets/images/landing page/bag.jpg'
import imagefour from '../../../../../../public/assets/images/landing page/bags.jpg'
import Image from 'next/image'

export default function FifthSection() {
    return(
        <div className={styles.cont}>
            <div className={styles.header}><p>Trending Collections</p></div>
            <div className={styles.img_cont}>
                <div className={styles.img}>
                    <Image
                        src={imageone}
                        alt='yo'
                        height={350}
                        width={280}
                    />    
                </div>

                <div className={styles.img2}>
                    <Image
                        src={imagetwo}
                        alt='yo'
                        height={350}
                        width={280}
                    />    
                </div>

                <div className={styles.img}>
                    <Image
                        src={imagethree}
                        alt='yo'
                        height={350}
                        width={280}
                    />    
                </div>

                <div className={styles.img2}>
                    <Image
                        src={imagefour}
                        alt='yo'
                        height={350}
                        width={280}
                    />    
                </div>
            </div>

            {/* <div className={styles.browse_cont}>
                <div className={styles.browse}><p>Browse Catelogue</p></div>
            </div> */}
        </div>
    );
}