import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import styles from './ProjectsPage.module.css';

export default function () {
    return <div className={styles.projects}>
        <div className={styles.element}>
            <div className={styles.description}>
                <Fade left cascade>
                    <div>
                        <h2>youtube application</h2>
                        <p>This application has options for watching video synchronized with
                        another user. Only one thing  he need is URL with unique nickname
                            parameter in it</p>
                        <div className={styles.techs}>
                            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React logo" />
                            <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="Node.js logo" />
                            <img src={process.env.PUBLIC_URL + '/images/socket.svg'} alt="Socket.io logo" />
                        </div>
                    </div>
                </Fade>
            </div>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <a href="https://github.com/EsaxCO/youtube-app">
                            <img className={styles.img} src={process.env.PUBLIC_URL + '/images/screenshots/youtube.png'} alt="Youtube screenshot #1" />
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <div className={styles.description}>
                <Fade left cascade>
                    <div>
                        <h2>Social network application</h2>
                        <div>
                            <p>Application with using React / Redux / Redux-thunk / Redux-form <br />
                                In this application user has the following options:
                            </p>
                            <ul>
                                <li>Register / Login his profile</li>
                                <li>Own profile page with edit mode</li>
                                <li>Sending messages to another users</li>
                                <li>Page with list of all users</li>
                            </ul>
                        </div>
                        <div className={styles.techs}>
                            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React logo" />
                            <img src={process.env.PUBLIC_URL + '/images/redux.png'} alt="Redux logo" />
                        </div>
                    </div>
                </Fade>
            </div>

            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <a href="https://github.com/EsaxCO/social-network">
                            <img className={styles.img} src={process.env.PUBLIC_URL + '/images/screenshots/social.png'} alt="Social screenshot #1" />
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <div className={styles.description}>
                <Fade left cascade>
                    <div className={styles.adaptiveBlock}>
                        <h2>library application</h2>
                        <p>This application realizes functionallity of online library.
                        Every user can take a book by opening a loan. Every book
                        stock is limited. User can close the loan in his profile page and delete
                        it from his/her history if it`s closed.
                        </p>
                        <div className={styles.techs}>
                            <img src={process.env.PUBLIC_URL + '/images/vue.png'} alt="Vue logo" />
                            <img src={process.env.PUBLIC_URL + '/images/nuxt.png'} alt="Nuxt logo" />
                            <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="Node.js logo" />
                            <img src={process.env.PUBLIC_URL + '/images/express.png'} alt="Express logo" />
                            <img src={process.env.PUBLIC_URL + '/images/mongodb.png'} alt="MongoDB logo" />
                        </div>
                    </div>
                </Fade>
            </div>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <a href="https://github.com/EsaxCO/nuxt-library">
                            <img className={styles.img} src={process.env.PUBLIC_URL + '/images/screenshots/library.png'} alt="Library screenshot #1" />
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <div className={styles.description}>
                <Fade left cascade>
                    <div>
                        <h2>Chat application</h2>
                        <p>Simple chat application with using Socket.io
                        Every user can join the room by link with changing his
                        nickname (if it`s already used)
                        </p>
                        <div className={styles.techs}>
                            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
                            <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="Node.js" />
                            <img src={process.env.PUBLIC_URL + '/images/socket.svg'} alt="Socket.io" />
                        </div>
                    </div>
                </Fade>
            </div>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <a href="https://github.com/EsaxCO/chat-app">
                            <img className={styles.img} src={process.env.PUBLIC_URL + '/images/screenshots/chat.png'} alt="Chat screenshot #1" />
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <div className={styles.description}>
                <Fade left cascade>
                    <div>
                        <h2>Market application</h2>
                        <p>Online market application, where users can add goods for sale
                        and buy anything else. Every user also can deposit value to profile
                        (without using any APIs for it, simple add). In profile user can
                        follow his current offers and close them if it`s neccessary
                        </p>
                        <div className={styles.techs}>
                            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
                            <img src={process.env.PUBLIC_URL + '/images/next.png'} alt="Next.js" />
                            <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="Node.js" />
                            <img src={process.env.PUBLIC_URL + '/images/mysql.svg'} alt="MySQL" />
                            <img src={process.env.PUBLIC_URL + '/images/express.png'} alt="Express" />
                        </div>
                    </div>
                </Fade>
            </div>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <a href="https://github.com/EsaxCO/nextjs-market-application">
                            <img className={styles.img} src={process.env.PUBLIC_URL + '/images/screenshots/market.png'} alt="Market screenshot #1" />
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <div className={styles.description}>
                <Fade left cascade>
                    <div>
                        <h2>tweetme application</h2>
                        <p>This application is a duplicate of twitter. Users can tweet some posts,
                        follow/unfollow another users, like or unlike posts and they also have personal
                        feeds that`re filtering only following users posts to show
                        </p>
                        <div className={styles.techs}>
                            <img src={process.env.PUBLIC_URL + '/images/django.png'} alt="Django" />
                            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
                            <img src={process.env.PUBLIC_URL + '/images/sqlite.png'} alt="SQLite" />
                        </div>
                    </div>
                </Fade>
            </div>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <a href="https://github.com/EsaxCO/tweetme-django">
                            <img className={styles.img} src={process.env.PUBLIC_URL + '/images/screenshots/tweet.png'} alt="Tweet screenshot #1" />
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <div className={styles.description}>
                <Fade left cascade>
                    <div>
                        <h2>Todo list applcation</h2>
                        <p>Simple todolist application with authentication
                        </p>
                        <div className={styles.techs}>
                            <img src={process.env.PUBLIC_URL + '/images/react.png'} alt="React" />
                            <img src={process.env.PUBLIC_URL + '/images/nodejs.png'} alt="Node.js" />
                            <img src={process.env.PUBLIC_URL + '/images/mongodb.png'} alt="MongoDB" />
                            <img src={process.env.PUBLIC_URL + '/images/express.png'} alt="Express" />
                        </div>
                    </div>
                </Fade>
            </div>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <a href="https://github.com/EsaxCO/todolist">
                            <img className={styles.img} src={process.env.PUBLIC_URL + '/images/screenshots/todo.png'} alt="Todo screenshot #1" />
                        </a>
                    </div>
                </Zoom>
            </div>
        </div>
    </div>
}