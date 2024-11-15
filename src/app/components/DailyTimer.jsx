"use client"
import  { useState, useEffect } from "react";

const DailyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    const difference = tomorrow - now;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  return (
    <div className="flex flex-col items-start justify-start  bg-gray-900 text-white font-poppins ">
      <h1 className="text-[13px] font-semibold text-yellow-400 mb-1 text-center shadow-md">
        Unlock the best deals before time runs out!
      </h1>
      <div className="flex items-center justify-center gap-3 p-1 bg-gray-800 rounded-lg shadow-lg justify-self-start">
        <span className="text-lg font-bold text-red-500">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-lg  text-white">:</span>
        <span className="text-lg  font-bold text-red-500">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-lg  text-white">:</span>
        <span className="text-lg  font-bold text-red-500">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default DailyTimer;
