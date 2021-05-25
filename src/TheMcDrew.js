import { Component } from "react";
import TheEvents from "./TheEvents";
import checkerboardGreen from "./assets/checkerboard-green.PNG";
import vintageMcDrew from "./assets/photo-gallery/vintageMcDrew.jpg";
import johnPortrait from "./assets/jdrew.png";
import kevinPortrait from "./assets/kmcdermott.png";
import johnAndKevin from "./assets/johnandkevin.jpg";
import blueCheckerboard from "./assets/blue-checkerboard.jpg";
import redCheckerboard from "./assets/red-checkerboard.jpg";
import CountDownTimer from "./CountdownTimer";

export default class TheMcDrew extends Component {
  render() {
    return (
      <>
        <div id="details">
          <h2>The McDrew Details</h2>
          <CountDownTimer />

          <div className="mcdrew-description-wrapper">
            <div className="how-it-started">
              <p className="started-paragraph">
                <span style={{ color: "#448b66", fontWeight: "900" }}>
                  How it all started...{" "}
                </span>
                The McDrew Tennis, Bags and Jazz Festival began with an idea
                that rattled the idealism of progressive reality and opened the
                minds to peace and joy in 1974. It defined and opened a new era
                of celebration and tranquility that revolutionized how tennis
                and bags came together with the sweet slumber of jazz. The
                legend lives on...
              </p>
              <img
                id="started-mcdrew"
                src={vintageMcDrew}
                alt="vintage mcdrew"
              />
            </div>
            <div className="details-profile">
              <div className="details-portrait">
                <img alt="John Drew" src={johnPortrait} />
              </div>
              <p className="details-paragraph">
                <span style={{ color: "#448b66", fontWeight: "900" }}>
                  John Drew
                </span>{" "}
                (born 27 February 1967) is a British-American industrial,
                product and architectural designer. Drew was Chief Design
                Officer (CDO) of Apple Inc., and serves as Chancellor of the
                Royal College of Art. He joined Apple in September 1992, where
                he remained until his departure in July 2019. Following several
                years of designing the interface aspects of Apple products he
                was promoted to Senior Vice President of Industrial Design in
                the late 1990s after the return of co-founder Steve Jobs to the
                company, and CDO in 2015. Working closely with Jobs during their
                tenure together at Apple, Drew played a vital role in the
                designs of the iMac, Power Mac G4 Cube, iPod, iPhone, iPad,
                MacBook, and parts of the user interface of Apple's mobile
                operating system iOS, among other products. He also helped
                design Apple's major architectural projects, such as Apple Park
                and Apple Stores.
              </p>
            </div>

            <div className="details-profile">
              <div className="details-portrait">
                <img alt="Kevin McDermott" src={kevinPortrait} />
              </div>{" "}
              <p className="details-paragraph">
                <span style={{ color: "#448b66", fontWeight: "900" }}>
                  Kevin N. McDermott
                </span>{" "}
                is an attorney engaged in private practice in Springfield,
                Illinois, since 1990. He received a B.S. and M.S.W. from the
                University of Illinois- Champaign, along with an M.P.H. from the
                University of Minnesota-Minneapolis and a J.D. from St. Louis
                University. In conjunction with his private practice and since
                2006, Mr. McDermott has served as the Sangamon County Public
                Guardian and Administrator. Mr. McDermott is a National
                Certified Guardian and his law practice is focused on the
                elderly, guardianship, probate and small business matters
                throughout the State of Illinois. Along with John L. Drew, Kevin
                is the co-founder and director of the McDrew Tennis & Jazz
                Festival which has generated nearly $400,000.00 for charitable
                organizations in Springfield and Central Illinois, during its 47
                year history. Mr. McDermott loves his family and life long
                McDrew friends, and is an avid swimmer, kayaker, sailor, bike
                rider, hiker and dog walker, and an enthusiastic fan of tennis,
                the Fighting Illini, St. Louis Cardinals, and the Y. Kevin
                resides in Springfield with his dog, Doc, and can be contacted
                at Kevin@KevinNMcDermott.com or{" "}
                <a href="www.KevinNMcDermott.com">www.KevinNMcDermott.com</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="description-paragraph">
          <img
            className="green-checkerboard"
            src={blueCheckerboard}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={redCheckerboard}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={checkerboardGreen}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={blueCheckerboard}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={redCheckerboard}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={checkerboardGreen}
            alt="McDrew Logo"
          />
        </div>
        <div className="description-paragraph">
          <img
            className="green-checkerboard"
            src={checkerboardGreen}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={blueCheckerboard}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={redCheckerboard}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={checkerboardGreen}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={blueCheckerboard}
            alt="McDrew Logo"
          />
          <img
            className="green-checkerboard"
            src={redCheckerboard}
            alt="McDrew Logo"
          />
        </div>
        <TheEvents />
      </>
    );
  }
}
