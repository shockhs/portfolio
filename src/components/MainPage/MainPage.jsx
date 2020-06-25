import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Footer from '../Footer/Footer'
import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>VM porfolio</title>
                <link rel="canonical" href="/" />
            </Helmet>
            <main>
                <section className={styles.promo}>
                    <div className={styles.about}>
                        <img src={logo} alt="avatar" />
                        <h1>vagan mkrtchyan</h1>
                        <h2>Frontend developer</h2>
                    </div>
                    <ul className={styles.social}>
                        <li><Link href="#">github</Link></li>
                        <li><Link href="#">vk</Link></li>
                        <li><Link href="#">linkedin</Link></li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default MainPage