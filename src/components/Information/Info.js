import { useParams } from "react-router-dom";
import { GetById } from "../../hooks/useData";
import "../NavBar/NavBar.css";
const Info = () => {
  const { id } = useParams();
  const { data: game } = GetById(id);
  return (
    <>
      <div className="mt-5 mb-3 none info-text">
        <h1 className="fs-2 mb-4 fw-bold ">Info:</h1>
        <ul className="none fs-5 listStyleNone">
          <li>
            <span className="fw-bold"> Title: </span>
            {game && game.title}
          </li>
          <li>
            <span className="fw-bold">Genre : </span>
            {game && game.genre}
          </li>
          <li>
            <span className="fw-bold">Publisher: </span>
            {game && game.publisher}
          </li>
          <li>
            <span className="fw-bold">Platform: </span>
            {game && game.platform}
          </li>
          <li>
            <span className="fw-bold">Developer: </span>
            {game && game.developer}
          </li>
          <li>
            <span className="fw-bold">Situation : </span>
            {game && game.status}
          </li>
          <li className="width-mo">
            <span className="fw-bold">Play: </span>
            <a href={game && game.game_url}>{game && game.game_url}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info;
