import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";

function Footerbar() {
  return (
    <div className='min-h-screen w-screen bg-zinc-900 flex flex-col items-center justify-center text-white flex-wrap-1 text-center xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
      <div className='w-1/2 p-10 flex flex-col justify-center items-center'>
        <h1 className='text-3xl my-10'>Get more Updates</h1>
        <h2 className=' max-w-md'>
        Join our newsletter to get updates on our latest burger offerings,
          exclusive promotions, mouthwatering recipes, and burger-related
          articles.

        </h2>
        <div className='my-20 flex items-center justify-center [&>*]:px-2'>
          <img src={facebook} alt='' />
          <img src={twitter} alt='' />
          <img src={whatsapp} alt='' />
          <img src={instagram} alt='' />
        </div>
      </div>
      <div className='w-1/2 flex justify-evenly items-center'>
        <div>
          <h1 className='text-2xl font-bold my-4'>About</h1>
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Brand</li>
            <li>Terms And conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold my-4'>About</h1>
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Brand</li>
            <li>Terms And conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-bold my-4'>About</h1>
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Brand</li>
            <li>Terms And conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footerbar;
