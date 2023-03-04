import React from 'react'
import HeroSection from './HeroSection'
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
