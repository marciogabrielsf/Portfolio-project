import React from 'react'

import ProfileImage from '@/assets/profile.jpeg'

import './styles.scss'

export default function HeroSection() {
  return (
    <div className='mastHead'>
      <img className='profileImage' src={ProfileImage} alt="" width={180} />
      <p className='topName'>Olá, meu nome é Márcio</p>
      <h1 className="mainTitle">E vou elevar o patamar da sua compania com conhecimento e experiência.</h1>
    </div>
  )
}
