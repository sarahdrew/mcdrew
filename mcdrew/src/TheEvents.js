import react, { Component } from 'react';
import { render } from 'react-dom';
import CountDownTimer from './CountdownTimer';

export default class Events extends Component {

    render() {
        return (
            <div id="the-events">
                <h3>The McDrew Events</h3>
                <p>Please go through the list of events and volunteer opportunities below to sign up.</p>
                <p> Text us at 217-416-0460</p>
                <p>DAYS UNTIL THE MCDREW:</p>
                <CountDownTimer />
                <div className="event-details">
                    <p>AUGUST 13, 2021</p>
                    <p>THE MCDREW TOURNAMENT: TENNIS BAGS JAZZ</p>
                    <p>Washington Park at the Velasco Tennis Center</p>
                    <p>THOMAS E JENNINGS BAGS</p> <button>register </button>
                    <p>doubles tennis sign up</p> <button>register </button>
                    <p>Music by Kevin Hart & The Vibe Tribe</p>

                </div>
                <div className="event-details">
                    <p>AUGUST 14, 2021</p>
                    <p>SWIM MCDREW</p>
                    <p>Start Time: 8:15AM</p>
                    <p>Illi Country Club Pool</p>

                </div>
                <div className="event-details">
                    <p>AUGUST 14, 2021</p>
                    <p>THE TENNIS BALL</p>
                    <p>Island Bay Yacht Club</p>

                </div>


            </div>
        )
    }
}