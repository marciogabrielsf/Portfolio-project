import React from 'react'

import ProfileImage from '@/assets/profile.jpeg'

import './styles.scss'
import AboutText from './AboutText'

export default function About() {
  return (
    <section id='About' className="aboutSection section">
      <div className='aboutContainer container'>
        <AboutText />
      </div>
    </section>
  )
}
