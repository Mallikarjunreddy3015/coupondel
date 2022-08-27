import { ThemeProvider } from "@mui/system";
import Affiliates from "./components/affiliates/affiliates.jsx";
import Header from "./components/common/header.jsx";
import FootNav from "./components/common/FootNav.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/home/home.jsx";
import {  NavLink } from "react-router-dom";
import Coupons from "./components/coupons/coupons.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import { BrowserRouter  as Router, Route, Routes,Outlet } from "react-router-dom";
const AppLayout = () => (
  <>
    <Header />
import UserAccount from "./components/account/useraccount.jsx";
import Refer from "./components/refer/refer.jsx";

    <Outlet />

    <Footer />
    <FootNav />
  </>
);
const App = () => {
  return (
    <>
    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<AppLayout/>}>

          <Route path="/" element={<Home />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/coupons" element={<Coupons />} />

        </Route>

      </Routes></Router>
    </>
  );
};

export default App;
