import React from 'react'
import './styles.scss'

import { NavBarLinks, ActualEmail } from './static'

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav container'>
                <div className='leftMail'>
                    <button className='mailButton'>
                        <i className="fa-regular fa-envelope"></i>
                    </button>
                    <p className='mail'>{ActualEmail}</p>
                </div>

                <ul className="nav_list">
                    {NavBarLinks.map(({ item, id }) => {
                        return (
                            <li className='navItens'>
                                <p>{item}</p>
                            </li>
                        )
                    })}

                    <button className='hireMeButton'>Me Contrate Hoje!</button>
                </ul>

            </nav>
        </header>
    )
}
