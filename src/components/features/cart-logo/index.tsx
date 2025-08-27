'use client'
import styles from './styles.module.scss'
import close from '../../../../public/assets/images/landing page/close.svg'
import cartlogo from '../../../../public/assets/images/navbar/cartlogo.svg'
import bin from "../../../../public/assets/images/shopping/bin.svg"
import { useCartStore } from '@/store/cartStore'
import React, { useState } from 'react'
import Image from 'next/image'
import Quantity from '../quantity-button'
import Link from 'next/link'

const CartLogo = () => {
    const { cart, removeFromCart, clearCart } = useCartStore();
    const [isOpen, setIsOpen] = useState(false)
  return (
     <>
      {/* Cart Icon (to open drawer) */}
      <Image
        src={cartlogo}
        alt='cart' 
        onClick={() => setIsOpen(true)} className={styles.cartBtn}
      />

      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      {/* Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>Cart (2)</h2>
          <Image
            src={close}
            alt='close'
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          />
        </div>

        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className={styles.item_info}>
            <div className={styles.imagedeets_cont}>
              <div className={styles.image_cont}><Image src={item.image} alt={item.name} width={200} height={150} /></div>
              <div>
                <p>{item.name}</p>
                <p>₦{item.price}</p>
              </div>
            </div>

          <div className={styles.edit}>
            <Image src={bin} alt='bin'/>
            <Quantity/>
          </div>
        </div>
      ))}

      <Link href="/billing"><button className={styles.checkout}>Checkout</button></Link>
      </div>
    </>
  )
}

export default CartLogo