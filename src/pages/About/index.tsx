import React from 'react'

import ProfileImage from '@/assets/profile.jpeg'

import './styles.scss'

export default function About() {
  return (
    <div className='aboutContainer container'>
      <h1 className='mainHeadline'>Sobre</h1>
      <p>Olá, meu nome é <span>Márcio Gabriel</span> e desde os 7 anos de idade sou apaixonado pela lógica e pela habilidade de resolver problemas.</p>
    </div>
  )
}
