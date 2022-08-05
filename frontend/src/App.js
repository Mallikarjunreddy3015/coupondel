import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./images/background.png";

function App() {
  return (
    <Router>
      <Header />
      <About />
      <Footer />
    </Router>
    
  );
}
export default App;
