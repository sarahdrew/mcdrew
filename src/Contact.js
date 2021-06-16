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
          <a
            href="https://www.facebook.com/themcdrew"
            target="_blank"
            rel="noreferrer"
          >
            Facebook McDrew
          </a>
        </div>
        <div className="email">
          Or you can{" "}
          <a
            href="mailto:kevin@kevinnmcdermott.com?subject=McDrew 2021"
            target="_blank"
            rel="noreferrer"
          >
            Email McDrew
          </a>
        </div>
        <div style={{ marginLeft: 20 }}>
          Or you can{" "}
          <a
            className="contact-sponsor"
            href="mailto:kevin@kevinnmcdermott.com?subject=Sponsor McDrew 2021"
          >
            Sponsor McDrew
          </a>
        </div>
        <div className="other-links">
          <p>
            <a
              href="https://www2.illinois.gov/statefair/Pages/default.aspx"
              target="_blank"
              rel="noreferrer"
            >
              Illinois State Fair
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=hbP6fNqATJ8"
              target="_blank"
              rel="noreferrer"
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
