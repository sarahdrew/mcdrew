import './App.css';
import Nav from './Nav';
import React, { Component } from "react";
import TheMcDrew from './TheMcDrew';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import TheEvents from './TheEvents';
import Gallery from './Gallery';
import Sponsors from './Sponsors';
import Contact from './Contact';
import CountDownTimer from './CountdownTimer';
import centeredLogo from './assets/checker-background.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Nav />
        </nav>
        <Nav />
        <div className="App">
          <div className="header-photo" style={{ backgroundImage: { centeredLogo } }}>
            <header className="App-header">
              <h1>The 48th Annual McDrew Festival</h1>
              <h3>Tennis Bags Swimming Jazz</h3>
            </header>
          </div>
          <Switch>
            <Route exact path="/">

              <TheMcDrew />
            </Route>
            <Route exact path="/events">
              <TheEvents />
            </Route>
            <Route exact path='/gallery'>
              <Gallery />
            </Route>
            <Route exact path='/sponsors'>
              <Sponsors />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>

        </div>
      </Router>
    )
  };
}

export default App;
