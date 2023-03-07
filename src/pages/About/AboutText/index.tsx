import React from 'react'

import './styles.scss'

export default function AboutText() {
  return (
    <div className='aboutDiv shinyContainer'>
      <div className="about_copy">
        <h2 className='main_headline'>SOBRE</h2>
        <p className='mainText'>Olá, meu nome é <span className='dd-highlight'>Márcio Gabriel</span> e desde os 8 anos de idade sou apaixonado pela lógica e pela transformação de idéias em produtos reais. </p>
        <p className="mainText">Desde o início da minha vida a tecnologia e a curiosidade me conquistaram e correm em minhas veias até hoje. </p>
        <p className="mainText">Atualmente estou cursando Ciência da computação na Universidade Estadual do Ceará - UECE.</p>
        <p className='mainText'>Adoro descobrir como as coisas funcionam e muitas vezes replicá-las, <span className="dd-highlight">do meu jeito único.</span>
        </p>
        <p className="mainText">Algumas tecnologias que eu trabalho:</p>
        <ul className='technologies'>
          <li>JavaScript</li>
          <li>React</li>
          <li>mongoDB</li>
          <li>mySQL</li>
          <li>Flutter</li>
          <li>NodeJS</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </div>
  )
}
