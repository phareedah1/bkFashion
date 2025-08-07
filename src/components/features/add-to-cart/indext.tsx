'use client';
import styles from './styles.module.scss'
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import Back from '../back-button';
import CartNavbar from '@/components/cart-navbar';
import CartFooter from '@/components/cart-footer';
import Quantity from '../quantity-button';

export default function AddToCart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  // if (cart.length === 0) {
  //   return (
  //     <div style={{ padding: '20px' }}>
  //       <h2>Your Cart is Empty</h2>
  //       <Link href="/">Go Back to Shop</Link>
  //     </div>
  //   );
  // }

  const boxes = Array.from({length:9}, (_,i) => 36 + i)
  return (
    
    <div>
      <CartNavbar/>
      <div className={styles.product_details_header}>
        <Back/>
        <p>Product detail</p>
      </div>
      {cart.map((item) => (
        <div key={item.id} className={styles.additional_info_div}>
          <div className={styles.image_div}>
            <Image src={item.image} alt={item.name} width={550} height={500} className={styles.img}/>
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


      {/* <button onClick={clearCart} style={{ marginTop: '20px' }}>
        Clear Cart
      </button> */}


      <CartFooter/>
    </div>
  );
}