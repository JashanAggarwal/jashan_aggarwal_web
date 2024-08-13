import React from "react";
import backgroundImage from "../assets/g8_bg.png";

const Restore = () => {
  return (
    <div
      className="flex flex-col w-screen xs:p-20 sm:p-20 md:p-20 lg:p-0 xl:p-0  h-screen items-center py-10  justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
      id="contact"
    >
      <h1 className="text-4xl lg:text-8xl font-bold text-red-500 mb-5 lg:mb-10">
        Don't miss out Updates
      </h1>
      <h2 className="text-lg lg:text-2xl mb-5 lg:mb-15 text-red-500">
        "Introducing our latest update - where innovation meets transformation,{" "}
        <br />
        making your experience better, faster, and more exciting than ever
        before!"
      </h2>
      <form className="my-5 lg:my-10 w-screen flex items-center justify-center flex-wrap">
        <input
          className="w-full lg:w-1/3 px-5 lg:px-10 py-3 text-lg lg:text-2xl xs:rounded-r-full sm:rounded-r-full md:rounded-r-full lg:rounded-r-none xl:rounded-r-none rounded-full outline-none mb-2 lg:mb-0"
          type="email"
          placeholder="Your email"
        />
        <button
          className="w-full lg:w-auto  xs:rounded-l-full sm:rounded-l-full md:rounded-l-full lg:rounded-l-none xl:rounded-l-none rounded-full text-lg lg:text-2xl px-5 lg:px-10 py-3 bg-red-500 text-white"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Restore;
