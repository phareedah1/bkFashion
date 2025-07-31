'use client';

import Link from 'next/link';
import styles from './styles.module.scss'
import logo from '../../../public/assets/images/navbar/sbk-logo.svg'
import heartlogo from '../../../public/assets/images/navbar/heartlogo.svg'
import cartlogo from '../../../public/assets/images/navbar/cartlogo.svg'
import searchlogo from '../../../public/assets/images/navbar/searchlogo.svg'
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">        
        <Image
            src={logo}
            height={100}
            width={260}
            alt='logo'
        />
          {/* <span className={styles.sLogo}>S</span> BK FASHION */}
        </Link>
      </div>

      {/* Center: Menu Links */}
      <ul className={styles.navLinks}>
        <li><Link href="/">Whats new</Link></li>
        <li><Link href="/men">Men</Link></li>
        <li><Link href="/women">Women</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/others">Others</Link></li>
      </ul>

        <div className={styles.icons}>
            <div className={styles.searchWrapper}>
                <input 
                    type="text" 
                    placeholder="what are you looking for?" 
                    className={styles.searchInput} 
                />
            <Image
                src={searchlogo}
                height={20}
                width={20}
                alt='search'
            />
            </div>
            <Image
                src={heartlogo}
                height={25}
                width={25}
                alt='heart'
            />

            <div className={styles.cart}>
                <span className={styles.badge}>2</span>
            <Image
                src={cartlogo}
                height={25}
                width={25}
                className={styles.icons}
                alt='cart'
            />   
            </div>
      </div>


    </nav>
  );
}
