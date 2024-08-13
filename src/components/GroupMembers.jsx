import React from "react";
import ParticularChef from "./ParticularChef";
import chef1 from "../assets/mask.png";
import chef2 from "../assets/mask_2.png";
import chef3 from "../assets/mask_3.png";

function GroupMembers() {
  return (
    <div className="xs:p-20 sm:p-20 md:p-20 p-2  w-screen min-h-screen text-red-500 bg-g2 bg-center bg-cover flex flex-col justify-evenly items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl xm:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
          OUR CHEF
        </h1>
        <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin text-center px-4 xl:py-5 sm:px-0 py-2 sm:py-4 ">
          Our kitchen is a stage, and our incredible chefs are the stars,
          crafting culinary wonders that will dazzle your taste buds
        </h2>
      </div>
      <div className="flex w-screen items-center justify-evenly flex-wrap flex-shrink-10">
        <ParticularChef imgSrc={chef1} name="AIDEN HUNTER" job="FOUNDER" />
        <ParticularChef imgSrc={chef2} name="ETHAL RAMSEY" job="FOUNDER" />
        <ParticularChef imgSrc={chef3} name="FANNIE STEWART" job="FOUNDER" />
      </div>
    </div>
  );
}

export default GroupMembers;
