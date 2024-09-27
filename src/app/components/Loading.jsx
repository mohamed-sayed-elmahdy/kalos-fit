// Import the Next.js script component
import Script from "next/script";

export default function HourglassComponent() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Load the external script */}

      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/dotSpinner.js"
      ></Script>
      <div className=" absolute w-full h-full top-0 left-0 "></div>
      {/* // Default values shown */}
      <l-dot-spinner
        size="50"
        speed="0.9"
        color="white"
        className="z-10"
      ></l-dot-spinner>
    </div>
  );
}
