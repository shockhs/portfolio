import React from 'react'
import Footer from '../Footer/Footer'
import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <>
            <main>
                <section className={styles.promo}>
                    <div className={styles.about}>
                        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="avatar" />
                        <h1>vagan mkrtchyan</h1>
                        <h2>Frontend developer</h2>
                    </div>
                    <ul className={styles.social}>
                        <li><a href="https://github.com/EsaxCO">github</a></li>
                        <li><a href="https://vk.com/vaganmg">vk</a></li>
                        <li><a href="https://www.linkedin.com/in/vagan-mkrtchyan-3a55071a5/">linkedin</a></li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default MainPage