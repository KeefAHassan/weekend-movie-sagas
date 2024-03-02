import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS',payload:id });
  }, [id]);
  const history =useHistory()
  return (
    <div
      className="details"
      style={{ backgroundImage: `url(${details?.movie_poster})` }}
      data-testid="movieDetails"
    >
        <img src={details?.movie_poster} alt="" />
        <div className="overLay"></div>
      <div className="content">
        <div className="texe">
          <h1>{details?.movie_title}</h1> <p>{details?.movie_description}</p>
        </div>
        <div>
          <ul>
            {details?.genres.split().map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
          <button onClick={()=>history.push("/")} data-testid="toList">back to movie list</button>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
