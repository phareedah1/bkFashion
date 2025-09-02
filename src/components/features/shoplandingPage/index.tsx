'use client'
import React from 'react'
import styles from './styles.module.scss'
import Fourthsec from './components/fourth'
import Thirdsec from './components/third'
import Secondsec from './components/second'
import Firstsec from './components/first'
import ProductGrids from '@/components/shopping/components/productgrid'

const ShopLandingPage = () => {
  return (
    <div className={styles.cont}>
        <Firstsec/>
        <Secondsec/>
        <Thirdsec/>
        <ProductGrids/>
        <Fourthsec/>
    </div>
  )
}

export default ShopLandingPage