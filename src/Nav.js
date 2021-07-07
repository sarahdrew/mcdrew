import { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <>
        <div className="nav-list-desktop">
          <a className="submenu-links" href="#the-mcdrew" id="overview-link">
            The McDrew{" "}
          </a>
          <a className="submenu-links" href="#the-events" id="overview-link">
            The Events{" "}
          </a>
          <a className="submenu-links" href="#mcDrewGallery" id="overview-link">
            Gallery{" "}
          </a>
          <a className="submenu-links" href="#donations" id="overview-link">
            Donations{" "}
          </a>
          <a className="submenu-links" href="#contact" id="overview-link">
            Contact{" "}
          </a>
        </div>

        {/* <div className="nav-list-mobile">
          <a className="submenu-links" href="#the-mcdrew" id="overview-link">
            The McDrew{" "}
          </a>
          <a className="submenu-links" href="#the-events" id="overview-link">
            The Events{" "}
          </a>
          <a className="submenu-links" href="#mcDrewGallery" id="overview-link">
            Gallery{" "}
          </a>
          <a className="submenu-links" href="#donations" id="overview-link">
            Donations{" "}
          </a>
          <a className="submenu-links" href="#contact" id="overview-link">
            Contact{" "}
          </a>
        </div> */}
      </>
    );
  }
}
