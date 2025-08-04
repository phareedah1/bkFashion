import styles from './styles.module.scss'
import logo from '../../../public/assets/images/landing page/logo.svg'
import socials from '../../../public/assets/images/landing page/socials.svg'
import Image from 'next/image';
export default function Footer() {
    return(
        <div className={styles.container}>
            {/* logo */}
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


            {/* address */}
            <div>
                <p>Address</p>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>support@sbkfashiongmail.com</p>
                <p>+2349139454991, 08044453355</p>
            </div>


            {/* news letter */}
            <div className={styles.newsletter}>
                <h4>News Letter</h4>
                <p>Subscribe to our newsletter to get amazing discount</p>
                <div className={styles.inputGroup}>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
}