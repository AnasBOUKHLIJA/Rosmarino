import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import { ThemeContext } from '../context/DarkContext';
const NavBar = () => {
    const [showBar,setShowBar] = useState(false);
    const [classNameNav,setClassNameBar] = useState("normal");
    const {theme,setTheme} = React.useContext(ThemeContext); 
    return(
        <nav className={`nav ${classNameNav}`}>
            <div className="nav-item-img">
                <img src="/images/logo.png" alt="Logo"/>
            </div>
            {showBar ? 
                  <i class="fa-solid fa-xmark" onClick={() =>{setShowBar(!showBar);setClassNameBar("normal")}}></i>
                : <i class="fa-solid fa-bars" onClick={() =>{setShowBar(!showBar);setClassNameBar("anormal")}}></i>
            }
            <div className="nav-item-links">
                <ul>
                    <li><NavLink className="nav-NavLink" to="/Home"><i className="fa-solid fa-house"></i> Accueil</NavLink></li>
                    <li><NavLink className="nav-NavLink" to="/Team"><i class="fa-solid fa-people-group"></i> Notre équipe</NavLink></li>
                    <li><NavLink className="nav-NavLink" to="/Menu"><i class="fa-solid fa-pizza-slice"></i> notre Menu</NavLink></li>
                    <li><NavLink className="nav-NavLink" to="/Reservation"><i class="fa-solid fa-calendar-days"></i> réservation</NavLink></li>
                    <li><NavLink className="nav-NavLink" to="/Contact"><i class="fa-solid fa-comments"></i>Contact</NavLink></li>
                </ul>
            </div>
            <div className="nav-item-icons">
                <ul>
                    {/* <i class="fas fa-bars" id="menu-bars"></i> */}
                    {
                        (theme==="dark")?
                            <i class="fa-solid fa-sun" onClick={()=>setTheme("light")}></i>
                            :<i className="fa-solid fa-moon" onClick={()=>setTheme("dark")}></i>}
                    
                    {/* <NavLink to="/Contact" className="fas fa-heart"></NavLink> */}
                    <NavLink to="/Cart" className="fas fa-shopping-cart"></NavLink>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;