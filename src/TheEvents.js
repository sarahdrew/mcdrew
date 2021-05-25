import react, { Component } from "react";
import { render } from "react-dom";
import CountDownTimer from "./CountdownTimer";

export default class Events extends Component {
  render() {
    return (
      <div id="the-events">
        <h3
          style={{
            color: "#448b66",
            fontWeight: 700,
            textAlign: "center",
            fontSize: 40,
          }}
        >
          The McDrew Events
        </h3>
        <p>
          Please go through the list of events and volunteer opportunities below
          to sign up.
        </p>
        <p> Text us at 217-416-0460</p>

        <div className="event-details">
          <p>AUGUST 13, 2021</p>
          <p>THE MCDREW TOURNAMENT: TENNIS BAGS JAZZ</p>
          <p>Washington Park at the Velasco Tennis Center</p>
          <p>Music by Kevin Hart & The Vibe Tribe</p>
          <div className="bags-info">
            <span style={{ color: "#076381", fontWeight: "900" }}>
              <p>THOMAS E JENNINGS BAGS</p>
            </span>
            <button className="register-button">register for bags</button>
          </div>
          <div className="tennis-info">
            <span style={{ color: "#076381", fontWeight: "900" }}>
              <p>DOUBLES TENNIS</p>
            </span>
            <p>
              <span style={{ color: "#076381", fontWeight: "700" }}>FEE: </span>
              Donations Welcomed{" "}
            </p>
            <p>
              <span style={{ color: "#076381", fontWeight: "700" }}>
                DIRECTIONS:
              </span>{" "}
              Click for Map{" "}
            </p>
            <p>
              <span style={{ color: "#076381", fontWeight: "700" }}>
                {" "}
                NOTE:{" "}
              </span>{" "}
              Players of all abilities and ages are welcomed and encouraged to
              sign up. McDrew memories are priceless.
            </p>
            <button className="register-button">register for tennis </button>
          </div>
        </div>
        <div className="event-details" id="swim-info">
          <span
            style={{
              textDecoration: "underline",
              color: "#448b66",
              fontWeight: "900",
            }}
          >
            <p>AUGUST 14, 2021</p>
            <p>SWIM MCDREW</p>
          </span>
          <p>Start Time: 8:15AM</p>
          <p>Illini Country Club Pool</p>
          <p>
            <span style={{ color: "#448b66", fontWeight: "700" }}>FEE: </span>
            Donations Welcomed{" "}
          </p>
          <p>
            <span style={{ color: "#448b66", fontWeight: "700" }}>
              DIRECTIONS:
            </span>{" "}
            Click for Map{" "}
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
          <p>AUGUST 14, 2021</p>
          <p>THE TENNIS BALL</p>
          <p>Island Bay Yacht Club</p>
        </div>
      </div>
    );
  }
}
