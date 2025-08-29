import Image from "next/image";
import styles from "./styles.module.scss";
import star from "../../../../../public/assets/images/shopping/star.svg";
import heart from "../../../../../public/assets/images/shopping/primary.svg"; // outline heart
import filledHeart from "../../../../../public/assets/images/shopping/delete.svg"; // you’ll need to add this filled heart asset
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "../../../features/wishlist/wishliststore";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  oldPrice: number;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  oldPrice,
}: ProductProps) {
  const AddToCart = useCartStore((state) => state.AddToCart);

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();

  const isInWishlist = wishlist.some((item) => item.id === id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image, category, oldPrice });
    }
  };

  const handleAddToCart = () => {
    AddToCart({ id, name, price, image, category, oldPrice });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={400}
          className={styles.image}
        />

        {/* Heart Icon */}
        <div className={styles.wishlistIcon} onClick={handleWishlistToggle}>
          <Image
            src={isInWishlist ? filledHeart : heart}
            alt="wishlist"
            width={24}
            height={24}
          />
        </div>

        <div className={styles.details}>
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.priceWrapper}>
            <div>
              <span className={styles.price}>₦{price}</span>
              <span className={styles.oldPrice}>₦{oldPrice}</span>
              <Image src={star} alt="rating" className={styles.star}/>
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
