'use client'
import Image from 'next/image'
import { useRef } from 'react'
import styles from './styles.module.scss'
import itemone from '../../../../../../public/assets/images/landing page/item1.jpg'
import itemtwo from '../../../../../../public/assets/images/landing page/item2.jpg'
import itemthree from '../../../../../../public/assets/images/landing page/item3.png'
import forward from '../../../../../../public/assets/images/landing page/Vector.svg'
import backward from '../../../../../../public/assets/images/landing page/Vector (1).svg'
export default function Sectiontwo() {
  // explicitly type the ref as an HTMLDivElement
  const scrollRef = useRef<HTMLDivElement>(null);

  // type the direction parameter
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      // TS knows scrollTo exists on HTMLDivElement
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.cont}>
            <div className={styles.card_cont}>
                <div className={styles.card}>
                    <h2>Discover the<br />latest arrivals</h2>
                    <div className={styles.line}></div>
                    <p>Browse Categories</p>
                </div>
            </div>

        <div className={styles.wrapper}>
        {/* Left arrow */}
        <button className={styles.arrowLeft} onClick={() => scroll('right')}>
           <Image src={forward} alt='hi'/>
        </button>

        {/* Scrollable content */}
        <div className={styles.slideshow_cont} ref={scrollRef}>
            <div>
                <Image src={itemone} alt='img' height={450} width={320} />
                <div className={styles.productCard}>
                    <p className={styles.name}>Bvlgari Hedge Slide</p>
                    <div className={styles.priceRow}>
                        <span className={styles.currentPrice}>₦48,000</span>
                        <span className={styles.oldPrice}>₦10,000</span>
                    </div>
                </div>
            </div>
            <div>
                    <Image src={itemtwo} alt='img' height={450} width={320} />
                    <div className={styles.productCard}>
                        <p className={styles.name}>Bvlgari Hedge Slide</p>
                        <div className={styles.priceRow}>
                            <span className={styles.currentPrice}>₦48,000</span>
                            <span className={styles.oldPrice}>₦10,000</span>
                        </div>
                    </div>
            </div>
            <div>
                <Image src={itemthree} alt='img' height={450} width={320} />
                <div className={styles.productCard}>
                    <p className={styles.name}>Bvlgari Hedge Slide</p>
                    <div className={styles.priceRow}>
                        <span className={styles.currentPrice}>₦48,000</span>
                        <span className={styles.oldPrice}>₦10,000</span>
                    </div>
                </div>
            </div>
            <div>
                <Image src={itemthree} alt='img' height={450} width={320} />
                <div className={styles.productCard}>
                    <p className={styles.name}>Bvlgari Hedge Slide</p>
                    <div className={styles.priceRow}>
                        <span className={styles.currentPrice}>₦48,000</span>
                        <span className={styles.oldPrice}>₦10,000</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right arrow */}
        <button className={styles.arrowRight} onClick={() => scroll('left')}>
            <Image src={backward} alt='hi'/>
        </button>
        </div>
    </div>

);
}