import { useState } from "react";
import { motion } from "framer-motion";
import { container, motionItem } from "./motion";

import "./styles.scss";

import { NavBarLinks, ActualEmail } from "./static";

export default function Header() {
    const [toggleMenuState, setToggleMenuState] = useState(false);
    function handleToggleMenu() {
        setToggleMenuState(!toggleMenuState);
    }

    return (
        <header className="header">
            <motion.nav
                className="nav container"
                initial="hidden"
                animate="show"
                variants={container}
                exit="exit"
            >
                <motion.div variants={motionItem} className="leftMail">
                    <a className="redirect" href={`mailto:${ActualEmail}`}>
                        <button className="mailButton defaultButton">
                            <i className="fa-regular fa-envelope"></i>
                        </button>
                    </a>
                    <p className="mail">{ActualEmail}</p>
                </motion.div>

                <motion.div variants={motionItem} className="nav_toggle" onClick={handleToggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </motion.div>

                <div className={`nav_list_div ${toggleMenuState ? "isShown" : ""}`}>
                    <div className="close_button">
                        <i onClick={handleToggleMenu} className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className="nav_list">
                        {NavBarLinks.map(({ item, href }) => {
                            return (
                                <motion.li variants={motionItem} className="navItens">
                                    {href !== "" ? (
                                        <a onClick={handleToggleMenu} href={href}>
                                            {item}
                                        </a>
                                    ) : (
                                        <p>{item}</p>
                                    )}
                                </motion.li>
                            );
                        })}
                        <motion.li variants={motionItem} className="nav_contact">
                            <a href="#Contact">Contato</a>
                        </motion.li>
                    </ul>
                </div>
            </motion.nav>
        </header>
    );
}
