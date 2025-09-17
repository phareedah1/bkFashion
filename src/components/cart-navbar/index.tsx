
'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import logo from '../../../public/assets/images/landing page/logo2.svg'
import heartlogo from '../../../public/assets/images/navbar/heartlogo.svg';
import searchlogo from '../../../public/assets/images/navbar/searchlogo.svg'
import menuIcon from '../../../public/assets/images/navbar/hamburger.svg';
import SearchBox from '../features/search-box';
import Image from 'next/image';
import { useProductStore } from '../productStore';
import CartLogo from '../features/cart-logo';


const menuItems = [
  { title: "Home", link: "/" },
  { title: "Categories", submenu: ["All Categories", "Perfumes", "Bags", "Shoes", "Shades", "Accessories"] },
  { title: "Featured products", submenu: ["All Categories", "Perfumes", "Bags", "Shoes", "Heels & Slides", "Sneakers"] },
  { title: "Contact us", link: "/shop" },
];

export default function Navbar() {
  const products = useProductStore((state) => state.products);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);


  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const [searchOpen, setSearchOpen] =useState(false);
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
                </button>
              ) : (
                <a href={item.link}>
                  {item.title}
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
        {/* <div className={styles.searchbar}>
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
        </div> */}
        <SearchBox
          popular={['Casablanca', 'Bags', 'Bygahi', 'Sneakers', "L'Oréal Paris"]}
          onSelect={(item) => console.log(item)}
        />

        <button className={styles.searchToggle} onClick={() => setSearchOpen(true)}>
          <Image src={searchlogo} height={22} width={22} alt="search" />
        </button>
        <span>
          <Image src={heartlogo} alt="heart" />
        </span>
        <CartLogo/>
      </div>

      {searchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchHeader}>
            <button className={styles.hamburger}>
              <Image src={menuIcon} alt="menu" />
            </button>
            <Image src={logo} alt="logo" className={styles.logoSmall} />
            <button className={styles.closeBtn} onClick={() => setSearchOpen(false)}>
              ✕
            </button>
          </div>
          <div className={styles.searchBox}>
            <input type="text" placeholder="What are you looking for?" />
            <button>
              <Image src={searchlogo} alt="go" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

























