import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contuctus from "./components/Contactus";
import Main from "./components/Main";
import Footerbar from "./components/FooterBar";
import About from "./components/Data";
import BurgerHub from "./components/BurgerHub";
import Promo from "./components/Offers";
 import OurChef from "./components/GroupMembers"
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {

  const userAuth = localStorage.getItem('user') ? localStorage.getItem('user') : null;
   


  return (
    <>
      <BrowserRouter>
        
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contuctus />} />
              <Route path="/ourchief" element={<OurChef />} />
              <Route path="/product" element={<BurgerHub />} />
              <Route path="/login" element={<Login />} />
              <Route path="/promo" element={<Promo />} />
            </Routes>
            <Footerbar />
          </>
      
      </BrowserRouter>
    </>
  );
}

export default App;
