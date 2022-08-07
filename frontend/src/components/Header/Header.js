import React from "react";
import logo from "../../icons/logo-icon.png";
import Button from "../Button";
import './Header.css'
const activemenu=()=>{
  let menuBar= document.getElementById('menu')
  let menuUL= document.getElementById('menuUl')
  menuBar.classList.toggle('active')
  menuUL.classList.toggle('active')
  let blurbody = document.getElementById('blurbody')
  blurbody.classList.toggle('blurbody')
  let root = document.getElementById('body')
  root.classList.toggle('menuactive')

}

function Header() {
  return (
    <> <div className=" " id="blurbody" onClick={activemenu}></div>
      <header id="header ">
        <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <siv id="blur" className="blur"></siv>
        </div>
          <div className="menuUl" id="menuUl">
          <div id="menu" className="menu-bar " onClick={activemenu} >
        <span class="open material-symbols-outlined">menu</span>
        <span class="close material-symbols-outlined">close</span>
        
        </div>
                <ul >
            <li onClick={activemenu}>
              {" "}
              <a href="#products">Products</a>{" "}
            </li>
            <li onClick={activemenu}>
              {" "}
              <a href="#partners">Partners</a>{" "}
            </li>
            <li onClick={activemenu}>
              {" "}
              <a href="#team">Team</a>{" "}
            </li>
            <li onClick={activemenu}>
              {" "}
              <a href="#contact">Contact</a>{" "}
            </li>
          </ul>
          <Button name={"Sign in"} type={"button"} />
          </div>
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
