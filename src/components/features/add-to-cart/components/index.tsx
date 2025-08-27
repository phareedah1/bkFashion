import styles from './styles.module.scss'
import ProductCard from '@/components/shopping/components/productcard'
import { products } from '@/components/shopping/components/data'
import React from 'react'

const Similarprods = () => {
  return (
        <div className={styles.grid}>
            {products.map((p)=> (
                <ProductCard key={p.id} {...p}/>
                ))}
        </div>
  )
}

export default Similarprods