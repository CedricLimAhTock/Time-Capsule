import React, { useState, useEffect } from 'react';
import './Countdown.css'; // You can create your own CSS file for styling

function Countdown() {
  const targetDate = new Date('2023-10-01T10:00:00'); // Set your target date and time here

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDiff = targetDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <div className="countdown-number">{timeRemaining.days}</div>
        <div className="countdown-label">DAYS</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-number">{timeRemaining.hours}</div>
        <div className="countdown-label">HOURS</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-number">{timeRemaining.minutes}</div>
        <div className="countdown-label">MINUTES</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-number">{timeRemaining.seconds}</div>
        <div className="countdown-label">SECONDS</div>
      </div>
    </div>
  );
}

export default Countdown;
