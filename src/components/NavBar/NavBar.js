import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [searchOtherPage, setSearchOtherPage] = useState("");
  return (
    <Navbar fixed="top" className="nav not-selectable " expand="md">
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto me-auto my-2 my-md-0"
            style={{ maxHeight: "247px" }}
            navbarScroll
          >
            <ul className="links_list me-5P">
              <li>
                <NavLink className="neon-button" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="neon-button" to={"/games"}>
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink className="neon-button" to={"/genres"}>
                  Genrers
                </NavLink>
              </li>
              <li>
                <NavLink className="neon-button" to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </Nav>
          <label className="d-flex">
            <input
              name="search"
              type="text"
              id="navSearch"
              placeholder="Search..."
              className="text-dark form-control me-2"
              onChange={(e) => setSearchOtherPage(e.target.value)}
              value={searchOtherPage}
            />
            <NavLink
              to={`/games/q=${searchOtherPage}`}
              className="neon-button"
              type="submit"
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
