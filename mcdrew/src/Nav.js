import react, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div className="nav-list">
                <Link to="/">The McDrew</Link>
                <Link to="/events">Events</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
        )
    }
}