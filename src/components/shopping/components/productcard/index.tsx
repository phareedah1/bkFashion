import Image from 'next/image';
import styles from './styles.module.scss';
import star from '../../../../../public/assets/images/shopping/star.svg';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  oldPrice: number;
};

export default function ProductCard({ id, name, price, image, category, oldPrice }: ProductProps) {
  const AddToCart = useCartStore((state) => state.AddToCart);

  const handleAddToCart = () => {
    AddToCart({ id, name, price, image, category,oldPrice });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} width={300} height={400} className={styles.image} />


        <div className={styles.details}>
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.priceWrapper}>
            <div>
              <span className={styles.price}>₦{price}</span>
              <span className={styles.oldPrice}>₦{oldPrice}</span>
              <Image src={star} alt="rating" />
            </div>
            <Link href="/cart">
              <div>
                <button onClick={handleAddToCart}>Add to cart</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
