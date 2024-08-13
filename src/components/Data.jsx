import React from "react";

function Data() {
  return (
    <div className='min-h-screen bg-red-500 text-white text-center flex flex-col justify-around items-center p-5'>
      <div className='my-10'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-10xl my-10 font-bold'>
          Statistics
        </h1>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
        "Embrace the sizzle and star-tices in every bite as we launch <br/> the galaxy of flavors at our cosmic burger restaurant!"
        </h2>
      </div>
      <div className='flex justify-around w-screen flex-wrap space-y-5 sm:space-y-0 sm:space-x-5'>
        <div className='border-8 border-white w-80 h-80 flex flex-col items-center justify-center rounded-full'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl'>
           10K+
          </h1>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
           Happy   Customers
          </h2>
        </div>
        <div className='border-8 border-white w-80 h-80 flex flex-col items-center justify-center rounded-full'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl'>
            20+
          </h1>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
           Stores
          </h2>
        </div>
        <div className='border-8 border-white w-80 h-80 flex flex-col items-center justify-center rounded-full'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl'>
            12+
          </h1>
          <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
          City
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Data;
