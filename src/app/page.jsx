import Image from "next/image";
import HeroSection from './components/HeroSection/HeroSection'
import ProgramSection from './components/ProgramSection/ProgramSection'
import WhatTheySay from './components/WhatTheySay'
import HowWecan from './components/HowWeCan/HowWecan'
export default function Home() {
  return (
 <div>
  <HeroSection/>
<ProgramSection/>
<WhatTheySay/>
<HowWecan/>
 </div>
  );
}
