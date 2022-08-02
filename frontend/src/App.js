import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import logo from "./Images/me.png";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}
export default App;
