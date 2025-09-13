'use client';

import React from 'react';
import imageone from '../../../../../../public/assets/images/landing page/image one.jpg';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Firstsection() {
  return (
    <div className={styles.cont}>
        <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className={styles.carousel}
        >
        {/* Same image repeated */}
        <SwiperSlide>
            <Image src={imageone} alt="Slide 1" className={styles.img}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={imageone} alt="Slide 2" className={styles.img}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={imageone} alt="Slide 3" className={styles.img}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={imageone} alt="Slide 4" className={styles.img}/>
        </SwiperSlide>
        </Swiper>
    </div>
  );
}