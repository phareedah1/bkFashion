import styles from "./styles.module.scss"

import React from 'react'

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
                <div>
                  <p>ship</p>
                </div>
                <div>
                  <p>pick up</p>
                </div>
              </div>
              <div className={styles.delivery_deets_input1}>
                <div className={styles.form_group}>
                  <label className={styles.form_label} htmlFor="firstName">Email Address</label>
                  <input
                    type="text"
                    id="firstName"
                    className={styles.form_input2}
                  />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label} htmlFor="firstName">Email Address</label>
                  <input
                    type="text"
                    id="firstName"
                    className={styles.form_input2}
                  />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label} htmlFor="firstName">Email Address</label>
                  <input
                    type="text"
                    id="firstName"
                    className={styles.form_input2}
                  />
                </div>

                <div className={styles.delivery_deets_input2}>
                  <div className={styles.form_group}>
                    <label className={styles.form_label} htmlFor="firstName">Email Address</label>
                    <input
                      type="text"
                      id="firstName"
                      className={styles.form_input2}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label className={styles.form_label} htmlFor="firstName">Email Address</label>
                    <input
                      type="text"
                      id="firstName"
                      className={styles.form_input2}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label className={styles.form_label} htmlFor="firstName">Email Address</label>
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