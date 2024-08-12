"use client";

import { useState, React, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const packages = [
  {
    name: "Your New Life Gate",
    period: "1 Month",
    price: 250,
    summary: "Your Gate for Your Confident, Healthy, Successful Life",
    features: [
      "A nutrition plan tailored to your needs and desires",
      "A Workout plan from home or at home tailored to your level",
      "A suggested system for supplements if you want to use them",
      "Respond To WhatsApp messages Within 12 - 24 Hours From your nutrition & training Coach",
      "Medical consultation",
    ],
    bgColor: "#112308",
    borderColor: "#30B43C",
    buttonBgColor: "#30B43C",
    buttonHoverColor: "#7CFF88",
    textColor: "#30B43C",
  },
  {
    name: "Get Ready",
    period: "3 Months",
    price: 750,
    summary:
      "Get ready for any important event in your life and shine with a beautiful, fit body",
    features: [
      "A nutrition plan tailored to your needs and desires",
      "A Workout plan from home or at home tailored to your level",
      "A suggested system for supplements if you want to use them",
      "Respond To WhatsApp messages Within 12 - 24 Hours From your nutrition & training Coach",
      "Medical consultation",
    ],
    bgColor: "#112308",
    borderColor: "#30B43C",
    buttonBgColor: "#30B43C",
    buttonHoverColor: "#7CFF88",
    textColor: "#30B43C",
  },
  {
    name: "Lifestyle",
    period: "6 Months",
    price: 1500,
    summary:
      "This package is designed to transform your life over six months. Embark on a comprehensive journey towards self-improvement with personalized training programs and balanced nutrition, supported by guidance sessions and ongoing support.",
    features: [
      "A nutrition plan tailored to your needs and desires",
      "A Workout plan from home or at home tailored to your level",
      "A suggested system for supplements if you want to use them",
      "Respond To WhatsApp messages Within 12 - 24 Hours From your nutrition & training Coach",
      "Weekly follow-up via Zoom With your nutrition & training Coach",
      "Medical consultation",
    ],
    bgColor: "#112308",
    borderColor: "#30B43C",
    buttonBgColor: "#30B43C",
    buttonHoverColor: "#7CFF88",
    textColor: "#30B43C",
  },
];

export default function CheckoutPage({ params }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { name } = params;

  useEffect(() => {
    const decodedName = decodeURIComponent(name);
    console.log(decodedName)
    const foundPackage = packages.find((pkg) => pkg.name === decodedName);

    if (foundPackage) {
      setSelectedPackage(foundPackage);
    }
  }, [name]);

  if (!selectedPackage) {
    return <div className="mt-72">Package not found</div>;
  }

  return (
    <div className="mt-48 h-[100vh] ">
      <h1 className="text-4xl">You chose the {selectedPackage.name} package</h1>
      <p>Price: ${selectedPackage.price}</p>
      {/* Integrate PayPal Button Component */}
    </div>
  );
}
