'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss'
import logo from '../../../public/assets/images/landing page/logo2.svg'
import heartlogo from '../../../public/assets/images/navbar/heartlogo.svg'
import cartlogo from '../../../public/assets/images/navbar/cartlogo.svg'
import menuIcon from '../../../public/assets/images/navbar/hamburger.svg'
import arrowDown from '../../../public/assets/images/navbar/arrow up.svg'
import searchlogo from '../../../public/assets/images/navbar/searchlogo.svg'

import Image from 'next/image';

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Categories", submenu: ["All Categories", "Perfumes", "Bags", "Shoes", "Shades", "Accessories"] },
  { title: "Featured products", submenu: ["All Categories", "Perfumes", "Bags", "Shoes", "Heels & Slides", "Sneakers"] },
  { title: "Contact us", link: "/shop" },
];

export default function CartNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className={styles.navbar}>
      {/* Left: Hamburger + Logo */}
      <div className={styles.left}>
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Image src={menuIcon} alt="menu" />
        </button>
        <Image src={logo} alt="logo" className={styles.logo} />
      </div>

      {/* Desktop Menu */}
      <nav
        className={`${styles.menu} ${mobileOpen ? styles.open : ''}`}
      >
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              {item.submenu ? (
                <button onClick={() => toggleMenu(item.title)}>
                  {item.title}
                  {/* <Image
                    src={arrowDown}
                    alt="arrow"
                    className={styles.arrow}
                  /> */}
                </button>
              ) : (
                <a href={item.link}>
                  {item.title}
                  {/* <Image
                    src={arrowDown}
                    alt="arrow"
                    className={styles.arrow}
                  /> */}
                </a>
              )}

              {item.submenu && activeMenu === item.title && (
                <ul className={styles.dropdown}>
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right: Search, Heart, Cart */}
      <div className={styles.actions}>
        <div className={styles.searchbar}>
          <input
            type="text"
            placeholder="what are you looking for?"
            className={styles.searchInput}
          />
          <Image
            src={searchlogo}
            height={20}
            width={20}
            alt="search"
          />
        </div>
        <span>
          <Link href="/wishlist"><Image src={heartlogo} alt="heart" /></Link>
        </span>
        <a href="/cart">
          <Image src={cartlogo} alt="cart" />
        </a>
      </div>
    </header>
  );
}
























