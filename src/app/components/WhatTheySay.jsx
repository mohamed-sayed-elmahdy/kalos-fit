"use client";
import React from "react";
import feedback1 from "../../../public/feedback1.jpg";
import feedback2 from "../../../public/feedback2.jpg";
import feedback3 from "../../../public/feedback3.jpg";
import feedback4 from "../../../public/feedback4.jpg";
import Button from "../components/Button";

const testimonials = [
  {
    name: "Sarah M.",
    text: "As a busy professional, Kalos Fit provided me with a flexible, effective way to stay fit. The convenient, personalized plans fit perfectly into my schedule, and the results have been amazing.",
    image: feedback1,
  },
  {
    name: "Maya L.",
    text: "Kalos Fit's holistic approach has been transformative, helping me manage back pain with physiotherapy and adopt healthier eating habits.",
    image: feedback2,
  },
  {
    name: "Emily R.",
    text: "After trying many programs, Kalos Fit has been the most effective, with tailored workout and nutrition plans, an easy-to-use platform, and a motivating community.",
    image: feedback3,
  },
  {
    name: "Sophia K.",
    text: "Kalos Fit has been life-changing, helping me lose weight and gain confidence with personalized plans and supportive coaches always available to help.",
    image: feedback4,
  },
];

function TestimonialCard({ name, text, image, thirdCardMargin }) {
  return (
    <div className="flex flex-col items-center justify-between max-w-[320px] h-full !bg-white/10 p-8 rounded-xl mix-blend-lighten pb-4 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.99] hover:!scale-105 transition-all duration-500">
      <div className="flex flex-col items-center">
        <h3 className="text-white capitalize text-xl font-bold">{name}</h3>
        <p className="!text-white/50 text-sm leading-7 my-3 font-light">
          {text}
        </p>
      </div>
      <div>
      <img
        src={image.src}
        alt={name}
        className="w-full h-auto mt-4 rounded-lg object-cover"
      />
                <Button
            path="/packages"
            buttonStyling="w-fit mt-4  duration-300 bg-[#30B43C] text-[#FFFFFF] hover:bg-[#D4FF9E] py-2 px-8   rounded-3xl capitalize lg:text-base  hover:text-black font-medium transition-all"
            children="Get yours now"
          />
      </div>
    </div>
  );
}

function WhatTheySay() {
  return (
    <div className="bg-black text-white my-16">
      <div className="text-center py-10">
        <h2 className="!text-gradient h2 mx-auto max-w-96 mb-12">
          Read what They Say About Us
        </h2>

        <div className="bg-black grid max-w-max mx-auto gap-7 items-center justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 group">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              thirdCardMargin={index === 2 ? "mt-7" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatTheySay;
