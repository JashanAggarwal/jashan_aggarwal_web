import React from "react";
import burger from "../assets/burg.png";

function Offers() {
  return (
    <div className="min-h-screen bg-g6 bg-cover bg-center text-red-500 text-center flex flex-col items-center justify-around flex-wrap py-10 lg:py-0 xl:py-0">
      <h1 className="text-6xl font-bold">Popular Offers</h1>
      <div className="flex w-screen justify-evenly flex-wrap [&>*]:my-10">
        <div className="bg-white w-fit px-16 py-20 flex flex-col items-center justify-around rounded-lg">
          <h1 className="text-5xl font-bold">Offer I</h1>
          <img className="py-4" src={burger} alt="" />
          <h2 className=" text-3xl s    font-bold py-3">$10.00</h2>
          <h3>
            Unlock a world of burger bliss with <br />
            burger package - where every box is <br />a treasure trove of taste
          </h3>
        </div>
        <div className="bg-white w-fit px-16 py-20 flex flex-col items-center justify-around rounded-lg">
          <h1 className="text-5xl font-bold">Offer II</h1>
          <img className="py-4" src={burger} alt="" />
          <h2 className=" text-3xl s    font-bold py-3">$20.00</h2>
          <h3>
            Unlock a world of burger bliss with <br />
            burger package - where every box is <br />a treasure trove of taste
          </h3>
        </div>
        <div className="bg-white w-fit px-16 py-20 flex flex-col items-center justify-around rounded-lg">
          <h1 className="text-5xl font-bold">Offer III</h1>
          <img className="py-4" src={burger} alt="" />
          <h2 className=" text-3xl s    font-bold py-3">$30.00</h2>
          <h3>
            Unlock a world of burger bliss with <br />
            burger package - where every box is <br />a treasure trove of taste
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Offers;
