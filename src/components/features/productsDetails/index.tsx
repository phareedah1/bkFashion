'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Quantity from '../quantity-button'

const ProductDetails = () => {
  const product = {
    id: 1,
    name: 'Casablanca softer high heels',
    price: 144000,
    images: [
      '/images/shoe1.jpg',
      '/images/shoe2.jpg',
      '/images/shoe3.jpg',
      '/images/shoe4.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Step boldly into sophistication with the Casablanca Softer High Heels — a statement piece for the modern woman. Featuring a vibrant flame-inspired design on glossy satin, these heels blend elegance with attitude.',
    details: [
      'Striking flame graphic in bold gradient tones',
      'Sleek pointed toe for sharp silhouette',
      'Cushioned insole for added comfort',
      'Heel height: Approximately 4 inches',
      'Material: Premium satin with faux leather lining',
      'Available Sizes: 36-43',
    ],
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className={styles.product_page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        Home &gt; Shop &gt; <span>{product.name}</span>
      </div>

      <div className={styles.product_wrapper}>
        {/* Left - Thumbnails */}
        <div className={styles.thumbnail_column}>
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className={`${styles.thumb} ${
                selectedImage === img ? styles.active_thumb : ''
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image src={img} alt="thumb" width={60} height={80} />
            </div>
          ))}
        </div>

        {/* Middle - Main Image */}
        <div className={styles.main_image}>
          <Image
            src={selectedImage}
            alt={product.name}
            width={400}
            height={500}
          />
        </div>

        {/* Right - Product Info */}
        <div className={styles.product_info}>
          <h1>{product.name}</h1>
          <p className={styles.price}>₦{product.price.toLocaleString()}</p>

          {/* Sizes */}
          <div className={styles.sizes}>
            <p>Size Guide</p>
            <div className={styles.size_buttons}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.size_btn} ${
                    selectedSize === size ? styles.active_size : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className={styles.quant_row}>
            <Quantity/>
            <button className={styles.add_to_bag}>Add to Bag</button>
          </div>

          {/* Buttons */}
          <div className={styles.action_buttons}>
            <button className={styles.buy_now}>Buy it Now</button>
          </div>

          {/* Store Info */}
          <div className={styles.store_info}>
            <p>
              Pickup available at <b>SBKFashion Store</b>
            </p>
            <p className={styles.in_stock}>In stock, usually ready in 24 hours</p>
            <a href="#">View store information</a>
            <p>Shipping calculated at checkout</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className={styles.description_section}>
        <h2>Product Description</h2>
        <p>{product.description}</p>

        <h3>Details</h3>
        <ul>
          {product.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductDetails