import React from "react";
import { Link} from "react-router-dom";

const Footer = () =>{
    return(
            <section className="contact" id="contact">
            <div className="contact-box">
                <h3>médias sociaux</h3>
                <span>Connecte-toi avec nous</span>
                <div className="social">
                    <a  href="#Disclaimer" className="nav-a" >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a  href="#Disclaimer" className="nav-a" >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a  href="#Disclaimer"  className="nav-a" >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="contact-box contact-box-menu">
                <h3>Menu comme</h3>
                <li><Link to={"/"}>Accueil</Link></li>
                <li><Link to={"/About"}>à propos de nous</Link></li>
                <li><Link to={"/Menu"}>Menu</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
            </div>
            <div className="contact-box address">
                <h3>Contact infos</h3>
                <i className="fa-solid fa-location-dot"><span>1 Avenue Joséphine Pencalet 44300 Nantes</span></i>
                <br />
                <i className="fa-solid fa-square-phone"><span>(+33) 6 11 26 84 62</span></i>
                <br />
                <i className="fa-solid fa-envelope"><span>contact@omdata.fr</span></i>
            </div>
        </section>
    );
}
export default Footer;