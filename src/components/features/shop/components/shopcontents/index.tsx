'use client';
import { useState } from "react";
import styles from './styles.module.scss'
import Sidebar from "../sidebar";
import list from '../../../../../../public/assets/images/shop/list.svg'
import twocolumns from '../../../../../../public/assets/images/shop/2columns.svg'
import threecolumns from '../../../../../../public/assets/images/shop/3columns.svg'
import Image from "next/image";
import ProductGrid from "./productgrid";
import Pagination from "@/components/pagination";

export default function ShopList() {
  const [sortOption, setSortOption] = useState('featured');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 105; // for example

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // fetch or display new data for that page here
  };
    return(
        <div className={styles.container}>
            <Sidebar/> 
            <div className={styles.sorting_container}>
              <div className={styles.sortBar}>
                <span className={styles.label}>Sort by:</span>
                
                <select value={sortOption} onChange={handleChange} className={styles.dropdown}>
                  <option value="featured">Featured</option>
                  <option value="best-selling">Best selling</option>
                  <option value="latest">Latest</option>
                  <option value="az">Alphabetically, A-Z</option>
                  <option value="za">Alphabetically, Z-A</option>
                  <option value="low-high">Price, Low to High</option>
                  <option value="high-low">Price, High to Low</option>
                  <option value="relevance">Relevance</option>
                </select>

                <div className={styles.viewToggle}>
                  <Image className={styles.listView} src={list} alt='list' height={25} width={25}/>
                  <Image className={styles.listView} src={twocolumns} alt='list' height={25} width={25}/>
                  <Image className={styles.listView} src={threecolumns} alt='list' height={25} width={25}/>
                </div>

              </div>

                <div>
                  <ProductGrid/>
                  <Pagination
                      currentPage={2} 
                      totalPages={6} 
                      onPageChange={handlePageChange} 
                  />
                </div>
            </div>

        </div>
    );
}



  

