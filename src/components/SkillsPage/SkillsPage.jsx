import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './SkillsPage.module.css';


export default function () {
    return <div className={styles.container}>
        
        <Fade left>
            <div className={styles.left}>
                <div className={styles.stack}>
                    <div className={styles.frontend}>
                        <h2>Current stack</h2>
                        <div className={styles.images}>
                            <img src={process.env.PUBLIC_URL + '/images/html.png'} alt="HTML logo" />
                            <img src={process.env.PUBLIC_URL + '/images/css.png'} alt="CSS logo" />
                            <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt="JavaScript logo" />
                            <img src={process.env.PUBLIC_URL + '/images/typescript.png'} alt="TypeScript logo" />
                            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React logo" />
                            <img src={process.env.PUBLIC_URL + '/images/angular.png'} alt="Angular logo" />
                            <img src={process.env.PUBLIC_URL + '/images/vue.png'} alt="Vue logo" />
                        </div>
                    </div>
                    <div className={styles.ssr}>
                        <h2>Experience in</h2>
                        <div className={styles.subBlock}>
                            <img src={process.env.PUBLIC_URL + '/images/next.png'} alt="Next logo" />
                            <img src={process.env.PUBLIC_URL + '/images/nuxt.png'} alt="Nuxt logo" />
                        </div>
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
                            <div className={styles.gridLineTop}>
                                <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="Node logo" />
                                <img src={process.env.PUBLIC_URL + '/images/express.png'} alt="Express logo" />
                            </div>
                            <div className={styles.gridLine}>
                                <img src={process.env.PUBLIC_URL + '/images/django.png'} alt="Django logo" />
                                <img src={process.env.PUBLIC_URL + '/images/graphql.png'} alt="GraphQL logo" />
                                <img src={process.env.PUBLIC_URL + '/images/mongodb.png'} alt="mongoDB logo" />
                                <img src={process.env.PUBLIC_URL + '/images/mysql.svg'} alt="MySQL logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
}