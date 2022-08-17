import { ThemeProvider } from "@mui/system";
import React from "react";
import Affiliates from "./components/affiliates/affiliates.jsx";
import Header from "./components/common/Header.jsx";
import FootNav from "./components/common/FootNav.jsx";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
  
    <Router>
      <Routes>
      <Route path="/" element={<Header/>}/>
      <Route exact path="/about" element={<Affiliates/>}/>
      <Route path="/contact" element={<Header/>}/>
  
      </Routes>
    </Router>
   
    </>
  );
};

export default App;
