import React from "react";
import logo from "../../icons/logo-icon.png";
import Button from "../Button";

function Header() {
  return (
    <>
      <header id="header">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              {" "}
              <a href="#">Products</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>{" "}
            </li>
          </ul>
          <Button name={"Sign in"} type={"button"} />
        </nav>
      </header>
    </>
  );
}

export default Header;
