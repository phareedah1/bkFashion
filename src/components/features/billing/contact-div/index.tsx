import styles from "./styles.module.scss"
import car from '../../../../../public/assets/images/billing/delivery-fast 1.svg'
import shop from '../../../../../public/assets/images/billing/delivery-fast 2.svg'
import React from 'react'
import Image from "next/image"

const ContactDiv = () => {
  return (
        <div className={styles.container}>
          <div className={styles.contact_div_cont}>
            <p>Contact Information</p>
            <div className={styles.contact_input_div_cont}>

              <div className={styles.form_group}>
                <label className={styles.form_label} htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className={styles.form_input}
                />
              </div>

              <div className={styles.form_group}>
                <label className={styles.form_label} htmlFor="firstName">Last Name</label>
                <input
                  type="text"
                  id="firstName"
                  className={styles.form_input}
                />
              </div>

              <div className={styles.form_group}>
                <label className={styles.form_label} htmlFor="firstName">Phone Number</label>
                <input
                  type="text"
                  id="firstName"
                  className={styles.form_input}
                />
              </div>

              <div className={styles.form_group}>
                <label className={styles.form_label} htmlFor="firstName">Email Address</label>
                <input
                  type="text"
                  id="firstName"
                  className={styles.form_input}
                />
              </div>
            </div>

            <div>
              <p>Delivery details</p>
              <div className={styles.ship_pickup_cont}>
                <div className={styles.car}>
                  <p>ship</p>
                  <Image src={car} height={30} width={30} alt='car'/>
                </div>
                <div className={styles.shop}>
                  <p>pick up</p>
                  <Image src={shop} height={30} width={30} alt='shop'/>
                </div>
              </div>
              <div className={styles.delivery_deets_input1}>
                <div className={styles.form_group}>
                  <label className={styles.form_label} htmlFor="firstName">Country/Region</label>
                  <input
                    type="text"
                    id="country"
                    className={styles.form_input2}
                  />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label} htmlFor="firstName">Address</label>
                  <input
                    type="text"
                    id="firstName"
                    className={styles.form_input2}
                  />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label} htmlFor="firstName">Apartment</label>
                  <input
                    type="text"
                    id="firstName"
                    className={styles.form_input2}
                  />
                </div>

                <div className={styles.delivery_deets_input2}>
                  <div className={styles.form_group}>
                    <label className={styles.form_label} htmlFor="firstName">City</label>
                    <input
                      type="text"
                      id="firstName"
                      className={styles.form_input2}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label className={styles.form_label} htmlFor="firstName">State</label>
                    <input
                      type="text"
                      id="firstName"
                      className={styles.form_input2}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label className={styles.form_label} htmlFor="firstName">Postal code(optional)</label>
                    <input
                      type="text"
                      id="firstName"
                      className={styles.form_input2}
                    />
                  </div>
                </div>

                <div className={styles.save_input}>
                  <input type='checkbox'/>
                  <p>Save this information for next time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default ContactDiv