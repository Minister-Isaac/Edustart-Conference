import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('June 28, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="timer-row">
        <div className="timer-number">{timeLeft.days}</div>
        <div className="colon">:</div>
        <div className="timer-number">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="colon">:</div>
        <div className="timer-number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="colon">:</div>
        <div className="timer-number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
      </div>
      <div className="label-row">
        <div className="timer-label">Days</div>
        <div className="timer-label empty"></div>
        <div className="timer-label">Hours</div>
        <div className="timer-label empty"></div>
        <div className="timer-label">Min</div>
        <div className="timer-label empty"></div>
        <div className="timer-label">Sec</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
