"use client";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { event } from "../../lib/gtag";
import dynamic from "next/dynamic";
const CounterdownTimer = dynamic(
  () => import("../../components/CountdownTimer"),
  {
    ssr: false,
  }
);
const packages = [
  {
    name: "Your New Life Gate",
    period: "1 Month",
    price: 150,
    oldPrice: 250,
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
    oldPrice: 750,
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
    oldPrice: 1500,
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

const PackageCard = ({ pkg, index }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    // Track the button click event
    event({
      action: "click",
      category: "Package",
      label: pkg.name,
      value: pkg.price,
    });

    // Navigate to the package detail page
    router.push(`/packages/${encodeURIComponent(pkg.name)}`);
  };

  return (
    <div
      className={`relative text-xl rounded-3xl border p-5 max-w-[400px] flex flex-col justify-between overflow-hidden ${
        pkg.isHighlighted ? "lg:transform xl:scale-110 z-10" : ""
      }`}
      style={{ borderColor: pkg.borderColor, backgroundColor: pkg.bgColor }}
    >
      {pkg.isHighlighted && (
        <div
          className="absolute top-6 -right-12 bg-[#eeba2b] text-black text-base px-12 py-2 rounded-lg font-semibold"
          style={{ transform: "rotate(40deg)", fontStyle: "italic" }}
        >
          Golden Offer
        </div>
      )}
      <div>
        <div style={{ color: pkg.textColor }}>{pkg.name}</div>
        <div className="text-5xl my-5 font-semibold flex items-center justify-start flex-wrap">
          {index === 1 ? (
            ""
          ) : (
            <span className="line-through text-gray-400 italic text-4xl mr-3">
              ${pkg.oldPrice}
            </span>
          )}
          <span>${pkg.price}</span>
          {index === 1 ? (
            <CounterdownTimer
              startDate="2024-12-05T00:00:00"
              endDate="2024-12-06T00:00:00"
            />
          ) : (
            <span className="text-[13px] ml-2 text-gray-100 bg-red-500 py-[6px] px-3  rounded-xl">
              <span className="">${pkg.oldPrice - pkg.price} </span>Discont{" "}
            </span>
          )}
        </div>
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
      <button
        className="self-center w-60 text-black py-2 rounded-full text-xl transition-all mt-auto"
        style={{ backgroundColor: pkg.buttonBgColor }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = pkg.buttonHoverColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = pkg.buttonBgColor)}
        onClick={handleButtonClick}
      >
       {index === 1 ? "Get It Now" : " Start Your Journey"}
      </button>
    </div>
  );
};

const Packages = () => (
  <div className="mt-48 mb-28">
    <h1 className="textgreen text-center text-6xl font-bold">Our Packages</h1>
    <div className="max-sm:px-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-6 max-sm:space-y-4 max-sm:flex-col mt-14">
      {packages.map((pkg, index) => (
        <PackageCard key={index} pkg={pkg} index={index} />
      ))}
    </div>
  </div>
);

export default Packages;
