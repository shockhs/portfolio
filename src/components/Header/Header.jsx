import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg'
import styles from './Header.module.css'


const Header = () => {
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

        </header>
    )
}

export default Header