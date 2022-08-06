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
              <a href="#products">Products</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#partners">Partners</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#team">Team</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#contact">Contact</a>{" "}
            </li>
          </ul>
          <Button name={"Sign in"} type={"button"} />
        </nav>
      </header>
    </>
  );
}

export default Header;
