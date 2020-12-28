import React from "react"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import CerificationsPage from "./components/CerificationsPage"

const App =()=> {

  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/certifications" exact component={CerificationsPage}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
