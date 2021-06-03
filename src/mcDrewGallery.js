// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import { React, useState } from "react";
import abeLincoln from "./assets/photo-gallery/abeLincoln.jpg";
import Aiello from "./assets/photo-gallery/Aiello.jpg";
import bbqPeople from "./assets/photo-gallery/bbqPeople.jpg";
import buddies from "./assets/photo-gallery/buddies.jpg";
import cornholeWinners from "./assets/photo-gallery/cornholeWinners.JPG";
import winnersAndLosers from "./assets/photo-gallery/winnersAndLosers.JPG";
import friends from "./assets/photo-gallery/friends.jpg";
import friendsWithJack from "./assets/photo-gallery/friendsWithJack.jpg";
import humphreyvilles from "./assets/photo-gallery/humphreyvilles.jpg";
import johnAndFran from "./assets/photo-gallery/johnAndFran.jpg";
import johnK from "./assets/photo-gallery/johnK.jpg";
import manAndDog from "./assets/photo-gallery/manAndDog.jpg";
import aiellos from "./assets/photo-gallery/aiellos.jpg";
import fatherdaughter from "./assets/photo-gallery/fatherdaughter.png";
import flyer2008 from "./assets/photo-gallery/flyer2008.png";
import friends1 from "./assets/photo-gallery/friends1.png";
import group1 from "./assets/photo-gallery/group1.png";
import group2 from "./assets/photo-gallery/group2.png";
import group3 from "./assets/photo-gallery/group3.png";
import group4 from "./assets/photo-gallery/group4.png";
import group5 from "./assets/photo-gallery/group5.png";
import group6 from "./assets/photo-gallery/group6.png";
import group7 from "./assets/photo-gallery/group7.png";
import kevinCookieJohn from "./assets/photo-gallery/kevinCookieJohn.jpg";
import kidsTennis from "./assets/photo-gallery/kidsTennis.jpg";
import mcdermotts from "./assets/photo-gallery/mcdermotts.png";
import smilingpair from "./assets/photo-gallery/smilingpair.png";
import smilingpair2 from "./assets/photo-gallery/smilingpair2.png";
import smilingpair3 from "./assets/photo-gallery/smilingpair3.png";
import tennis from "./assets/photo-gallery/tennis.jpg";
import tennisplayer from "./assets/photo-gallery/tennisplayer.png";
import tennisWinners from "./assets/photo-gallery/tennisWinners.jpg";
import timLeslieJohn from "./assets/photo-gallery/timLeslieJohn.jpg";
import vintageMcDrew from "./assets/photo-gallery/vintageMcDrew.jpg";

function McDrewGallery() {
  const [show, setShow] = useState(false);
  const showArchives = (e) => {
    setShow(!show);
  };

  return (
    <>
      <p style={{ textAlign: "center" }}>
        Photos of McDrews past. If you have any photos you'd like to add to our
        gallery,{" "}
        <a
          id="email-link"
          href="mailto:sarahdrew93@gmail.com?subject=McDrew Photo Gallery"
        >
          send an email!
        </a>
      </p>

      <div className="gallery-wrapper">
        <div className="row">
          <div className="column">
            <img src={group1} alt="group of people" />

            <img src={tennisplayer} alt="playing tennis" />
            <img src={mcdermotts} alt="McDermotts" />
            <img src={bbqPeople} alt="Friends eating BBQ" />
            <img src={cornholeWinners} alt="Cornhole Champs" />
            <img src={winnersAndLosers} alt="Cornhole winners and losers" />
            <img src={buddies} alt="Buddies enjoying the McDrew" />
            <img src={friends} alt="Friends enjoying the McDrew" />
            <img src={tennis} alt="a group enjoying the McDrew" />
            <img src={tennisWinners} alt="McDrew Tennis Winners" />
            <img src={group5} alt="Group enjoying the McDrew together" />
          </div>
          <div className="column">
            <img src={humphreyvilles} alt="The Humphreyvilles" />
            <img src={friendsWithJack} alt="Grou of Friends" />
            <img src={johnAndFran} alt=" John and Fran" />
            <img src={johnK} alt="John K" />
            <img src={manAndDog} alt="Man and Dog" />
            <img src={group2} alt="Group enjoying the McDrew" />
            <img src={smilingpair} alt="Friends enjoying the McDrew" />
            <img src={kevinCookieJohn} alt="Kevin Cookie and John" />
            <img src={Aiello} alt="Aiello" />
            <img src={timLeslieJohn} alt="Tim, Leslie, and John" />
          </div>

          <div className="column">
            <img src={vintageMcDrew} alt="Vintage McDrew" />
            <img src={abeLincoln} alt="Friends with Abe Lincoln" />
            <img src={aiellos} alt="The Aiellos" />
            <img
              src={fatherdaughter}
              alt="Father and daughter enjoying the McDrew"
            />
            <img src={flyer2008} alt="McDrew flyer from 2008" />
            <img src={friends1} alt="Friends" />
            <img src={group3} alt="Group and the McDrew" />
            <img src={group4} alt="Group together at the McDrew" />
            <img src={smilingpair2} alt="A Smiling Pair" />
            <img src={kidsTennis} alt="Kids Tennis" />
            <img src={smilingpair3} alt="Smiling at the McDrew" />
            <img src={group7} alt="a group at the McDrew" />
            <img src={group6} alt="group enjoying the McDrew" />
          </div>
        </div>
      </div>
      <button className="archives-button" onClick={showArchives}>
        Show me the archives
      </button>
      <div className={show ? "archives" : "no-archives"}>
        <div className="archives-wrapper">
          <div className="row">
            <div className="column">
              <img src={group1} alt="group of people" />
            </div>
            <div className="column">
              <img src={humphreyvilles} alt="The Humphreyvilles" />
            </div>

            <div className="column">
              <img src={flyer2008} alt="McDrew flyer from 2008" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default McDrewGallery;
