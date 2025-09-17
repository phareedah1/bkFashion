'use client';
import styles from './styles.module.scss'
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import Back from '../back-button';
import Quantity from '../quantity-button';
import {products} from '../../shopping/components/data'
import john from '../../../../public/assets/images/shopping/john.svg'
import stars2 from '../../../../public/assets/images/cart/stars.svg'
import stars from '../../../../public/assets/images/shopping/star.svg'
import Similarprods from './components';

export default function AddToCart() {
  const { cart } = useCartStore();

  const boxes = Array.from({ length: 9 }, (_, i) => 36 + i);

  // Hardcoded reviews
  const reviews = [
    { user: "John Doe", text: "This product is amazing! Totally worth it." },
    { user: "Mary Jane", text: "Good quality, fast shipping." },
    { user: "Luke Fox", text: "Nice one, would definitely recommend." },
  ];

  // Hardcoded ratings
  const ratings = [
    { stars: 1, count: 45 },
    { stars: 1, count: 3 },
    { stars: 1, count: 1 },
    { stars: 1, count: 0 },
    { stars: 1, count: 0 },
  ];

  // Similar products → only first 8
  const similarProducts = useCartStore.getState().cart.slice(0, 8);

  return (
    <div className={styles.cont}>
      <div className={styles.product_details_header}>
        <Back />
        <p>Product detail</p>
      </div>

      {cart.map((item) => (
        <div key={item.id} className={styles.additional_info_div}>
          <div className={styles.image_div}>
            <Image src={item.image} alt={item.name} width={550} height={450} className={styles.img}/>
            <div className={styles.thumbnails}>
                {[item.image, item.image, item.image, item.image].map((thumb, i) => (
                  <Image
                    key={i}
                    src={thumb}
                    alt={`thumb-${i}`}
                    width={100}
                    height={100}
                    className={styles.thumb}
                  />
                ))}
            </div>
          </div>
          <div className={styles.image_info_div}>
            <p className={styles.image_name}>{item.name}</p>
            <p className={styles.image_description}>add a description of the product down here</p>
            <p className={styles.image_reviews}>reviews</p>
            <p className={styles.image_price}>₦{item.price}</p>
            <div>
              <p>Quantity</p>
              <Quantity/>
            </div>
            <div>
              <p>sizes</p>
              <div className={styles.grid}>
                {boxes.map((num) => (
                  <div key={num} className={styles.box}>
                    {num}
                  </div>
                ))}
              </div>
            </div>
            <Link href='/checkout'>
              <button>Add to cart</button>
            </Link>
            {/* <button onClick={() => removeFromCart(item.id)} >Remove</button> */}
          </div>
        </div>
      ))}

      {/* REVIEWS + RATINGS */}
      <div className={styles.review_rating_section}>
        {/* Reviews */}
        <div className={styles.reviews}>
          <h3>Customer Reviews</h3>
          {reviews.map((r, i) => (
            <div key={i} className={styles.review}>
              <div>
                <Image src={john} alt="star" />
              </div>

              <div className={styles.info}>
                <strong>{r.user}</strong>
                <Image src={stars} alt='star'/>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ratings */}
        <div className={styles.ratings}>
          <h3>Ratings</h3>
          <Image src={stars2} alt='stars'/>
          {ratings.map((r, i) => (
            <div key={i} className={styles.rating_row}>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{
                    width: `${(r.count / 120) * 100}%`,
                  }}
                />
              </div>
              <span>{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      <Similarprods/>
    </div>
  );
}
