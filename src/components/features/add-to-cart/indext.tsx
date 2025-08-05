'use client';
import styles from './styles.module.scss'
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';

export default function AddToCart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Your Cart is Empty</h2>
        <Link href="/">Go Back to Shop</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Image src={item.image} alt={item.name} width={550} height={500} className={styles.img}/>
          <div>
            <h4>{item.name}</h4>
            <p>add a description of the product down here</p>
            <p>reviews</p>
            <p>₦{item.price}</p>
            <p>quantity</p>
            <p>sizes</p>
            <Link href='/checkout'>
              <button>Add to cart</button>
            </Link>
            <button onClick={() => removeFromCart(item.id)} >Remove</button>
          </div>
        </div>
      ))}


      <button onClick={clearCart} style={{ marginTop: '20px' }}>
        Clear Cart
      </button>
    </div>
  );
}