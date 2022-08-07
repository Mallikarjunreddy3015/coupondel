import React from "react";
import logo from "../../icons/logo-icon.png";
import Button from "../Button";
import './Header.css'
const activemenu=()=>{
  let menuBar= document.getElementById('menu')
  let menuUL= document.getElementById('menuUl')
  menuBar.classList.toggle('active')
  menuUL.classList.toggle('active')
  if(window.innerWidth<801){
     let blurbody = document.getElementById('blurbody')
  blurbody.classList.toggle('blurbody')
  let root = document.getElementById('body')
  root.classList.toggle('menuactive')
  }
 
}

function Header() {
  return (
    <> <div className=" " id="blurbody" onClick={activemenu}></div>
      <header id="header">
        <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <div id="blur" className="blur"></div>
        </div>
          <div className="menuUl" id="menuUl">
        
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
        <div id="menu" className="menu-bar" onClick={activemenu} onBlur={activemenu}>
        <span className="open material-symbols-outlined">menu</span>
        <span className="close material-symbols-outlined">close</span>
        
        </div>
      </header>
    </>
  );
}

export default Header;
