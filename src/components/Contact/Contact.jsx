import React from 'react';
import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaLinkedin, FaVk } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import styles from './Contact.module.css';

export default function () {
    return <div className={styles.contact}>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="https://www.linkedin.com/in/vagan-mkrtchyan-3a55071a5/">
                    <FaLinkedin />
                </a>
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="https://www.facebook.com/vagan.mkrtchyan.5">
                    <FaFacebookSquare />
                </a>
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="mailto:perfoma777@mail.ru">
                    <IoIosMail />
                </a>
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: '90px' }}>
            <div className={styles.link}>
                <a href="https://vk.com/vaganmg">
                    <FaVk />
                </a>
            </div>
        </IconContext.Provider>
    </div>
}