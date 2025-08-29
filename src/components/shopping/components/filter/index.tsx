"use client";

import { useState } from "react";
import Back from "@/components/features/back-button";
import styles from "./styles.module.scss";
import filter from "../../../../../public/assets/images/shopping/filter.svg";
import arrowdown from "../../../../../public/assets/images/shopping/arrowdown.svg";
import Image from "next/image";

export default function Filter() {
  const [open, setOpen] = useState(false);

  const categories = [ "New Arrivals", "Best Selling", "Top Rating"];
  const category = ["All", "New Arrivals", "Best Selling", "Top Rating"];

  return (
    <div className={styles.container}>
      {/* Categories */}
      <div className={styles.word_filters}>
        <Back/>
        {/* Desktop version */}
        <div className={styles.desktopCategories}>
          {category.map((cat, i) => (
            <p key={i}>{cat}</p>
          ))}
        </div>

        {/* Mobile dropdown */}
        <div className={styles.mobileCategories}>
          <button onClick={() => setOpen(!open)}>
            All
            <Image src={arrowdown} alt="dropdown" width={15} height={15} />
          </button>
          {open && (
            <div className={styles.dropdown}>
              {categories.map((cat, i) => (
                <p key={i}>{cat}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filter */}
      <div className={styles.filter}>
        <Image src={filter} alt="filter" width={20} height={20} />
        <p>Filter</p>
        <Image src={arrowdown} alt="arrow" width={12} height={12} />
      </div>
    </div>
  );
}