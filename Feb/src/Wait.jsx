import { useEffect, useState } from "react";

function Wait({ unlockDate }) {
  // ✅ Force number
  const day = Number(unlockDate);

  // Safety check
  if (!day || isNaN(day)) {
    return (
      <div className="wait-screen">
        <h2>⚠️ Invalid date</h2>
        <p>Please check route configuration.</p>
      </div>
    );
  }

  const year = new Date().getFullYear();

  // Feb <day> at 23:59:59
  const targetTime = new Date(year, 1, day, 23, 59, 59).getTime();

  const calculate = () => {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)-1),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="wait-screen">
        <h2>🎉 It’s time!</h2>
        <p>Your surprise is now unlocked 💖</p>
      </div>
    );
  }

  return (
    <div className="wait-screen">
      <h2>💌 Just a little wait…</h2>
      <p>Unlocks on <b>Feb {day}</b></p>

      <div className="countdown">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <small>Days</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <small>Hours</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <small>Minutes</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <small>Seconds</small>
        </div>
      </div>
    </div>
  );
}

export default Wait;
