import React from "react"
import { NavLink } from "react-router-dom"
import icon from "../assets/shared/icon.png"

function Header (){
    return(
        <header>
            <div className='header--icon'>
                <img src={icon} alt="site icon" />
            </div>
            <nav className="headerNav">
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            <span className="nav-number" aria-hidden="true">00</span> HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/destination/Moon"}>
                            <span className="nav-number" aria-hidden="true">01</span> DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/crew/Hurley"}>
                            <span className="nav-number" aria-hidden="true">02</span> CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/technology/Launch"}>
                            <span className="nav-number" aria-hidden="true">03</span> TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </nav>    
        </header>
        
    )
}

export default Header