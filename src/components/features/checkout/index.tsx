'use client';
import styles from './styles.module.scss';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import bin from "../../../../public/assets/images/shopping/bin.svg";
import Back from '../back-button';
import CartNavbar from '@/components/cart-navbar';
import CartFooter from '@/components/cart-footer';
import Quantity from '../quantity-button';

export default function CheckOut() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div>
      <CartNavbar/>
      <div className={styles.container}>
        <div className={styles.checkout_header}>
          <Back/>
          <p>Check Out</p>
        </div>
        <div className={styles.header}>
          <p>Product</p>
          <p>Size</p>
          <p>Quantity</p>
          <p>Price</p>
          <p></p>
        </div>

        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className={styles.item_info}>
            <div className={styles.image}>
              <Image src={item.image} alt={item.name} width={100} height={100} />
              <p>{item.name}</p>
            </div>
            <p>Size 45</p>
            <Quantity/>
            <p>₦{item.price}</p>
            <div>
              <Image src={bin} alt="delete" width={30} height={30} onClick={() => removeFromCart(item.id)} />
            </div>
          </div>
      ))}


          <div className={styles.summary}>
              <p>Sub total <span>₦203,000</span></p>
              <p>Shipping fee <span>₦2000</span></p>
              <p><strong>Total</strong> <strong>₦205,000</strong></p>
              <Link href="/billing" className={styles.checkoutlink}><button className={styles.checkoutBtn}>Proceed to Checkout</button></Link>
          </div>
      </div>

      <CartFooter/>
    </div>
  );
}
