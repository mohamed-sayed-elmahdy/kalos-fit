import React, { useEffect, useState } from "react";

const CountdownTimer = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const end = new Date(endDate);
    const difference = end - now;

    if (difference <= 0) {
      return null; // انتهى التايمر
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      if (!time) {
        clearInterval(timer);
      } else {
        setTimeLeft(time);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div className="text-gold">Time's up!</div>;
  }

  return (
    <div className="flex items-center justify-center gap-0 border border-[#eeba2b] rounded-xl px-3">
      <div className="text-gold text-lg font-semibold bg-black px-1 py-1 rounded-md">
        {String(timeLeft.hours).padStart(2, "0")} h{" "}
        <span className="text-[#eeba2b] font-extrabold text-lg">:</span>
      </div>
      <div className="text-gold text-lg font-semibold bg-black px-1 py-1 rounded-md">
        {String(timeLeft.minutes).padStart(2, "0")} m{" "}
        <span className="text-[#eeba2b] font-extrabold text-lg">:</span>
      </div>
      <div className="text-gold text-lg font-semibold bg-black px-1 py-1 rounded-md">
        {String(timeLeft.seconds).padStart(2, "0")} s
      </div>
    </div>
  );
};

export default CountdownTimer;
