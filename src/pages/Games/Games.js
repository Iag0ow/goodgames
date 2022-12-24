import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
import ReactPaginate from "react-paginate";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import "./Games.css";
const Games = () => {
  const { searchOtherPage } = useParams();
  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };
  const upPage = () => {
    window.scrollTo(0, 0);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(0);
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (searchOtherPage === undefined) {
      setSearch("");
    } else {
      setSearch(searchOtherPage);
      document.getElementById("navSearch").value = "";
    }
  }, [searchOtherPage]);

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
  const { data, loading } = useFetch(url);
  const pages = Math.ceil(data && data.length / 16);
  const startIndex = currentPage * 16;
  const endIndex = startIndex + 16;
  const currentItens = data && data.slice(startIndex, endIndex);
  const lowerSearch = search.toLowerCase();

  const filtered =
    search.length > 0
      ? data &&
        data.filter((find) => find.title.toLowerCase().includes(lowerSearch))
      : currentItens;
  const pagesFiltered = Math.ceil(data && filtered.length / 16);
  const currentFiltered = data && filtered.slice(startIndex, endIndex);
  return (
    <div>
      <Container>
        <section className="homeSpace">
          <div className="row align-items-md-stretch">
            <div className="col-md-12 lightNingSearch">
              <div className="h-100  p-5 bg-transparent index not-selectable">
                <label>
                  <input
                    name="search"
                    type="text"
                    placeholder="Search your game..."
                    className="text-light teste"
                    onChange={handleSearch}
                    value={search}
                  />
                  <span className="focus-border"></span>
                </label>
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
            search.length > 0 &&
            currentFiltered.map((game, index) => (
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
          {data &&
            search.length === 0 &&
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
          {data &&
            search.length === 0 &&
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
          {data && search.length > 0 && currentFiltered.length === 0 && (
            <h1 className="display-5 text-light d-flex justify-content-center">
              Game not found
            </h1>
          )}
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
                pageCount={search.length > 0 ? pagesFiltered : pages}
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

export default Games;
