"use client"
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js";
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
      " this package designed to transform your life over six months. Embark on a comprehensive journey towards self-improvement with personalized training programs and balanced nutrition, supported by guidance sessions and ongoing support.",
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
    const foundPackage = packages.find((pkg) => pkg.name === decodedName);

    if (foundPackage) {
      setSelectedPackage(foundPackage);
    }
  }, [name]);

  if (!selectedPackage) {
    return <div className="mt-20">Package is Loading</div>;
  }
  const paypalOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    components: "buttons",
    currency: "USD",
  };

  return (
    
      <div className="mt-28 h-[100vh] ">
        <h1 className="text-4xl">You chose the {selectedPackage.name} package</h1>
        <p>Price: ${selectedPackage.price}</p>
   <PayPalScriptProvider>
    <PayPalButtons/>
   </PayPalScriptProvider>
      </div>

  );
}
