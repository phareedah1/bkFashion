'use client'
import Image from "next/image";
import { useWishlistStore } from "./wishliststore";
import styles from "./styles.module.scss";
import trashIcon from "../../../../public/assets/images/shopping/delete2.svg"; // use your delete icon path

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlistStore();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className={styles.empty}>Your wishlist is empty.</p>
      ) : (
        <div className={styles.grid}>
          {wishlist.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={300}
                  className={styles.image}
                />
                <Image
                  src={trashIcon}
                  alt="Remove"
                  className={styles.deleteIcon}
                  onClick={() => removeFromWishlist(product.id)}
                />
              </div>
              <div className={styles.details}>
                <h4 className={styles.name}>{product.name}</h4>
                <div className={styles.priceWrapper}>
                  <span className={styles.price}>₦{product.price}</span>
                  <span className={styles.oldPrice}>₦{product.oldPrice}</span>
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
