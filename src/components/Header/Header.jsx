import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './Header.module.css'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={styles.header}>

            <NavLink to="/" className={styles.logotype}>
                <div className={styles.logotype}>
                    <img src={logo} alt="Logotype" />
                    <div className={styles.text}>
                        <span>vagan</span>
                        <span>mkrtchyan</span>
                    </div>
                </div>
            </NavLink>
            <nav className={styles.navigation}>
                <ul>
                    <li><NavLink to="/about" activeClassName={styles.active} data-content="ABOUT">about</NavLink></li>
                    <li><NavLink to="/skills" activeClassName={styles.active} data-content="SKILLS">skills</NavLink></li>
                    <li><NavLink to="/projects" activeClassName={styles.active} data-content="PROJECTS">projects</NavLink></li>
                    <li><NavLink to="/contact" activeClassName={styles.active} data-content="CONTACT ME">contact me</NavLink></li>
                </ul>
            </nav>
            <div className={styles.menubar}>
                <div className={`${styles.hambmenu} + ${isOpen ? styles.isopen : null}`} onClick={()=>setIsOpen(isOpen=>!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className={`${styles.menu} + ${isOpen ? styles.isopen : null}`}>
                <ul>
                    <li><NavLink to="/about" activeClassName={styles.active} data-content="ABOUT">about</NavLink></li>
                    <li><NavLink to="/skills" activeClassName={styles.active} data-content="SKILLS">skills</NavLink></li>
                    <li><NavLink to="/projects" activeClassName={styles.active} data-content="PROJECTS">projects</NavLink></li>
                    <li><NavLink to="/contact" activeClassName={styles.active} data-content="CONTACT ME">contact me</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header