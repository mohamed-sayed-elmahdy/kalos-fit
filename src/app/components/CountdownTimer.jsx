"use client";
import { useEffect, useState } from "react";

const CountdownTimer = ({ endDate }) => {
  // State to track if the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Calculate remaining time
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(endDate);
    const difference = end - now;

    if (difference <= 0) {
      return null; // Timer has ended
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  // State for time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    // Set the component as mounted
    setIsMounted(true);

    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      if (!time) {
        clearInterval(timer);
      } else {
        setTimeLeft(time);
      }
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [endDate]);

  // Return null until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  // Handle timer ended case
  if (!timeLeft) {
    return <div className="text-gold">Time's up!</div>;
  }

  return (
    <div className="flex items-center justify-evenly gap-2 mt-4 mb-4 text-gold text-sm flex-wrap">
      <span className="text-base md:text-xl font-semibold">
        For Just <span className="text-[#eeba2b]">One Day</span>
      </span>
      <div className="flex items-center justify-center gap-0 border border-[#eeba2b] rounded-xl sm:px-3 px-2">
        <div className="text-gold text-lg font-semibold bg-black px-[2px] py-1 rounded-md">
          {String(timeLeft.hours).padStart(2, "0")} h
          <span className="text-[#eeba2b] font-extrabold text-lg"> :</span>
        </div>
        <div className="text-gold text-lg font-semibold bg-black px-[2px] py-1 rounded-md">
          {String(timeLeft.minutes).padStart(2, "0")} m
          <span className="text-[#eeba2b] font-extrabold text-lg"> :</span>
        </div>
        <div className="text-gold text-lg font-semibold bg-black px-[2px] py-1 rounded-md">
          {String(timeLeft.seconds).padStart(2, "0")} s
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
