import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const setNavbar = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="cursor-poiter bg-black w-screen text-white flex justify-between lg:px-20 px-5 py-5 items-center">
        <div>
          <img
            onClick={() => setNavbar("/")}
            className="cursor-poiter  w-20 lg:w-20 xl:w-30 p-2 rounded-md shadow-md cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </div>

        <div
          className={`font-bold lg:flex xl:flex ${
            menuOpen
              ? "flex flex-col absolute top-20 bg-black bg-opacity-50 [&>*]:py-10 text-center justify-center w-full h-screen z-10"
              : "hidden "
          } flex-shrink-1 w-full lg:w-auto lg:justify-end [&>*]:px-5 `}
        >
          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p className="cursor-pointer" onClick={() => setNavbar("/")}>
              Home
            </p>
          </h2>
          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p className="cursor-pointer" onClick={() => setNavbar("/product")}>
              Product
            </p>
          </h2>
          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p className="cursor-pointer" onClick={() => setNavbar("/promo")}>
              Promo
            </p>
          </h2>
          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p className="cursor-pointer" onClick={() => setNavbar("/about")}>
              About
            </p>
          </h2>
          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p
              className="cursor-pointer"
              onClick={() => setNavbar("/ourchief")}
            >
              Chief
            </p>
          </h2>
          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p className="cursor-pointer" onClick={() => setNavbar("/login")}>
              Login
            </p>
          </h2>
          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p className="cursor-pointer" onClick={() => setNavbar("/signup")}>
              Signup
            </p>
          </h2>

          <h2 className="cursor-poiter  text-lg xs:text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
            <p className="cursor-pointer" onClick={() => setNavbar("/contact")}>
              Contact
            </p>
          </h2>
        </div>

        <div className="relative cursor-pointer lg:hidden xl:hidden xs:flex sm:flex md:flex w-10 xs:w-10 sm:w-10 md:w-10 z-10">
          <HiMenuAlt1
            size={"2rem"}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
