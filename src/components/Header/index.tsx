import { useState } from 'react'
import './styles.scss'

import { NavBarLinks, ActualEmail } from './static'

export default function Header() {

    const [toggleMenuState, setToggleMenuState] = useState(false);
    function handleToggleMenu() {
        setToggleMenuState(!toggleMenuState)
    }

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

                <div className={`nav_list_div ${toggleMenuState ? 'isShown' : ''}`}>
                    <div className="close_button">
                        <i onClick={handleToggleMenu} className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className="nav_list">
                        {NavBarLinks.map(({ item, href }) => {
                            return (
                                <li className='navItens'>
                                    {href !== '' ? <a onClick={handleToggleMenu} href={href}>{item}</a> : <p>{item}</p>}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="nav_toggle" onClick={handleToggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>

            </nav>
        </header>
    )
}
