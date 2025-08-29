'use client'
import Image from "next/image";
import { useWishlistStore } from "./wishliststore";
import styles from "./styles.module.scss";
import trashIcon from "../../../../public/assets/images/shopping/delete2.svg"; // use your delete icon path
import star from '../../../../public/assets/images/shopping/star.svg'
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlistStore();
  const AddToCart = useCartStore((state) => state.AddToCart);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className={styles.empty}>Your wishlist is empty.</p>
      ) : (
        <div className={styles.grid}>
          {wishlist.map((product) => (
            <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={400}
          className={styles.image}
        />
        <Image
          src={trashIcon}
          alt="Remove"
          className={styles.deleteIcon}
          width={25}
          height={25}
          onClick={() => removeFromWishlist(product.id)}
        />

        {/* Heart Icon */}

        <div className={styles.details}>
          <h4 className={styles.name}>{product.name}</h4>
          <div className={styles.priceWrapper}>
            <div>
              <span className={styles.price}>₦{product.price}</span>
              <span className={styles.oldPrice}>₦{product.oldPrice}</span>
              <Image src={star} alt="rating" className={styles.star}/>
            </div>
            <Link href="/cart">
              <div>
                <button>Add to cart</button>
              </div>
            </Link>
          </div>
        </div>
        </div>

          ))}
        </div>
      )}

      {wishlist.length > 0 && (
        <button className={styles.clearButton} onClick={clearWishlist}>
          Clear Wishlist
        </button>
      )}
    </div>
  );
}
