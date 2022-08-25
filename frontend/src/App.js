import { ThemeProvider } from "@mui/system";
import React from "react";
import Affiliates from "./components/affiliates/affiliates.jsx";
import Header from "./components/common/Header.jsx";
import FootNav from "./components/common/FootNav.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/home/home.jsx";
import { Routes, Route, NavLink } from "react-router-dom";
import Coupons from "./components/coupons/coupons.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/coupones" element ={<Coupons/>}/>
      </Routes>
      <Footer /> 
      <FootNav />
    </>
  );
};

export default App;
