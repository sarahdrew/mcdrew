import { Component } from "react";
import TheEvents from "./TheEvents";
import checkerboardGreen from "./assets/checkerboard-green.PNG";
import vintageMcDrew from "./assets/photo-gallery/vintageMcDrew.jpg";
import johnPortrait from "./assets/jdrew.png";
import kevinPortrait from "./assets/kmcdermott.png";
import johnAndKevin from "./assets/johnandkevin.jpg";
import group7 from "./assets/photo-gallery/group7.png";
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
            <img
              className="started-mcdrew"
              src={vintageMcDrew}
              alt="vintage mcdrew"
            />
            <img className="started-mcdrew" src={group7} alt="vintage mcdrew" />
            <img
              className="started-mcdrew"
              src={johnAndKevin}
              alt="vintage mcdrew"
            />
            <div className="how-it-started">
              <p className="started-paragraph">
                <span style={{ color: "#448b66", fontWeight: "900" }}>
                  How it all started...{" "}
                </span>
                <p>
                  Kevin and John organized their initial tennis event in the 1st
                  grade at Blessed Sacrament School. In the Spring of 1962,
                  along with Tom Jennings and David Humphreville, they put
                  together a grade school doubles tennis team and scheduled
                  matches with Little Flower and St. Al’s. It was Easter Weekend
                  in 1962 when BS met St. Al’s at the Lincoln Park Tennis Court.
                  St. Al’s had a rag tag team with Mike Aiello and John Kulek as
                  their number one doubles team (and only team). McDrew stepped
                  aside in that match and allowed the Jennings/Humphreville team
                  to make short work of Aiello/Kulek. The next month, on
                  Mother’s Day, Jennings/Humphreville were dispatched to take on
                  the Little Flower team of Tim Norris and Greg O’Brien. The
                  Norris/O’Brien team insisted on playing the match on a
                  temporary court constructed on Circle Drive. Didn’t matter.
                  Jennings/Humphreville crushed them. This was the first of many
                  encounters St. Al’s and Little Flower (“Big Weed”) dudes had
                  with the BSS guys and the outcome was always the same. Tennis,
                  basketball, baseball, it did not matter.
                </p>
                <p>
                  Fast forward to the Summer of 1971 and 1972. Kevin and John
                  were working at Oak Ridge Cemetery and had a tendency to get
                  sent home by the foreman for unsubstantiated allegations of
                  misbehavior. Neither could actually “go home” so they went
                  from Oak Ridge to the Lincoln Park Tennis Courts to work on
                  their games for the remainder of the shortened work day. With
                  sharpened tennis skills, they were ready to take the next step
                  and try out for the initial Griffin High School Tennis team in
                  the Spring of 1974. As things turned out, this was the birth
                  of the McDrew.
                </p>

                <p>
                  Details are sketchy at this point but there is no doubt that
                  John Sankey and Dan Kepner had a pivotal role in the creation
                  of the McDrew. At tryouts for the Griffin Team in April of
                  1974, one shut out Kevin and one shut out Dog. Both Kevin and
                  John appealed their cause with Coach VanDiver but were told to
                  pack up and get out, you guys are done. Well, they were not.
                </p>
                <p>
                  In the early summer of 1974 before John left Springfield for
                  West Point and Kevin for Champaign, the first McDrew was held
                  at Lincoln Greens Tennis Center on Lake Springfield. There
                  were about ten teams entered and no one touched McDrew. The
                  McDrew was born and continues to this day. It has been a
                  wonderful ride.
                </p>
              </p>
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
                <a href="www.KevinNMcDermott.com" target="_blank">
                  www.KevinNMcDermott.com
                </a>
                .
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
