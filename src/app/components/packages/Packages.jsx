"use client"
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { event } from '../../lib/gtag'; // Import the event function from gtag

const packages = [
  {
    name: "Your New Life Gate",
    period: "1 Month",
    price: 199,
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
    price: 597,
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
    isHighlighted: true, // Added flag for special styling
  },
  {
    name: "Lifestyle",
    period: "6 Months",
    price: 1194,
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

const PackageCard = ({ pkg }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    // Track the button click event
    event({
      action: 'click',
      category: 'Package',
      label: pkg.name,
      value: pkg.price,
    });

    // Navigate to the package detail page
    router.push(`/packages/${encodeURIComponent(pkg.name)}`);
  };

  return (
    <div
      className={`relative text-xl rounded-3xl border p-5 max-w-[390px] flex flex-col justify-between overflow-hidden ${
        pkg.isHighlighted ? "lg:transform xl:scale-110 z-10" : ""
      }`}
      style={{ borderColor: pkg.borderColor, backgroundColor: pkg.bgColor }}
    >
      {pkg.isHighlighted && (
        <div
          className="absolute top-4 -right-8 bg-red-500 text-white text-base px-12 py-2 rounded-lg font-semibold"
          style={{ transform: "rotate(40deg)", fontStyle: "italic" }} 
        >
          Best Offer
        </div>
      )}
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
      <button
        className="self-center w-60 text-black py-2 rounded-full text-xl transition-all mt-auto"
        style={{ backgroundColor: pkg.buttonBgColor }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = pkg.buttonHoverColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = pkg.buttonBgColor)}
        onClick={handleButtonClick}
      >
        Start Your Journey
      </button>
    </div>
  );
};

const Packages = () => (
  <div className="mt-48 mb-28">
    <h1 className="textgreen text-center text-6xl font-bold">Our Packages</h1>
    <div className="max-sm:px-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-6 max-sm:space-y-4 max-sm:flex-col mt-14">
      {packages.map((pkg, index) => (
        <PackageCard key={index} pkg={pkg} />
      ))}
    </div>
  </div>
);

export default Packages;
