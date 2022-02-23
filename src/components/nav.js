import React from "react"
import { NavLink } from "react-router-dom"

function Nav (){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>
                        <span className="nav-number">00</span> HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/destination"}>
                        <span className="nav-number">01</span> DESTINATION
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/crew"}>
                        <span className="nav-number">02</span> CREW
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/technology"}>
                        <span className="nav-number">03</span> TECHNOLOGY
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav