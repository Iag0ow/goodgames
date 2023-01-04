import "./Game.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Description from "../../components/Information/Description";
import Requeriments from "../../components/Information/Requeriments";
import Info from "../../components/Information/Info";
const Game = () => {
  const [information, setInformation] = useState("Description");
  const { id } = useParams();
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const { data: game } = useFetch(url);
  return (
    <div>
      <div className="home start text-white backGroundGameColor">
        <Container className="index">
          <div className="row text-center d-flex justify-content-center index">
            <h1 className="display-5 fw-bold ">{game && game.title}</h1>
            <p className="ms-1">Released: {game && game.release_date}</p>
            <div className="col-md-8 mt-4 border height d-flex flex-column ">
              <ul className="links_list links_list-mo ms-4 align-self-center not-selectable">
                <li>
                  <NavLink
                    className="neon-button ms-2"
                    onClick={() => setInformation("Description")}
                  >
                    Description
                  </NavLink>
                </li>
                <li>
                  {(game &&
                    game.hasOwnProperty("minimum_system_requirements") !==
                      true) ||
                  (game && game.minimum_system_requirements.os === null) ? (
                    ""
                  ) : (
                    <NavLink
                      className="neon-button"
                      onClick={() => setInformation("Requeriments")}
                    >
                      Requeriments
                    </NavLink>
                  )}
                </li>
                <li>
                  <NavLink
                    className="neon-button"
                    onClick={() => setInformation("Info")}
                  >
                    Information
                  </NavLink>
                </li>
              </ul>
              <div className="col-md-7 align-self-center ms-3 ">
                {information === "Description" && <Description />}
                {information === "Requeriments" && <Requeriments />}
                {information === "Info" && <Info />}
              </div>
            </div>
          </div>
          {game && game.screenshots.hasOwnProperty("0") === true ? (
            <Carousel className="mt-5 bord">
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-mo "
                  src={game && game.screenshots[0].image}
                  alt="First img not found"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              {game && game.screenshots.hasOwnProperty("1") === true ? (
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-mo"
                    src={game && game.screenshots[1].image}
                    alt="Second img not found"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              ) : (
                ""
              )}
              {game && game.screenshots.hasOwnProperty("2") === true ? (
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-mo"
                    src={game && game.screenshots[2].image}
                    alt="Third img not found"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              ) : (
                ""
              )}
            </Carousel>
          ) : (
            ""
          )}
        </Container>
      </div>
    </div>
  );
};

export default Game;
