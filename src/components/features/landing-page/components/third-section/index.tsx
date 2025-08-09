import styles from './styles.module.scss'
import perfume from '../../../../../../public/assets/images/landing page/perfume.jpg'
import redbag from '../../../../../../public/assets/images/landing page/red-bag.jpg'
import shoe from '../../../../../../public/assets/images/landing page/shoe.jpg'
import Image from 'next/image';
export default function ThirdSection(){
    return(
        <div className={styles.container}>
            <div className={styles.shoe_cont}>
                <div className={styles.txt_cont}>
                    <p className={styles.line1}>Foot wears</p>
                    <p className={styles.line2}>Slide into comfort and style, the perfect choice laid back luxury on any day</p>
                    <p className={styles.line3}>Explore collection</p>
                </div>
            </div>


            <div className={styles.perf_bag_cont}>
                <div className={styles.perfume_cont}>
                    <div className={styles.txt_cont}>
                        <p className={styles.line1}>Perfumes</p>
                        <p className={styles.line2}>Elevate your presence with perfumes designed to leave a lasting impression.</p>
                        <p className={styles.line3}>Explore collection</p>
                    </div>
                </div>

                <div className={styles.bag_cont}>
                    <div className={styles.txt_cont}>
                    <p className={styles.line1}>Bags</p>
                    <p className={styles.line2}>Where style meets personality- explore our curated collection of a must have bags.</p>
                    <p className={styles.line3}>Explore collection</p>
                    </div>
                </div>
            </div>
        </div>
    );
}