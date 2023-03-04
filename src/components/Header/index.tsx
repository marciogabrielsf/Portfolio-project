import React from 'react'
import './styles.scss'

import { NavBarLinks, ActualEmail } from './static'

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav container'>
                <div className='leftMail'>
                    <a className='redirect' href={`mailto:${ActualEmail}`}>
                        <button className='mailButton'>
                            <i className="fa-regular fa-envelope"></i>
                        </button>
                    </a>
                    <p className='mail'>{ActualEmail}</p>
                </div>

                <ul className="nav_list">
                    {NavBarLinks.map(({ item, id, href }) => {
                        return (
                            <li className='navItens'>
                                {href !== '' ? <a href={href}>{item}</a> : <p>{item}</p>}
                            </li>
                        )
                    })}

                    <button className='hireMeButton'>Me Contrate Hoje!</button>
                </ul>

            </nav>
        </header>
    )
}
