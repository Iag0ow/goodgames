import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import Description from "./Description";
import Requeriments from "./Requeriments";
import About from "./About";

import { useState } from "react";
const Information = () => {
  const { id } = useParams();
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const { data: game } = useFetch(url);
  const [information, setInformation] = useState("Description");
  console.log(game);
  return (
    <>
      <div className="row text-center d-flex justify-content-center">
        <h1 className="display-5 fw-bold ">{game && game.title}</h1>
        <p className="ms-1">Realease: {game && game.release_date}</p>
        <div className="col-md-8 mt-4 border height d-flex flex-column">
          <div className="col-md-7  align-self-center">
            <ul className="links_list">
              <li>
                <NavLink
                  className="neon-button ms-2"
                  onClick={() => setInformation("Description")}
                >
                  Description
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="neon-button"
                  onClick={() => setInformation("Requeriments")}
                >
                  Requeriments
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="neon-button"
                  onClick={() => setInformation("About")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="neon-button">Gameplay</NavLink>
              </li>
            </ul>
            {information === "Description" && <Description />}
            {information === "Requeriments" && <Requeriments />}
            {information === "About" && <About />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
