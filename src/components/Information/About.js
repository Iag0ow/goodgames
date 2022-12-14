import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const About = () => {
  const { id } = useParams();
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const { data: game } = useFetch(url);
  return (
    <div>
      <h1>{game && game.plataform}</h1>
    </div>
  );
};

export default About;
