import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social}>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/skills">skills</NavLink></li>
                <li><NavLink to="/projects">projects</NavLink></li>
                <li><NavLink to="/contact">contact me</NavLink></li>
            </ul>
        </footer>
    )
}

export default Footer