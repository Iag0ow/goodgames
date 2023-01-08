import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const widthScreen = window.screen.width;
  const [searchOtherPage, setSearchOtherPage] = useState("");
  function handleSearch(e) {
    if (e.key === "Enter") {
      document.getElementById("submitSearch").click();
    }
  }
  function closeToggle() {
    if (widthScreen <= 767) {
      document.getElementById("toggleIdButton").click();
    }
    setSearchOtherPage("");
  }
  return (
    <Navbar fixed="top" className="nav not-selectable" expand="md">
      <Container fluid>
        <div className="brand">
          <NavLink className="brand" to={"/"}>
            <img
              className="rotate"
              width="80px"
              src="/logoNewRemove.png"
              alt="GooDGames"
            />

            <span className="brand-name">GooDGames</span>
          </NavLink>
        </div>
        <Navbar.Toggle
          id="toggleIdButton"
          aria-controls="navbarScroll"
          className="button-mo"
        />
        <Navbar.Collapse id="navbarScroll" className="rounded-bottom ">
          <Nav
            className="searchNav"
            style={{ maxHeight: "247px" }}
            navbarScroll
          >
            <ul className="links_list me-5P" onClick={closeToggle}>
              <li>
                <NavLink id="Home" className="neon-button" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink id="Games" className="neon-button" to={"/games"}>
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink id="Genrers" className="neon-button" to={"/genres"}>
                  Genrers
                </NavLink>
              </li>
              <li>
                <NavLink id="About" className="neon-button" to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </Nav>
          <label className="d-flex margin-mo-search">
            <input
              name="search"
              type="text"
              id="navSearch"
              placeholder="Search..."
              className="text-dark form-control me-2"
              onChange={(e) => setSearchOtherPage(e.target.value)}
              value={searchOtherPage}
              onKeyDown={handleSearch}
            />
            <NavLink
              to={searchOtherPage ? `/games/q=${searchOtherPage}` : "/games"}
              className="neon-button"
              type="submit"
              id="submitSearch"
              onClick={closeToggle}
            >
              Search
            </NavLink>
          </label>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
