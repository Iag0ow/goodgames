import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-2 not-selectable">
            <span to={"/"} className="brand-name ">
              GooDGames
            </span>
            <img
              className="ms-4"
              width="80px"
              src="/logoNewRemove.png"
              alt="GooDGames"
            />
          </div>
          <div className="col-md-2">
            <h4>COMPANY</h4>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/popular"}>
                  Popular
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>COMUNITY</h4>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/privacy"}>
                  Privacy Policy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/terms"}>
                  Terms of Use
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>UTILS LINKS</h4>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.linkedin.com/in/iago-macêdo-471b00219/"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/list"}>
                  List
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>
                <a href="mailto:iagomacedo159@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-2xl" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Iag0ow">
                  <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/iago-mac%C3%AAdo-471b00219/">
                  <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
