"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(() => import("../../components/CountdownTimer"), {
  ssr: false, 
});
import { FaCheckCircle } from "react-icons/fa";
import PayPalCheckout from "../../components/PayPalButton";
const packages = [
  {
    name: "Your New Life Gate",
    period: "1 Month",
    price: 150,
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
    price: 499,
    summary:
      "Get ready for any important event in your life and shine with a beautiful, fit body",
    features: [
      "A nutrition plan tailored to your needs and desires",
      "A Workout plan from home or at home tailored to your level",
      "A suggested system for supplements if you want to use them",
      "Respond To WhatsApp messages Within 12 - 24 Hours From your nutrition & training Coach",
      "Medical consultation",
    ],
    bgColor: "#000",
    borderColor: "#eeba2b",
    buttonBgColor: "#eeba2b",
    buttonHoverColor: "#ffd75e",
    textColor: "#eeba2b",
    isHighlighted: true, 
  },
  {
    name: "Lifestyle",
    period: "6 Months",
    price: 850,
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
    const foundPackage = packages.find((pkg) => pkg.name === decodedName);

    if (foundPackage) {
      setSelectedPackage(foundPackage);
    }
  }, [name]);

  if (!selectedPackage) {
    return <div className="mt-20">Package is Loading</div>;
  }

  return (
    <div className="w-full md:mt-56 my-36 flex items-center justify-center gap-1 md:gap-4 lg:gap-12 md:px-16 flex-wrap max-sm:px-[10px]">
      <div>
        <h1 className="text-4xl mb-4 max-w-96">
          You chose the{" "}
          <span className="textgreen">{selectedPackage.name}</span> package
        </h1>

        <PackageCard pkg={selectedPackage} />
      </div>

      <div className="flex items-center justify-center bg-black max-sm:w-full min-w-90 max-w-96 max-md:my-7 flex-col">
        <PayPalCheckout selectedPackage={selectedPackage}  />
      </div>
    </div>
  );
}

const PackageCard = ({ pkg }) => {
  const [showFeatures, setShowFeatures] = useState(false);

  const handleToggle = () => {
    setShowFeatures((prevState) => !prevState);
  };

  return (
    <div
      className="text-xl rounded-3xl border p-5 max-w-[390px] flex flex-col justify-between transition-all duration-500 "
      style={{ borderColor: pkg.borderColor, backgroundColor: pkg.bgColor }}
    >
      <div>
        <div style={{ color: pkg.textColor }}>{pkg.name}</div>
        <div className="text-5xl my-5 font-semibold">${pkg.price}</div>
         {pkg.name === "Get Ready" ? <CountdownTimer endDate="2024-12-06T00:00:00"/> : ""}
        <div className="text-xl font-extrabold">{pkg.period}</div>
        <div className="text-base">{pkg.summary}</div>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            showFeatures ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="my-6 transition-all duration-500">
            {pkg.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-base gap-3 text-white font-semibold leading-6 px-2"
              >
                <span className="pt-1">
                  <FaCheckCircle
                    className="text-base"
                    style={{ color: pkg.borderColor }}
                  />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`self-center w-60 text-[#000]  font-bold py-2 rounded-full text-xl transition-all duration-500  hover:bg-${pkg.buttonHoverColor} bg-[${pkg.buttonBgColor}] mt-3`}
          onClick={handleToggle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = pkg.buttonHoverColor)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = pkg.buttonBgColor)}
        >
          {showFeatures ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};
