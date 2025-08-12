'use client'
import { useCartStore } from '@/store/cartStore';
import styles from './styles.module.scss'

import React, { useState } from 'react'
import Image from 'next/image';

const OrderDiv = () => {
  const [payment, setPayment] = useState("cash");
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className={styles.container}>
      {cart.map((item) => (
        <div key={item.id} className={styles.cart_info_div}>
          <div className={styles.img_name}>
            <Image src={item.image} alt={item.name} width={60} height={60} className={styles.img}/>
            <p className={styles.image_name}>{item.name}</p>
          </div>
          <div><p className={styles.image_price}>₦{item.price}</p></div>
        </div>
      ))}

      <div className={styles.total_cont}>
        <div>
          <p>Subtotal:</p>
          <p>N20300</p>
        </div>
          <div>
          <p>Shopping fee:</p>
          <p>N2000</p>
        </div>
        <div>
          <p>Sub total:</p>
          <p>N1750</p>
        </div>
      </div>


      <div className={styles.payment}>
        <form>
          <label>
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={payment === "bank"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Bank
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={payment === "cash"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Cash on delivery
          </label>
        </form>
      </div>

      <div className={styles.couponSec}>
        <input type="text" placeholder='Coupon Code'/>
        <button>Apply coupon</button>
      </div>
      <div className={styles.place_order}><button>Place order</button></div>
    </div>
  )
}



export default OrderDiv