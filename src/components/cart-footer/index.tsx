import Image from 'next/image';
import styles from './styles.module.scss'
import logo from '../../../public/assets/images/landing page/logo.svg'
import socials from '../../../public/assets/images/landing page/socials.svg'
export default function CartFooter() {
    return(
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.content}>
                    <p className={styles.limited}>Limited offers</p>
                    <p className={styles.txt}>Join Our Style Squad- Get 10% <br/>Off Your First Order!</p>
                    <button>Shop our products</button>
                </div>
            </div>


            <div className={styles.footer}>
                <div className={styles.socials}>
                    <Image
                        src={logo}
                        alt='lol'
                    />

                    <Image
                        src={socials}
                        alt='lol'
                    />
                </div>

                {/* news letter */}
                <div className={styles.newsletter}>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                </div>

                <div className={styles.Copyright}>
                    <p>© Copyright SBK Fashion 2025, All Rights Reserved. | FAQ | Terms & Condition | Privacy Policy</p>
                </div>
        </div>
    );
}