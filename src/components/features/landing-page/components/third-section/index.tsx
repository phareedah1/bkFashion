import styles from './styles.module.scss'
import perfume from '../../../../../../public/assets/images/landing page/perfume.jpg'
import redbag from '../../../../../../public/assets/images/landing page/red-bag.jpg'
import shoe from '../../../../../../public/assets/images/landing page/shoe.jpg'
import Image from 'next/image';
export default function ThirdSection(){
    return(
        <div className={styles.container}>
            <div className={styles.shoe_cont}>
                {/* <Image
                    src={shoe}
                    alt='shoe'
                    className={styles.shoe}
                /> */}
            </div>


            <div className={styles.perf_bag_cont}>
                <div className={styles.perfume_cont}>
                    {/* <Image
                        src={perfume}
                        alt='shoe'
                        className={styles.perfume}
                    /> */}
                </div>
                <div className={styles.bag_cont}>
                    {/* <Image
                        src={redbag}
                        alt='bag'
                        className={styles.bag}
                    /> */}
                </div>
            </div>
        </div>
    );
}