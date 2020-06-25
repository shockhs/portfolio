import React from 'react';
import { Helmet } from 'react-helmet';
import { IconContext } from 'react-icons';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import django from '../../images/django.png';
import express from '../../images/express.png';
import mongodb from '../../images/mongodb.png';
import mysql from '../../images/mysql.svg';
import next from '../../images/next.png';
import node from '../../images/nodejs.png';
import nuxt from '../../images/nuxt.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import chat from '../../images/screenshots/chat.png';
import library from '../../images/screenshots/library.png';
import market from '../../images/screenshots/market.png';
import social from '../../images/screenshots/social.png';
import todo from '../../images/screenshots/todo.png';
import tweet from '../../images/screenshots/tweet.png';
import youtube from '../../images/screenshots/youtube.png';
import socket from '../../images/socket.svg';
import sqlite from '../../images/sqlite.png';
import vue from '../../images/vue.png';
import styles from './ProjectsPage.module.css';

export default function () {
    return <div className={styles.projects}>
        <Helmet>
            <title>Projects VM</title>
            <link rel="canonical" href="/" />
        </Helmet>
        <div className={styles.element}>
            <Fade left cascade>
                <div className={styles.description}>
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
                        <img src={react} alt="React logo" />
                        <img src={redux} alt="Redux logo" />
                    </div>
                </div>
            </Fade>

            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <img className={styles.img} src={social} alt="Social screenshot #1" />
                        <div className={styles.icons}>
                            <div className={styles.iconContainer}>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://github.com/EsaxCO/social-network"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="#"><FaExternalLinkAlt /></a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <Fade left cascade>
                <div className={styles.description}>
                    <h2>youtube application</h2>
                    <p>This application has options for watching video synchronized with
                    another user. Only one thing  he need is URL with unique nickname
                parameter in it</p>

                    <div className={styles.techs}>
                        <img src={react} alt="React logo" />
                        <img src={node} alt="Node.js logo" />
                        <img src={socket} alt="Socket.io logo" />
                    </div>
                </div>
            </Fade>
            <div className={styles.screenshots}>
                <Zoom>

                    <div className={styles.container}>
                        <img className={styles.img} src={youtube} alt="Youtube screenshot #1" />

                        <div className={styles.icons}>
                            <div className={styles.iconContainer}>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://github.com/EsaxCO/youtube-app"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://heroku-youtube-app.herokuapp.com/"><FaExternalLinkAlt /></a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <Fade left cascade>
                <div className={styles.description}>
                    <h2>library application</h2>
                    <p>This application realizes functionallity of online library.
                    Every user can take a book by opening a loan. Every book
                    stock is limited. User can close the loan in his profile page and delete
                    it from his/her history if it`s closed.
                    </p>

                    <div className={styles.techs}>
                        <img src={vue} alt="Vue logo" />
                        <img src={nuxt} alt="Nuxt logo" />
                        <img src={node} alt="Node.js logo" />
                        <img src={express} alt="Express logo" />
                        <img src={mongodb} alt="MongoDB logo" />
                    </div>
                </div>
            </Fade>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <img className={styles.img} src={library} alt="Library screenshot #1" />
                        <div className={styles.icons}>
                            <div className={styles.iconContainer}>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://github.com/EsaxCO/nuxt-library"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://musing-snyder-509028.netlify.app/"><FaExternalLinkAlt /></a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <Fade left cascade>
                <div className={styles.description}>
                    <h2>Chat application</h2>
                    <p>Simple chat application with using Socket.io
                    Every user can join the room by link with changing his
                    nickname (if it`s already used)
                </p>
                    <div className={styles.techs}>
                        <img src={react} alt="React" />
                        <img src={node} alt="Node.js" />
                        <img src={socket} alt="Socket.io" />
                    </div>
                </div>
            </Fade>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <img className={styles.img} src={chat} alt="Chat screenshot #1" />
                        <div className={styles.icons}>
                            <div className={styles.iconContainer}>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://github.com/EsaxCO/chat-app"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://cranky-curran-4a4195.netlify.app/"><FaExternalLinkAlt /></a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <Fade left cascade>
                <div className={styles.description}>
                    <h2>Market application</h2>
                    <p>Online market application, where users can add goods for sale
                    and buy anything else. Every user also can deposit value to profile
                    (without using any APIs for it, simple add). In profile user can
                    follow his current offers and close them if it`s neccessary
                </p>
                    <div className={styles.techs}>
                        <img src={react} alt="React" />
                        <img src={next} alt="Next.js" />
                        <img src={node} alt="Node.js" />
                        <img src={mysql} alt="MySQL" />
                        <img src={express} alt="Express" />
                    </div>
                </div>
            </Fade>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <img className={styles.img} src={market} alt="Market screenshot #1" />
                        <div className={styles.icons}>
                            <div className={styles.iconContainer}>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://github.com/EsaxCO/nextjs-market-application"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="#"><FaExternalLinkAlt /></a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <Fade left cascade>
                <div className={styles.description}>
                    <h2>tweetme application</h2>
                    <p>This application is a duplicate of twitter. Users can tweet some posts,
                    follow/unfollow another users, like or unlike posts and they also have personal
                    feeds that`re filtering only following users posts to show
                </p>
                    <div className={styles.techs}>
                        <img src={django} alt="Django" />
                        <img src={react} alt="React" />
                        <img src={sqlite} alt="SQLite" />
                    </div>
                </div>
            </Fade>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <img className={styles.img} src={tweet} alt="Tweet screenshot #1" />
                        <div className={styles.icons}>
                            <div className={styles.iconContainer}>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://github.com/EsaxCO/tweetme-django"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles.element}>
            <Fade left cascade>
                <div className={styles.description}>
                    <h2>Todo list applcation</h2>
                    <p>Simple todolist application with authentication
                </p>
                    <div className={styles.techs}>
                        <img src={react} alt="React" />
                        <img src={node} alt="Node.js" />
                        <img src={mongodb} alt="MongoDB" />
                        <img src={express} alt="Express" />
                    </div>
                </div>
            </Fade>
            <div className={styles.screenshots}>
                <Zoom>
                    <div className={styles.container}>
                        <img className={styles.img} src={todo} alt="Todo screenshot #1" />
                        <div className={styles.icons}>
                            <div className={styles.iconContainer}>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://github.com/EsaxCO/todolist"><FaGithub /></a>
                                    </div>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: 40 }}>
                                    <div className={styles.icon}>
                                        <a href="https://5e7f2868f56a48310069b7f9--heuristic-shannon-f2058d.netlify.app/"><FaExternalLinkAlt /></a>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    </div>
}