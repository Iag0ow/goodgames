import blackOps from "../../imgs/blackOps.jpg";
import pokemonYello from "../../imgs/1920x1200_Pokemon_Yellow_desktop_mpqlkWX.5fbbf19b.6865d68e.jpg";
import gta from "../../imgs/gta.jpg";
import godOfWar from "../../imgs/thumb-1920-710329.jpg";
import fortnite from "../../imgs/fortnite.jpg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { GetByPopularity } from "../../hooks/useData";
const Home = () => {
  const { data, loading } = GetByPopularity();
  let totalPerPage = 16;
  const widthScreen = window.screen.width;
  if (widthScreen <= 767) {
    totalPerPage = 8;
  }

  return (
    <>
      <section className="container-fluid homeSpace">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 tester margin"
              src={fortnite}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 tester margin"
              src={godOfWar}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 tester margin"
              src={pokemonYello}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 tester margin"
              src={gta}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 tester margin"
              src={blackOps}
              alt="Four slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="container back mb-5 ">
        <div className="row ">
          <div className="col-md-12 d-flex p-0 border-top ">
            <div className="align-self-center b-mo border-bottom mb-3">
              <h1 className="display-6 lh-base mb-3 m-mo">
                Find your favorite games in this site
              </h1>
            </div>
          </div>
        </div>
        <div className="row tips">
          {loading && (
            <div className="col-lg-3 col-sm-6 mt-5">
              <div className="align-self-center">
                <NavLink>
                  <Card className="front cardHover" style={{ height: "362px" }}>
                    <Card.Img className="zoom img" variant="top" />
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
            data.map(
              (game, index) =>
                index < totalPerPage && (
                  <div key={game.id} className="col-lg-3 col-sm-6 mt-5">
                    <div className="align-self-center">
                      <NavLink to={`/game/${game.id}`}>
                        <Card
                          className="front cardHover"
                          style={{ height: "362px" }}
                        >
                          <Card.Img
                            className="zoom img"
                            variant="top"
                            src={game.thumbnail}
                          />
                          <Card.Body>
                            <Card.Title>{game.title}</Card.Title>
                            <Card.Text className="lh-sm">
                              {game.short_description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </NavLink>
                    </div>
                  </div>
                )
            )}
        </div>
      </section>
    </>
  );
};

export default Home;
