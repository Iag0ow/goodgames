import { useParams } from "react-router-dom";
import { GetById } from "../../hooks/useData";
const Requeriments = () => {
  const { id } = useParams();
  const { data: game } = GetById(id);
  return (
    <>
      <div className="mt-5 mb-3 none">
        <h1 className="fs-2 mb-4 fw-bold">Requirements:</h1>
        <ul className="none fs-5">
          <li>
            <span className="fw-bold">Plataform: </span>
            {game && game.minimum_system_requirements.os}
          </li>
          <li>
            <span className="fw-bold">Graphics Card: </span>
            {game && game.minimum_system_requirements.graphics}
          </li>
          <li>
            <span className="fw-bold">Ram: </span>
            {game && game.minimum_system_requirements.memory}
          </li>
          <li>
            <span className="fw-bold"> Processor: </span>
            {game && game.minimum_system_requirements.processor}
          </li>
          <li>
            <span className="fw-bold">Storage: </span>
            {game && game.minimum_system_requirements.storage}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Requeriments;
