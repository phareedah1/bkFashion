'use client'
import Pagination from "../pagination";
import Filter from "./components/filter";
import ProductGrids from "./components/productgrid";
import styles from './styles.module.scss'
import React from "react";
import { useState } from "react";



export default function Shopping() {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 105; // for example

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  
    return(
        <div>
          <div className={styles.backgroundimage}>
            <div className={styles.text}>
              <p className={styles.text1}>Shopping Page</p>
              <p className={styles.text2}>Discover our curated favourites, handpicked just for you</p>
            </div>
          </div>
          <div className={styles.content}>
           <Filter/>
            <ProductGrids/>
            <Pagination
                currentPage={2} 
                totalPages={6} 
                onPageChange={handlePageChange} 
            />
          </div>
        </div>
    );
}