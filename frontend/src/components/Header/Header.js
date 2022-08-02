import React from "react";
import logo from "../../icons/logo-icon.png";

function Header() {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              {" "}
              <a href="#">Products</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Motive</a>
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
          <button>
            Sign in <i class="fi fi-rr-angle-right"></i>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
