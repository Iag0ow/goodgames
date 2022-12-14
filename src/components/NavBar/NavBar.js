import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
const NavBar = () => {
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

          <NavLink to={"/popular"}>More</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
