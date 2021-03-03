import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import CV from './CV';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/about' render={() => <About />} />
      <Route exact path='/contact' render={() => <Contact />} />
      <Route exact path='/projects' render={() => <Projects />} />
      <Route path='/cv' render={() => <CV />} />
    </div>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
