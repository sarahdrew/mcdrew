import React, { useEffect, useState } from "react";

export default function CountDownTimer() {
  const calculateTimeLeft = () => {
    let year = 2021;
    let difference = +new Date(`08/14/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="countdown-container">
      <h2>McDrew 2021 Countdown</h2>
      <h5 style={{ color: "white" }}>
        Friday, August 13! McDrew at 4pm Central today
      </h5>
      <h5 style={{ color: "white" }}>See you there!</h5>
    </div>
  );
}
