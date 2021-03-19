import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './components/Pages/HomePage';
import CertificationsPage from "./components/Pages/CertificationsPage";

import "aos/dist/aos.css";

const App = () => {

  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/certifications" exact component={CertificationsPage}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
