import React from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import css from '../../images/css.png';
import django from '../../images/django.png';
import express from '../../images/express.png';
import html from '../../images/html.png';
import javascript from '../../images/javascript.png';
import mongodb from '../../images/mongodb.png';
import mysql from '../../images/mysql.svg';
import next from '../../images/next.png';
import node from '../../images/nodejs.png';
import nuxt from '../../images/nuxt.png';
import react from '../../images/react.png';
import typescript from '../../images/typescript.png';
import vue from '../../images/vue.png';
import styles from './SkillsPage.module.css';


export default function () {
    return <div className={styles.container}>
        <Helmet>
            <title>Skills VM</title>
            <link rel="canonical" href="/" />
        </Helmet>
        <Fade left>
            <div className={styles.left}>
                <div className={styles.stack}>
                    <div className={styles.frontend}>
                        <h2>Current stack</h2>
                        <div className={styles.images}>
                            <img className={styles.html} src={html} alt="HTML logo" />
                            <img className={styles.css} src={css} alt="CSS logo" />
                            <img className={styles.javascript} src={javascript} alt="JavaScript logo" />
                            <img className={styles.typescript} src={typescript} alt="TypeScript logo" />

                            <img className={styles.react} src={react} alt="React logo" />
                            <img className={styles.vue} src={vue} alt="Vue logo" />
                        </div>
                    </div>
                    <div className={styles.ssr}>
                        <h2>Experience in</h2>
                        <img className={styles.next} src={next} alt="Next logo" />
                        <img className={styles.nuxt} src={nuxt} alt="Nuxt logo" />
                    </div>
                </div>
            </div>
        </Fade>
        <Fade right>
            <div className={styles.right}>
                <div className={styles.stack}>
                    <div className={styles.mainblock}>
                        <h2>Backend experience in</h2>
                        <div className={styles.images}>
                            <img className={styles.node} src={node} alt="Node logo" />
                            <img className={styles.express} src={express} alt="Express logo" />
                            <img className={styles.django} src={django} alt="Django logo" />
                            <img className={styles.mongodb} src={mongodb} alt="mongoDB logo" />
                            <img className={styles.mysql} src={mysql} alt="MySQL logo" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
}