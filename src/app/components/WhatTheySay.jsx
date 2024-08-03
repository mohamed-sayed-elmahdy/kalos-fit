"use client";
import React from "react";
import { IoStar } from "react-icons/io5";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Joining Kalos Fit has been a life-changing experience for me. The personalized nutrition plans and training programs have helped me lose 15 pounds and gain a ton of confidence. The coaches are incredibly supportive and always available for any questions. I highly recommend this service to anyone looking to make a positive change in their life.",
  },
  {
    name: "Maya L.",
    text: "I've tried numerous fitness programs in the past, but none have been as effective as Kalos Fit. The combination of tailored workout plans and nutritional guidance has allowed me to build muscle and improve my overall health. The online platform is easy to use and the community is very motivating. Thank you for helping me reach my goals!",
  },
  {
    name: "Emily R.",
    text: "The holistic approach of Kalos fit is what sets it apart from others. It's not just about losing weight; it's about adopting a healthier lifestyle. The physiotherapy sessions have been particularly beneficial for my back pain, and the nutrition advice has completely changed the way I eat. I feel better than ever!",
  },
  {
    name: "Sophia K.",
    text: "As a busy professional, I needed a flexible and effective way to stay fit and healthy. Kalos Fit offers exactly that. The online training programs are convenient and the personalized plans fit perfectly into my hectic schedule. I've seen amazing results and can't thank the team enough for their dedication and expertise.",
  },
];

function TestimonialCard({ name, text, thirdCardMargin }) {
  return (
    <div className="  flex flex-col items-center justify-start max-w-[320px] h-full bg-white/10 p-8 rounded-xl mix-blend-lighten pb-4 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.99] hover:!scale-105 transition-all duration-500">
      <h3 className=" text-white h3 capitalize text-xl font-bold">
        {name}
      </h3>
      <p className=" text-white/50 text-sm leading-7 my-3 font-light ">
        {text}
      </p>
      <div
        className={`flex gap-[2px] justify-center items-center ${thirdCardMargin} `}
      >
        <IoStar className="text-yellow-300" />
        <IoStar className="text-yellow-300" />
        <IoStar className="text-yellow-300" />
        <IoStar className="text-yellow-300" />
        <IoStar className="text-yellow-300" />
      </div>
    </div>
  );
}

function WhatTheySay() {
  return (
    <div className="bg-black text-white my-16">
      <div className="text-center py-10">
        <h2 className="text-gradient h2 mx-auto max-w-96 mb-12">
          Read what They Say About Us
        </h2>
        {/* <motion.div
          variants={FadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="w-full"
        > */}
          <div className="bg-black grid max-w-max mx-auto gap-7 items-center justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 group">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                thirdCardMargin={index === 2 ? "mt-7" : ""}
              />
            ))}
          </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
}

export default WhatTheySay;
