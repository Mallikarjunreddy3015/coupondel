import React from "react";
import logo from "../../icons/logo-icon.png";
import Button from "../Button";
import './Header.css'
const activemenu=()=>{
  let menuBar= document.getElementById('menu')
  let menuUL= document.getElementById('menuUl')
  menuBar.classList.toggle('.active')
  menuUL.classList.toggle('active')
}

function Header() {
  return (
    <>
      <header id="header">
        <nav>
          <img src={logo} alt="logo" />
          <ul id="menuUl">
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
        <div id="menu" className="menu-bar " onClick={activemenu} onBlur={activemenu}>
        <span class="open material-symbols-outlined">menu</span>
        <span class="close material-symbols-outlined">close</span>
        
        </div>
      </header>
    </>
  );
}

export default Header;
