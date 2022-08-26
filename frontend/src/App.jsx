import { ThemeProvider } from "@mui/system";
import Affiliates from "./components/affiliates/affiliates.jsx";
import Header from "./components/common/Header.jsx";
import FootNav from "./components/common/FootNav.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/home/home.jsx";
import { Routes, Route, NavLink } from "react-router-dom";
import Coupons from "./components/coupons/coupons.jsx";
import UserAccount from "./components/account/useraccount.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/account" element={<UserAccount />} />
      </Routes>
      <Footer />
      <FootNav />
    </>
  );
};

export default App;
