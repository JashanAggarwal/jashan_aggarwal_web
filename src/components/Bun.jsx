import React from "react";
import burger from "../assets/burger.png";

function Bun() {
  return (
    <div className='bg-red-500 min-h-screen items-center flex flex-wrap justify-around text-left xs:p-20 sm:p-20 p-10' id="product">
      <div className='flex justify-center'>
        <img
          className='w-3/5 xm:w-3/5 sm:w-3/5 md:w-4/5 lg:w-max xl:w-max'
          src={burger}
          alt=''
        />
      </div>
      <div className='w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 [&>*]:my-6 text-white  h-full p-20 text-center lg:text-start xl:text-start flex flex-col justify-evenly items-center  xs:items-center sm:items-center md:items-center lg:items-start xl:items-start'>
        <h1 className=' text-4xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-8xl font-bold'>
          Best Burger
        </h1>
        <h2 className='text-2xl'>
        "Indulge in the burger experience of a lifetime
         – where every bite is
         a journey to burger bliss!"
        </h2>
        <button className='bg-white text-red-500 px-[6rem] py-3 text-xl rounded-full'>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default Bun;
