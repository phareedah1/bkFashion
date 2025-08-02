// components/ProductCard.tsx
import Image from 'next/image';
import styles from './styles.module.scss'

type ProductProps = {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
};

export default function ProductCard({name, price, image, oldPrice,  }: ProductProps) {
    return(

    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt='bag' width={300} height={400} className={styles.image}/>
      </div>

      <div className={styles.details}>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>₦{price}</span>
          <span className={styles.oldPrice}>₦{oldPrice}</span>
        </div>
      </div>
    </div>
    );
}