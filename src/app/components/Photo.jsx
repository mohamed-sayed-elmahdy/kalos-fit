"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[285px] h-[285px] xl:w-[485px] xl:h-[485px] mix-blend-lighten absolute left-6"
        >
          <Image
            src="/heroSectionPhotoEdited.png "
            priority
            quality={100}
            fill
            alt="heroSectionPhoto"
            className="object-contain"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          initial={{ y: -10,x:0 }}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#30B43C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "16 25 92 72", "4 250 22 22"],rotate: [120, 360],}}
            transition={{
                duration:20, repeat: Infinity, repeatType:"reverse"
            }}
            
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
