import React from 'react'
import Firstsection from './components/first-section'
import Sectiontwo from './components/second-section'
import FourthSection from './components/fourth-section'
import FifthSection from './components/fifth-section'
import styles from './styles.module.scss'
import SectionSix from './components/sixth-section'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function LandingPage() {
    return(
        <div className={styles.container}>
            <Navbar/>
            <Firstsection />
            <Sectiontwo/>
            <FourthSection/>
            <FifthSection/>
            <SectionSix/>
            <Footer/>
        </div>
    )
}