import React from "react";
import Image from "next/image";

// مكون فرعي لبطاقة البرنامج
const ProgramCard = ({ src, alt, title, description }) => (
  <div className="rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div className="h-96 w-72">
      <Image
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src={src}
        alt={alt}
        layout="fill" // تعبئة الصورة حسب الحاوية
        objectFit="cover" // لضبط الصورة
        quality={75} // جودة الصورة لتحسين الأداء
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // إعداد الصور لتناسب الأجهزة المختلفة
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
    <div className="absolute inset-0 flex translate-y-[75%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 className="text-3xl font-bold textgreen">{title}</h1>
      <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {description}
      </p>
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
        />
        <ProgramCard
          src="/Getready.webp"
          alt="Get ready"
          title="Get Ready for a Special Event"
          description="Prepare to shine at your next big event with our Get Ready for a Special Event program. Whether it's a wedding, vacation, or reunion, we'll help you look and feel your best in no time."
        />
        <ProgramCard
          src="/Longtermweightgain.webp"
          alt="Longterm weight gain"
          title="Long-Term Weight Gain"
          description="Build muscle and gain weight healthily and sustainably with our Long-Term Weight Gain Program. Perfect for those looking to increase their strength and build a more athletic physique."
        />
        <ProgramCard
          src="/Lifestyle.webp"
          alt="Lifestyle"
          title="The Lifestyle Program"
          description="Adopt a holistic approach to your health and well-being with The Lifestyle Program. This program is ideal for those seeking to seamlessly integrate fitness and nutrition into their daily lives."
        />
      </div>
    </div>
  );
}

export default Page;
