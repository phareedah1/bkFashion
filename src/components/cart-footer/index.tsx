import Image from 'next/image';
import styles from './styles.module.scss'
import logo from '../../../public/assets/images/landing page/logo.svg'
import socials from '../../../public/assets/images/landing page/socials.svg'
export default function CartFooter() {
    return(
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.content}>
                    <h4>Limited offers</h4>
                    <p>Join our style squad- Get 10% off your first order!</p>
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
        </div>
    );
}