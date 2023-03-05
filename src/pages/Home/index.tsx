import React from 'react'

import HeroSection from './HeroSection'
import About from '../About'

import './styles.scss'
import ScrollDownLottie from './ScrollDown'


export default function Home() {
    return (
        <section className='HomeSection section'>
            <div className="homeContainer container">
                <HeroSection />
                <ScrollDownLottie />
            </div>
        </section>
    )
}
