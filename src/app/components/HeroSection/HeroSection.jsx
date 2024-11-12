import React from "react";
import PackageButton from "../PackageButton/PackageButton";
import Photo from "../Photo";
import Social from "../Social";

function HeroSection() {
  return (
    <div className="pt-36 container mx-auto h-full text-white lg:px-9">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h1 className="h1 mb-1 ">
            Discover Your Best <br />
            Self with <span className="textgreen font-bold">Kalos Fit</span>
          </h1>
          <p className="max-w-[500px] mb-8 text-white/80">
            Welcome to
            <span className="textgreen font-semibold"> Kalos Fit,</span> your
            empowering partner in health and wellness!,We understand the unique
            challenges you face when it comes to nutrition. Between work,
            family, and daily commitments, it's easy to feel overwhelmed and
            fall behind on your health goals. That's why we create personalized
            nutrition plans designed for your lifestyle.
          </p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <PackageButton
            path="/packages"
              parentStyling="mt-2 md:mt-0 flex justify-center items-center duration-500"
              buttonStyling="py-2 px-8 bg-black border-2 border-[#30B43C] text-[#30B43C] rounded-3xl capitalize lg:text-base hover:bg-[#30B43C] hover:text-white font-medium transition-all"
              children="choose your Package"
            />
            <div className="mb-8 xl:mb-0 ">
              <Social
                parentStyling="flex gap-4 items-center justify-center"
                iconsStyling="w-9 h-9 border border-[#30B43C] rounded-full flex justify-center items-center text-[#30B43C] text-base hover:text-white hover:bg-[#30B43C] hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>
      </div>
    </div>
  );
}

export default HeroSection;
