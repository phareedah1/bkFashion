'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import searchlogo from '../../../../public/assets/images/navbar/searchlogo.svg';
import { useProductStore } from '../../productStore';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  popular: string[];
  onSelect?: (p: Product | string) => void;
};

export default function SearchBox({ popular, onSelect }: Props) {
  const products = useProductStore((state) => state.products); 
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // filter products by query
  const filtered = useMemo(() => {
    if (!query.trim()) return products.slice(0, 5);
    const q = query.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 8);
  }, [products, query]);

  // open when focused/typing, close on outside click & Esc
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className={styles.searchBox} ref={wrapRef}>
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
        <div aria-label="Search">
          <Image
            src={searchlogo}
            alt='search'
            className={styles.iconBtn} 
          />
        </div>
      </div>

      {open && (
        <div className={styles.dropdown} role="listbox">
          {/* Left column: popular searches */}
          <div className={styles.column}>
            <h4 className={styles.title}>Popular Searches</h4>
            <ul className={styles.list}>
              {popular.map((term, i) => (
                <li
                  key={i}
                  className={styles.listItem}
                  onMouseDown={() => {
                    setQuery(term);
                    onSelect?.(term);
                    setOpen(false);
                  }}
                >
                  {term}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: trending / filtered products */}
          <div className={styles.column}>
            <h4 className={styles.title}>Trending Products</h4>
            <ul className={styles.productList}>
              {filtered.map((p) => (
                <li
                  key={p.id}
                  className={styles.productItem}
                  onMouseDown={() => {
                    setQuery(p.name);
                    onSelect?.(p);
                    setOpen(false);
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={50}
                    height={50}
                    className={styles.thumb}
                  />
                  <div className={styles.meta}>
                    <span className={styles.pName}>{p.name}</span>
                    <span className={styles.pPrice}>₦{p.price.toLocaleString()}</span>
                  </div>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className={styles.empty}>No matches</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
