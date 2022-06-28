import { useState, useEffect } from "react";
import { getMovies } from "../../utilities/movies-service";
import { Link, useNavigate } from "react-router-dom";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [bool, setBool] = useState(false)

  const navigate = useNavigate();

  // useEffect below will invoke after every render
  // useEffect(() => {
  //     console.log('helloasdasd')
  // })

  // useEffect below will only run ONCE if the dependency array is empty
  // second arg of useEffect is the dependency array
  // Dependency array can have multiple dependencies. useEffect will listen to changes and will trigger again when a change happens
  useEffect(() => {
    // IIFE - Immediately Invoked Function Expression
    // ()(), we can put an anonymous function inside the first set of parenthesis and the second set of parenthesis will immediately invoke that function
    (async () => {
      const moviesRes = await getMovies();
      setMovies(moviesRes.data);
    })();
  }, []);

  // Why we are using useEffect?
  // To make HTTP request the moment the component loads
  // Use case: We want to use an empty dependency array to prevent multiple requests to the server

  // console.log('MOVIES', movies)
  return (
    <div className="h-100" id="movie-wrapper">
      <Link className="btn btn-primary" to="/movies/create">
        Add Movie
      </Link>

      <div id="movie-container">
        {movies.map((movie) => (
          <div
            className="card"
            id="movie-card"
            key={movie._id}
            onClick={() => navigate(`/movies/${movie._id}`, { state: movie })}
          >
            <img
              src={movie.image}
              className="card-img-top"
              alt={`Movie poster: ${movie.title}`}
              id="movie-poster"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.plot}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <button onClick={() => setBool(true)}>CLICK ME</button> */
}
{
  /* <button onClick={logOut}>LOGOUT</button> */
}
export default Movies;
