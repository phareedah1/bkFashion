'use client'
import Pagination from "../pagination";
import Filter from "./components/filter";
import ProductGrids from "./components/productgrid";
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
            <Filter/>
            <ProductGrids/>
            <Pagination
                currentPage={2} 
                totalPages={6} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
}