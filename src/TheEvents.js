import React, { useState } from "react";

function TheEvents() {
  const [show, setShow] = useState(false);
  const showCornhole = (e) => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div id="the-events">
        <h3>The McDrew Events</h3>
        <h4>
          This year, donations will go to{" "}
          <a
            className="donation-link"
            target="_blank"
            href="https://www.wbgl.org/community-resource/st-martin-deporres-center/"
          >
            St. Martin de Porres
          </a>
        </h4>
        <p>
          Registration for bags and swimming will be available on location at
          time of the event. Scroll below for Doubles Tennis registration or
          text us at 217-416-0460
        </p>
        <div className="event-details">
          <h4>
            <p>AUGUST 12, 2022 @ 4:00pm</p>
            <p>THE MCDREW TOURNAMENT: TENNIS BAGS JAZZ</p>
            <p>Washington Park at the Velasco Tennis Center</p>
            <p>Music by <a href="https://www.chicagodiamondtrio.com/" target="_blank">The Chicago Diamond Trio</a></p>{" "}
          </h4>
          <div className="bags-info">
            <span style={{ color: "#076381", fontWeight: "900" }}>
              <p> AUGUST 12, 2022</p>
              <p>THOMAS E JENNINGS BAGS</p>
            </span>
            <p>
              <span style={{ color: "#076381", fontWeight: "900" }}>TIME:</span>{" "}
              4:00PM
            </p>
            <p>
              <span style={{ color: "#076381", fontWeight: "900" }}>FEE: </span>
              Donations Welcomed
            </p>
            <p>
              <span style={{ color: "#076381", fontWeight: "900" }}>
                ADDRESS:{" "}
              </span>
              Velasco Tennis Center, 1501 S Grand Ave W, Springfield, IL 62704
            </p>
            <p>
              <span style={{ color: "#076381", fontWeight: "900" }}>NOTE:</span>{" "}
              No cheating allowed. Scoring errors will be noted. Cornhole
              instructions are below...
            </p>

            <button className="register-button" onClick={showCornhole}>
              Expand for Cornhole instructions
            </button>
            <div className={show ? "more-cornhole" : "no-cornhole"}>
              <p>
                <a
                  id="cornhole-link"
                  href="https://www.playcornhole.org/pages/rules"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Official ACA Cornhole Rules
                </a>
              </p>
              <p>
                WHAT IS CORNHOLE OR BAGS? It has been called many things, Corn
                Toss, Bean Bag, Bean Toss, Soft Horseshoes, Indiana Horseshoes,
                but to many of us born and raised in Kentucky and the southern
                part of Ohio, the game is passionately referred to as Cornhole.
                The truth is, who really knows, but the game is great fun for
                all ages and can be played anywhere! Scoring can be swift and
                the lead may change hands several times in a match before the
                winner is decided. The game is generally played tournament style
                with an individual or team being named the champion at the end
                of the tournament.
              </p>
            </div>
          </div>
          <div className="tennis-info">
            <span style={{ color: "#076381", fontWeight: "900" }}>
              <p> AUGUST 12, 2022</p>
              <p>DOUBLES TENNIS</p>
            </span>
            <p>
              <span style={{ color: "#076381", fontWeight: "700" }}>FEE: </span>
              Donations Welcomed.
            </p>
            <p>
              <span style={{ color: "#076381", fontWeight: "700" }}>
                ADDRESS:
              </span>{" "}
              Velasco Tennis Center, 1501 S Grand Ave W, Springfield, IL 62704
            </p>
            <p>
              <span style={{ color: "#076381", fontWeight: "700" }}>
                {" "}
                NOTE:{" "}
              </span>{" "}
              Players of all abilities and ages are welcomed and encouraged to
              sign up. McDrew memories are priceless.
            </p>
            <a
              href="mailto:kevin@kevinnmcdermott.com?subject=Doubles%20Tennis%20Sign%20Up&body=Hello%2C%20%0D%0AWe%20would%20like%20to%20sign%20up%20for%20Doubles%20Tennis%20at%20the%20McDrew%202021.%0D%0AName%20of%20Player%201%3A%0D%0AName%20of%20Player%202%3A%0D%0A%0D%0AThanks!"
              className="register-button"
            >
              register for tennis{" "}
            </a>
          </div>
        </div>
        <h4>
          <p>AUGUST 13, 2022</p>
        </h4>
        <div className="event-details" id="swim-info">
          <span
            style={{
              color: "#448b66",
              fontWeight: "900",
            }}
          >
            <p>AUGUST 13, 2022</p>
            <p>SWIM MCDREW</p>
          </span>
          <p>Start Time: 8:30AM</p>
          <p>Illini Country Club Pool</p>
          <p>Music by Virgil Rhodes and Footprints</p>
          <p>
            <span style={{ color: "#448b66", fontWeight: "700" }}>FEE: </span>
            Donations welcomed.
          </p>
          <p>
            <span style={{ color: "#448b66", fontWeight: "700" }}>
              ADDRESS:
            </span>
            Illini Country Club, 1601 Illini Rd, Springfield, IL 62704
          </p>
          <p>
            <span style={{ color: "#448b66", fontWeight: "700" }}> NOTE: </span>{" "}
            Swimmer decides on a per lap donation (pledges welcome), swim your
            laps, have fun and make your donation. First time swimmers are
            strongly encouraged to sign up. Music, food and drinks will be
            served up poolside. Invite your swim buddies. Swim McDrew is the
            only swim-a-thon sanctioned by The McDrew in North America.
          </p>
        </div>
        <div className="event-details" id="tennis-ball-info">
          <div className="tennis-ball-info">
            <span style={{ color: "#448b66", fontWeight: "700" }}>
              <p>THE TENNIS BALL</p>
              <p>Island Bay Yacht Club</p>
              <p>5:30pm</p>
            </span>
            <h4 id="dangeroux">
              <p>Music by <a href="https://www.kapitalsound.com/" target="_blank">Kapital Sound</a></p>
            </h4>
            <p>
              Food, drinks, dancing, good views, and all of your favorite people
              in Springfield Illinois.
            </p>
            <p>
              <a
                id="yachtclub-link"
                href="https://www.ibyconline.com/"
                target="_blank"
                rel="noreferrer"
              >
                Island Bay Yacht Club
              </a>
            </p>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheEvents;
