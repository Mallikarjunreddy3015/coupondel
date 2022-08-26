import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);
