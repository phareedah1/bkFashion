'use client'
import styles from './styles.module.scss'
import React from 'react';
import { useState } from 'react';
import downarrow from '../../../../../../public/assets/images/shop/arrow-down.svg'
import uparrow from '../../../../../../public/assets/images/shop/arrow-up.svg'
import Image from 'next/image';

export default function Sidebar() {
    const [openSections, setOpenSections] = useState({
        productType: false,
        price: false,
        brand: false,
        size: false,
        color: false,
    });

    const toggleSection=(section:keyof typeof openSections) => {
        setOpenSections(prev => ({...prev, [section]: !prev[section]}));
    };

    const imageone = <Image src={uparrow} height={20} width={20} alt='arrow' />
    const imagetwo = <Image src={downarrow} height={20} width={20} alt='arrow2' />
    return(
        <aside className={styles.sidebar}>
            <h4>250 results found</h4>
            <div className={styles.filterSection}>
                <div onClick={() => toggleSection('productType')} className={styles.header}>
                    Product Type {openSections.productType ? imageone: imagetwo}
                </div>
                {openSections.productType && (
                    <div className={styles.optionsScrollable}>
                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Bags
                            </div>
                            <span className={styles.count}>(20)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Footware
                            </div>
                            <span className={styles.count}>(40)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Perfumes
                            </div>
                            <span className={styles.count}>(60)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Slides
                            </div>
                            <span className={styles.count}>(38)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Sunglasses
                            </div>
                            <span className={styles.count}>(50)</span>
                        </label>
                    </div>
                )}
            </div>



            <div className={styles.filterSection}>
                <p onClick={() => toggleSection('price')} className={styles.header}>
                    Price {openSections.price ? imageone: imagetwo}
                </p>
                {openSections.price &&(
                    <div>
                        <input type="range" min='48000' max='2556360'/>
                        <div className={styles.priceInputs}>
                            <input type="text" />
                            <input type="text" />
                        </div>
                    </div>
                )}
            </div>




            <div className={styles.filterSection}>
                <div onClick={() => toggleSection('productType')} className={styles.header}>
                    Brand {openSections.productType ? imageone: imagetwo}
                </div>
                {openSections.productType && (
                    <div className={styles.optionsScrollable}>
                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Louis Vuitton
                            </div>
                            <span className={styles.count}>(12)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Chanel
                            </div>
                            <span className={styles.count}>(5)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Hermes
                            </div>
                            <span className={styles.count}>(10)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Prada
                            </div>
                            <span className={styles.count}>(6)</span>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> Dior
                            </div>
                            <span className={styles.count}>(20)</span>
                        </label>
                    </div>
                )}
            </div>




            <div className={styles.filterSection}>
                <div onClick={() => toggleSection('productType')} className={styles.header}>
                    Size {openSections.productType ? imageone: imagetwo}
                </div>
                {openSections.productType && (
                    <div className={styles.optionsScrollable}>
                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> L
                            </div>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> M
                            </div>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> XL
                            </div>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> XXL
                            </div>
                        </label>

                        <label>
                            <div className={styles.itemName}>
                                <input type="checkbox" /> 32
                            </div>
                        </label>
                    </div>
                )}
            </div>
        </aside>
    );
}