import { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <h3
          style={{
            color: "#448b66",
            fontWeight: 700,
            textAlign: "center",
            fontSize: 40,
          }}
        >
          {" "}
          CONTACT MCDREW
        </h3>
        <div className="socials">
          You can{" "}
          <a href="https://www.facebook.com/themcdrew" target="_blank">
            Facebook McDrew
          </a>
        </div>
        <div className="email">
          Or you can{" "}
          <a
            href="mailto:sarahdrew93@gmail.com?subject=McDrew 2021"
            target="_blank"
          >
            Email McDrew
          </a>
        </div>
        <div className="contact-sponsor">
          Or you can{" "}
          <a href="mailto:sarahdrew93@gmail.com?subject=Sponsor McDrew 2021">
            Sponsor McDrew
          </a>
        </div>
        <div className="other-links">
          <p>
            <a
              href="https://www2.illinois.gov/statefair/Pages/default.aspx"
              target="_blank"
            >
              Illinois State Fair
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=hbP6fNqATJ8"
              target="_blank"
            >
              {" "}
              McDrew 2014 Video{" "}
            </a>
          </p>
        </div>
      </>
    );
  }
}
