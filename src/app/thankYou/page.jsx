"use client";
import React from "react";
import useStore from "../functions/store"; // Import the Zustand store

function page() {
  const payerName = useStore((state) => state.payerName); // Access the payer name

  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1 className="text-4xl max-w-[750px] textgreen text-center">
        Hi <span className="text-[#D4FF9E]">{payerName}</span>!, We're delighted you've decided to take a step towards a
        healthier and happier you with Kalos Fit! Your personalized program
        arrives in 2-3 business days through your E-mail
      </h1>
    </div>
  );
}

export default page;
