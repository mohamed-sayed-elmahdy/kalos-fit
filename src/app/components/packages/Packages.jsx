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
    price: 299,
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
    price: 599,
    summary:
      "We offer this just once a year—\n" +
      "a $3,599 program for only $599!\n" +
      "It's available for 24 hours only,\n" + 
      "with just 30 spots up for grabs.\n" +
      "Once they're gone, they're gone for the entire year.\n" +
      "Don't wait—secure your spot NOW before it's too late!",
    features: [
      "Personal Coaching ( Worth : $1500 )",
      "Personalized Nutrition Plan ( Worth : $400 )",
      "Customized Workout Plan home or gym ( Worth : $350 )",
      "Supplement Guidance system ( Worth : $200 )",
      "24/7 WhatsApp Support ( Worth : $600 )",
      "Healthy Cooking Guide ( Worth : $150 )",
      "Quick Meal Prep Guide ( Worth : $150 )",
      "Snacks Guide ( Worth : $100 )",
      "Eating Out Guide( Worth : $100 )",
      "Fast Recovery guide( Worth : $100 )",
      "Medical Consultation ( Worth : $449 )"
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
    price: 1999,
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
      className={`relative text-xl rounded-3xl border p-3 sm:p-5 max-w-[400px] flex flex-col justify-between overflow-hidden ${pkg.isHighlighted ? "lg:transform xl:scale-110 z-10" : ""
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
          <span>${pkg.price}</span>
          {index === 1 && (
            <CounterdownTimer
              startDate="2025-02-09T00:00:00"
              endDate="2025-02-10T00:00:00"
            />
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
  <div className="mt-28 md:mt-40 mb-28">
    <h1 className="textgreen text-center text-4xl sm:text-5xl md:text-6xl font-bold">Our Packages</h1>
    <div className="px-2 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 mt-8 sm:mt-10 md:mt-14">
      {packages.map((pkg, index) => (
        <PackageCard key={index} pkg={pkg} index={index} />
      ))}
    </div>
  </div>
);

export default Packages;
