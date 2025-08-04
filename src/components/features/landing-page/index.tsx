import React from 'react'
import Firstsection from './components/first-section'
import Sectiontwo from './components/second-section'
import FourthSection from './components/fourth-section'
import FifthSection from './components/fifth-section'
import styles from './styles.module.scss'
import SectionSix from './components/sixth-section'

export default function LandingPage() {
    return(
        <div className={styles.container}>
            <Firstsection />
            <Sectiontwo/>
            <FourthSection/>
            <FifthSection/>
            <SectionSix/>
        </div>
    )
}