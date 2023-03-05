import React from 'react'

import './styles.scss'

export default function AboutText() {
  return (
    <div className='aboutDiv'>
      <h2 className='mainHeadline'>SOBRE</h2>
      <p className='mainText'>Olá, meu nome é <span className='dd-highlight'>Márcio Gabriel</span> e desde os 8 anos de idade sou apaixonado pela lógica e pela habilidade de resolver problemas. <br /> <br /> Desde sempre a tecnologia e a curiosidade correm em minhas veias. Adoro descobrir como as coisas funcionam e muitas vezes replicá-las, <span className="dd-highlight">do meu jeito único.</span></p>
    </div>
  )
}
