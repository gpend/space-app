import React from "react";
import { NavLink, Link } from "react-router-dom";
import icon from "../assets/shared/icon.png";
import hamburgerMenu from "../assets/shared/icon-hamburger.svg";

function Header() {
  return (
    <header>
      <div className='header--icon'>
        <Link to='/space-app/'>
          <img src={icon} alt='site icon' />
        </Link>
      </div>
      <div className='headerNav'>
        <nav className='headerNavMenu'>
          <button onClick={HideNav}>X</button>
          <ul className='flex'>
            <li>
              <NavLink to={"/space-app/"}>
                <span className='nav-number' aria-hidden='true'>
                  00
                </span>{" "}
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/destination/Moon"}>
                <span className='nav-number' aria-hidden='true'>
                  01
                </span>{" "}
                DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to={"/crew/Hurley"}>
                <span className='nav-number' aria-hidden='true'>
                  02
                </span>{" "}
                CREW
              </NavLink>
            </li>
            <li>
              <NavLink to={"/technology/Launch"}>
                <span className='nav-number' aria-hidden='true'>
                  03
                </span>{" "}
                TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='hamburgerMenu'>
          <button id='menuButton' onClick={HideNav}>
            <img src={hamburgerMenu} alt='menu' />
          </button>
        </div>
      </div>
    </header>
  );
}

function HideNav() {
  var navMenu = document.getElementsByClassName("headerNavMenu")[0];
  var hamburgerButton = document.getElementsByClassName("hamburgerMenu")[0];
  if (navMenu.style.visibility === "visible") {
    navMenu.style.visibility = "hidden";
    hamburgerButton.style.visibility = "visible";
  } else {
    navMenu.style.visibility = "visible";
    hamburgerButton.style.visibility = "hidden";
  }
}

export default Header;
