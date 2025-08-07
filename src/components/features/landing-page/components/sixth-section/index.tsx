import styles from './styles.module.scss'
import car from '../../../../../../public/assets/images/landing page/car.svg'
import headphone from '../../../../../../public/assets/images/landing page/headphones.svg'
import shield from '../../../../../../public/assets/images/landing page/shields.svg'
import quote from '../../../../../../public/assets/images/landing page/quote.svg'
import stars from '../../../../../../public/assets/images/landing page/star.svg'
import google from '../../../../../../public/assets/images/landing page/google.svg'
import Image from 'next/image';


const reviews = [
  { name: "John Eugene", date: "2025-02-17", text: "I had a great shopping experience, item was exactly as the picture... Overall great service", avatar: "J" },
  { name: "David Adeleke", date: "2025-02-17", text: "I had a great shopping experience, item was exactly as the picture... Overall great service", avatar: "D" },
  { name: "Mary Simon", date: "2025-02-17", text: "I had a great shopping experience, item was exactly as the picture... Overall great service", avatar: "M" },
  { name: "Ayo Feranmi", date: "2025-02-17", text: "I had a great shopping experience, item was exactly as the picture... Overall great service", avatar: "A" },
];

export default function ReviewsSection() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}><p>Current Reviews</p></div>
      {/* Reviews Grid */}
      <div className={styles.reviewsGrid}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.reviewCard}>
            <div className={styles.rating}>
                <Image
                    src={quote}
                    alt='lo'
                />

                <div className={styles.google}>
                    <Image
                        src={stars}
                        alt='lo'
                        className={styles.stars}
                    />
                <Image
                    src={google}
                    alt='lo'
                    className={styles.google_icon}
                />
                </div>
            </div>
            <p className={styles.text}>{r.text}</p>
            <div className={styles.userInfo}>
              <span className={styles.avatar}>{r.avatar}</span>
              <div>
                <h4>{r.name}</h4>
                <small>{r.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Section */}
      <div className={styles.services}>
        <div className={styles.serviceItem}>
          <Image src={car} alt="delivery" />
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className={styles.serviceItem}>
          <Image src={headphone}  alt="support" />
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className={styles.serviceItem}>
          <Image src={shield}  alt="money" />
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
