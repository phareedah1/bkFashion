import Back from '../back-button'
import ContactDiv from './contact-div'
import OrderDiv from './order-div'
import styles from './styles.module.scss'

import React from 'react'

const Billing = () => {
  return (
    <div>
      <div className={styles.header_cont}>
        <Back/>
        <p>Billing details</p>
      </div>

      <div className={styles.cont}>
        <ContactDiv/>
        <OrderDiv/>
      </div>
    </div>
  )
}

export default Billing