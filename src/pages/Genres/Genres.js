import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
import ReactPaginate from "react-paginate";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import "./Genres.css";
const Genres = () => {
  const genrers = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];
  const [category, setCategory] = useState("moba");
  const [currentPage, setCurrentPage] = useState(0);
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
  const { data, loading } = useFetch(url);
  const pages = Math.ceil(data && data.length / 16);
  const startIndex = currentPage * 16;
  const endIndex = startIndex + 16;
  const currentItens = data && data.slice(startIndex, endIndex);
  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };
  const upPage = () => {
    window.scrollTo(0, 500);
  };
  const changeActiveButton = (e) => {
    setCategory(e.target.value);
    const category = document.getElementById("category");
    const link = category.getElementsByTagName("button");
    for (let i = 0; i < link.length; i++) {
      if ((link[i].className = "styledButton")) {
        link[i].className = "styledButton";
      } else {
        link[i].className = "styledButton backColor";
      }
    }
    e.target.className = "styledButton backColor";

    setCurrentPage(0);
  };

  return (
    <div>
      <Container>
        <section className="homeSpace">
          <div className="row align-items-md-stretch">
            <div className="col-md-12 lightNing ">
              <div className="h-100 p-5 text-white bg-transparent index not-selectable">
                <h1 className="display-6 mb-2 ">
                  Selected genrer: <span>{category.toUpperCase()}</span>
                </h1>
                <ul id="category">
                  {genrers.map((genrer) => (
                    <button
                      key={genrer}
                      className="styledButton"
                      type="button"
                      value={genrer}
                      onClick={changeActiveButton}
                    >
                      {genrer}
                    </button>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="row tips mb-5">
          {loading && (
            <div className="col-lg-3 col-sm-6 mt-5">
              <div className="align-self-center">
                <NavLink>
                  <Card className="front cardHover" style={{ height: "362px" }}>
                    <Card.Img className="zoom" variant="top" />
                    <Card.Body>
                      <Card.Title>Loading</Card.Title>
                      <Card.Text className="lh-sm">Loading</Card.Text>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </div>
          )}
          {data &&
            category &&
            currentItens.map((game, index) => (
              <div key={index} className="col-lg-3 col-sm-6 mt-5 ">
                <div className="align-self-center ">
                  <NavLink to={`/game/${game.id}`}>
                    <Card
                      className="front cardHover"
                      style={{ height: "362px" }}
                    >
                      <Card.Img
                        className="zoom"
                        variant="top"
                        src={game.thumbnail}
                      />
                      <Card.Body className="lh-sm">
                        <Card.Title>{game.title}</Card.Title>
                        <Card.Text>{game.short_description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </NavLink>
                </div>
              </div>
            ))}
          <div className="d-flex t justify-content-center mt-4 flex-column">
            <button onClick={upPage} className="pageUp">
              <FontAwesomeIcon icon={faCircleChevronUp} className="fa-2xl" />
            </button>
            <p className="align-self-center text-light not-selectable">
              Page Up
            </p>
          </div>
          {loading ? (
            <div className="d-flex justify-content-center mt-3">
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            <div>
              <ReactPaginate
                breakLabel={"..."}
                pageCount={pages}
                onPageChange={handlePageClick}
                containerClassName={
                  "pagination justify-content-center pe-3 mt-4 not-selectable"
                }
                pageClassName={"page-item"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Genres;
