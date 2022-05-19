import "./App.css";
import Nav from "./Nav";
import React, { Component } from "react";
import TheMcDrew from "./TheMcDrew";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import McDrewGallery from "./mcDrewGallery";
import Sponsors from "./Sponsors";
import Donations from "./Donations";
import Contact from "./Contact";
import centeredLogo from "./assets/checker-background.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Nav />
        </nav>
        <div
          className="header-photo"
          id="the-mcdrew"
          style={{ backgroundImage: { centeredLogo } }}
        >
          <header className="App-header">
            <h1>The 47th Annual McDrew Festival</h1>
            <h2>Tennis Bags Swimming Jazz</h2>
          </header>
        </div>
        <div className="App">
          <Switch>
            <Route exact path="">
              <TheMcDrew />
            </Route>

            <Route exact path="/mcdrewgallery">
              <McDrewGallery />
            </Route>
            <Route exact path="/sponsors">
              <Sponsors />
            </Route>
            <Route exact path="/donations">
              <Donations />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
