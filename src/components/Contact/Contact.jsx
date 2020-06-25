import React from 'react';
import { Helmet } from 'react-helmet';
import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaVk } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import styles from './Contact.module.css';

export default function () {
    return <div className={styles.contact}>
        <Helmet>
            <title>Contact me VM</title>
            <link rel="canonical" href="/" />
        </Helmet>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="#">
                    <FaLinkedin />
                </a>
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="#">
                    <FaFacebookSquare />
                </a>
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="#">
                    <IoIosMail />
                </a>
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="#">
                    <FaVk />
                </a>
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="#">
                    <FaTwitterSquare />
                </a>
            </div>
        </IconContext.Provider>
    </div>
}