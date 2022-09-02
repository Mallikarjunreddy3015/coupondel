import Affiliates from "./components/affiliates/affiliates.jsx";
import Header from "./components/common/header.jsx";
import FootNav from "./components/common/FootNav.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/home/home.jsx";
import Coupons from "./components/coupons/coupons.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import UserAccount from "./components/account/Useraccount.jsx";
import Refer from "./components/refer/refer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Profile from "./components/account/Profile.jsx";
import Earnings from "./components/account/Earnings.jsx";
import AccountTab from './components/account/AccountTab';
const AppLayout = () => (
  <>
    <Header />

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

          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/account" element={<AccountTab />}>
              <Route path="/account/profile" element={<Profile/>}/>
              <Route path="/account/earnings" element={<Earnings/>}/>
            </Route>
            <Route path="/refer" element={<Refer />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
