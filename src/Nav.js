import react, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-list">
        <Link to="/">The McDrew</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/mcdrewgallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}
