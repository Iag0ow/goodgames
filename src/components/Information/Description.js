import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ShowMoreText from "react-show-more-text";
const Description = () => {
  const { id } = useParams();
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const { data: game, loading } = useFetch(url);
  return (
    <>
      {loading && (
        <div className="d-flex w-100 mt-4 preLoading align-items-center justify-content-center">
          <h1 className="display-4">Loading...</h1>
        </div>
      )}
      <img
        className="d-block w-100 mt-4 border scaled"
        src={game && game.thumbnail}
        alt="First slide"
      />
      <h1 className="mt-5 mb-3">
        {loading && <p>Loading...</p>}
        <ShowMoreText
          lines={5}
          className="content-css"
          anchorClass="show-more-less-clickable"
          expanded={false}
          width={400}
          truncatedEndingComponent={("...", (<br />))}
        >
          {game && game.description}
        </ShowMoreText>
      </h1>
    </>
  );
};

export default Description;
