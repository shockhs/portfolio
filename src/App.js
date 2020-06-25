import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import './style/App.css';


function App() {
  return (
    <div className="container">
      <Helmet>
        <title>Protfolio VM</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <Switch>
        <Route path="/skills">
          <Header />
          <SkillsPage />
        </Route>
        <Route path="/projects">
          <Header />
          <ProjectsPage />
        </Route>
        <Route path="/about">
          <Header />
          <ProjectsPage />
        </Route>
        <Route path="/contact">
          <Header />
          <Contact />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div >
  )
}

export default App;
