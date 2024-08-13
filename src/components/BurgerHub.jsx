import React from "react";
import burger from "../assets/burger.png";
import Bun from "./Bun";

function BurgerHub() {
  return (
    <>
        <Bun />
  
    <div className='bg-g4 min-h-screen items-center flex flex-row-reverse flex-wrap justify-around text-left xs:p-20 sm:p-20 p-10'>
      <div className='flex justify-center'>
        <img
          className='w-3/5 xm:w-3/5 sm:w-3/5 md:w-4/5 lg:w-max xl:w-max'
          src={burger}
          alt=''
        />
      </div>
      <div className='[&>*]:my-6 w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 my-6 text-red-500 h-full p-20 text-center lg:text-start xl:text-start flex flex-col justify-evenly items-center xs:items-center sm:items-center md:items-center lg:items-start xl:items-start'>
        <h1 className=' text-4xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-8xl font-bold'>
          Big Burger
        </h1>
        <h2 className='text-base sm:text-2xl lg:text-xl xl:text-2xl'>
        "Get ready for a bigger, bolder burger adventure that's larger 
        than life and full of 
        flavor – it's time to savor the thrill of our Big Burger sensation!"
        </h2>
        <button className='bg-red-500 text-white px-[6rem] py-3 text-xl rounded-full'>
          ORDER NOW
        </button>
      </div>
    </div>
    </>
  );
}

export default BurgerHub;
