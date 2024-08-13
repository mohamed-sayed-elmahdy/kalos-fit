"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FaCheckCircle } from "react-icons/fa"; // Assuming you are using react-icons for the check icon

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
    <div className="mt-14 h-[100vh] flex items-center justify-center gap-12 md:px-16">
      <div>
        <h1 className="text-4xl mb-4">
          You chose the <span className="textgreen "> {selectedPackage.name} </span>package
        </h1>

        <PackageCard pkg={selectedPackage} />
      </div>

      <div className="flex items-center justify-center bg-black w-96">
        <PayPalScriptProvider >
          <PayPalButtons className="w-96"/>
        </PayPalScriptProvider>
      </div>
    </div>
  );
}




const PackageCard = ({ pkg }) => {
  return (
    <div
      className="text-xl rounded-3xl border p-5 max-w-[390px] flex flex-col justify-between"
      style={{ borderColor: pkg.borderColor, backgroundColor: pkg.bgColor }}
    >
      <div>
        <div style={{ color: pkg.textColor }}>{pkg.name}</div>
        <div className="text-5xl my-5 font-semibold">${pkg.price}</div>
        <div className="text-xl font-extrabold">{pkg.period}</div>
        <div className="text-base">{pkg.summary}</div>
        <ul className="my-6">
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
    </div>
  );
};
