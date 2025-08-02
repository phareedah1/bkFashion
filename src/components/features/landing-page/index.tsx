import React from 'react'
import Firstsection from './components/first-section'
import Sectiontwo from './components/second-section'
import FourthSection from './components/fourth-section'
import FifthSection from './components/fifth-section'

export default function LandingPage() {
    return(
        <div>
            <Firstsection />
            <Sectiontwo/>
            <FourthSection/>
            <FifthSection/>
        </div>
    )
}