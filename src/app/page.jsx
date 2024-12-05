import HeroSection from "./components/HeroSection/HeroSection";
import ProgramSection from "./components/ProgramSection/ProgramSection";
import WhatTheySay from "./components/WhatTheySay";
import HowWecan from "./components/HowWeCan/HowWecan";
import GoldenPackage from "./components/GoldenPackage"
export default function Home() {
  return (
    <div>
      <HeroSection />
      <GoldenPackage />
      <ProgramSection />
      <HowWecan />
      <WhatTheySay />
    </div>
  );
}
