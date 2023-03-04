import React from 'react'

import HeroSection from './HeroSection'
import About from '../About'

import './styles.scss'


export default function Home() {
    return (
        <section className='HomeSection'>
            <div className="homeContainer container">
                <HeroSection />
            </div>
        </section>
    )
}
