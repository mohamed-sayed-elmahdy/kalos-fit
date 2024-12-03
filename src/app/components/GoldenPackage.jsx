"use client";
import React from "react";
import CounterdownTimer from "./CountdownTimer";
import Link from "next/link";

function GoldenPackage() {
  return (
    <div className={`p-2 flex justify-center items-center`}>
      <div
        className={`relative text-xl rounded-3xl border p-2 max-w-[390px] flex flex-col justify-between overflow-hidden lg:transform xl:scale-110 z-10 border-[#eeba2b]`}
      >
        <div
          className="mt-2 mb-3 bg-gold text-black text-2xl font-extrabold py-2 text-center rounded-3xl"
          style={{ backgroundColor: "#eeba2b" }}
        >
          Golden Offer
        </div>

        {/* Timer and One-Day Offer */}
        <div className="flex items-center justify-evenly gap-2 mt-4 mb-4 text-gold text-sm flex-wrap">
          <span className="text-base md:text-xl font-semibold">
            For Just <span className="text-[#eeba2b]">One Day</span>
          </span>
          <CounterdownTimer
            startDate="2024-12-03T00:00:00"
            endDate="2024-12-04T00:00:00"
          />
        </div>

        {/* 3-Month Guarantee */}
        <div className="text-center my-2 font-semibold text-lg md:text-2xl">
          <div className="text-white ">
            If you didn't get an incredible transformation in just 3 months
          </div>
          <div className="text-gold font-semibold mt-2 text-[#eeba2b] capitalize">
            you will get your money back
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4 mb-6 ">
          <img
            src="/feedback1.jpg"
            alt="Image 1"
            className="w-full rounded-lg"
          />
          <img
            src="/feedback2.jpg"
            alt="Image 2"
            className="w-full rounded-lg md:h-[184.1px]"
          />
        </div>

        {/* Button */}
        <Link href={"/packages"} className="flex justify-center items-center">
          <button
            className="self-center w-60 text-black py-2 rounded-full text-xl transition-all mt-auto bg-[#eeba2b] hover:bg-[#ffd562]"
          >
            Get It Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GoldenPackage;