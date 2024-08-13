import React from "react";
import OurChef from "./GroupMembers";
import Updates from "./Restore";
import About from "./Data";
import BurgerHub from "./BurgerHub";
import Promo from "./Offers";
import Other from "./Others"
function Main() {
  return (
    <>
      <div className="bg-hero h-screen bg-cover bg-no-repeat bg-center relative top-[-20px]">
     
        <div className="text-white w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-2/5 h-full ml-4 sm:ml-20 flex flex-col xl:my-5 items-start text-left px-4 sm:px-0">
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold">
            Get CashBack Upto 50%
          </h1>
          <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 leading-tight my-4">
            "Get ready to elevate your taste experience – where every bite at
            our burger shop is a burst of pure deliciousness!"
          </h2>
          <button className="bg-orange-600 px-6 py-2 text-lg sm:text-xl rounded-full mt-6">
            ORDER NOW
          </button>
        </div>
      </div>
      <OurChef />
      <BurgerHub/>
      <About/>
      <Promo/>
    <Other/>
      <Updates />
    </>
  );
}

export default Main;
