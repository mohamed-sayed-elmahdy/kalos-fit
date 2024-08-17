"use client";
import React from "react";
import useStore from "../functions/store"; // Import the Zustand store

function page() {
  const payerName = useStore((state) => state.payerName); // Access the payer name

  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1>Thank You for Your Purchase, {payerName}!</h1>
      <p>We appreciate your business and hope you enjoy your package.</p>
    </div>
  );
}

export default page;
