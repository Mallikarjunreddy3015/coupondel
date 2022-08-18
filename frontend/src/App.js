import { ThemeProvider } from "@mui/system";
import React from "react";
import Affiliates from "./components/affiliates/affiliates.jsx";
import Header from "./components/common/Header.jsx";
import FootNav from "./components/common/FootNav.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/home/home.js";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Affiliates />
      <Footer />
      <FootNav />
    </>
  );
};

export default App;
