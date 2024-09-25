"use client";
import React from "react";
import { IoStar } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PackageButton from "../PackageButton/PackageButton";
import { GiHealthPotion } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { IoMdTime } from "react-icons/io";


function HowWecan() {
  return (
    <div className="flex flex-col justify-center items-center my-7 ">
      <h1 className="h1 text-gradient my-12 text-center">
        How We Can Help You
      </h1>
      <VerticalTimeline lineColor="#D4FF9E" animate={true}>
        <VerticalTimelineElement
          visible={true}
          animate={true}
          className="vertical-timeline-element--work rounded-3xl"
          contentStyle={{
            background: "#30B43C",
            color: "#fff",
            borderRadius: "24px",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #30B43C" }}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<GiHealthPotion className="text-yellow-300" />}
        >
          <h3 className="vertical-timeline-element-title h3 text-black">
            Improve health:
          </h3>
          <p>
            A well-designed nutrition plan will provide the essential nutrients
            your body needs to function at its best. This can lead to a stronger
            immune system, reduced risk of chronic diseases, and better overall
            Health.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          animate={true}
          className="vertical-timeline-element--work rounded-3xl"
          contentStyle={{
            background: "#30B43C",
            color: "#fff",
            borderRadius: "24px",
          }}
          contentArrowStyle={{ borderRight: "10px solid   #30B43C" }}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<GiWeightScale className="text-yellow-300" />}
        >
          <h3 className="vertical-timeline-element-title h3 capitalize text-black">
            Weight management:
          </h3>
          <p>
            Whether you're looking to lose weight, gain muscle, or maintain your
            current weight, a nutrition plan can help you achieve your goals. By
            providing you with a structured approach to eating, a nutrition plan
            can help you control your calorie intake and make healthier food
            choices.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          animate={true}
          className="vertical-timeline-element--work rounded-3xl"
          contentStyle={{
            background: "#30B43C",
            color: "#fff",
            borderRadius: "24px",
          }}
          contentArrowStyle={{ borderRight: "10px solid   #30B43C" }}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<MdEnergySavingsLeaf className="text-yellow-300" />}
        >
          <h3 className="vertical-timeline-element-title h3 capitalize text-black ">
            Increase energy levels
          </h3>
          <p>
            Eating a balanced diet that's rich in nutrients can give you
            sustained energy throughout the day. You'll likely experience fewer
            crashes and feel more energized to tackle your daily activities.
            Improve mood and cognitive function: Some studies suggest that a
            healthy diet can play a role in mood regulation and cognitive
            function. Eating nutritious foods may help you feel more focused,
            improve your memory, and even boost your mood.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          animate={true}
          className="vertical-timeline-element--work rounded-3xl"
          contentStyle={{
            background: "#30B43C",
            color: "#fff",
            borderRadius: "24px",
          }}
          contentArrowStyle={{ borderRight: "10px solid   #30B43C" }}
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<IoMdTime className="text-yellow-300" />}
        >
          <h3 className="vertical-timeline-element-title h3 capitalize text-black">
            Time-saving and convenience
          </h3>
          <p>
            A nutrition plan can save you time and hassle by taking the
            guesswork out of meal planning. With a plan in place, you'll know
            exactly what to eat and won't have to waste time wondering what to
            make for meals and snacks.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className=" w-full flex items-center justify-center ">
        <PackageButton
          path="/about"
          children="Learn More"
          parentStyling="mt-10 md:mt-0 flex justify-center items-center lg:ml-6 lg:flex mr-6"
          buttonStyling="py-2 px-12 bg-[#30B43C] text-[#FFFFFF] rounded-3xl capitalize lg:text-base hover:bg-[#D4FF9E] hover:text-black font-medium transition-all"
        />
      </div>
    </div>
  );
}

export default HowWecan;
