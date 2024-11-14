import React from "react";
import Image from "next/image";
import PackageButton from "../PackageButton/PackageButton";

const ProgramCard = ({ src, alt, title, description, translatePercent }) => (
  <div className="rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div className="h-96 w-72">
      <Image
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        fetchPriority="low"
      />
    </div>
    <div className="absolute max-lg:bg-black/40 inset-0 bg-gradient-to-b from-transparent via-transparent  to-black group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/40"></div>
    <div
      className={`absolute inset-0 flex ${translatePercent} flex-col items-center justify-center px-9 text-center transition-all duration-500 lg:group-hover:translate-y-0`}
    >
      <h1 className="text-[25px] font-bold textgreen">{title}</h1>
      <p className="mb-3 text-[17px] text-white lg:opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100">
        {description}
      </p>
      <PackageButton
        path="/packages"
        parentStyling="mt-2 md:mt-0 flex justify-center items-center duration-500"
        buttonStyling="bg-[#30B43C] text-[#FFFFFF] hover:bg-[#D4FF9E] py-2 px-8   rounded-3xl capitalize lg:text-base  hover:text-white font-medium transition-all"
        children="Start now"
      />
    </div>
  </div>
);

function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="h1 text-gradient my-8 md:mb-20">Our Programs</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <ProgramCard
          src="/Longtermweightloss.webp"
          alt="Longterm weight loss"
          title="Long-Term Weight Loss"
          description="Achieve and maintain your ideal weight with our comprehensive Long-Term Weight Loss Program. This program is designed to help you lose weight gradually and sustainably, promoting healthy habits that last a lifetime."
          translatePercent={"lg:translate-y-[69%]"}
        />
        <ProgramCard
          src="/Getready.webp"
          alt="Get ready"
          title="Get Ready for a Special Event"
          description="Prepare to shine at your next big event with our Get Ready for a Special Event program. Whether it's a wedding, vacation, or reunion, we'll help you look and feel your best in no time."
          translatePercent={"lg:translate-y-[66%]"}
        />
        <ProgramCard
          src="/Longtermweightgain.webp"
          alt="Longterm weight gain"
          title="Long-Term Weight Gain"
          description="Build muscle and gain weight healthily and sustainably with our Long-Term Weight Gain Program. Perfect for those looking to increase their strength and build a more athletic physique."
          translatePercent={"lg:translate-y-[65%]"}
        />
        <ProgramCard
          src="/Lifestyle.webp"
          alt="Lifestyle"
          title="The Lifestyle Program"
          description="Adopt a holistic approach to your health and well-being with The Lifestyle Program. This program is ideal for those seeking to seamlessly integrate fitness and nutrition into their daily lives."
          translatePercent={"lg:translate-y-[61%]"}
        />
      </div>
    </div>
  );
}

export default Page;
