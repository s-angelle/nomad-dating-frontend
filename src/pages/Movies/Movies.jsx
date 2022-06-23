import { useState, useEffect } from "react";
import { getMovies } from '../../utilities/movies-service';
import { logOut } from "../../utilities/users-service";

const Movies = () => {
  // const [bool, setBool] = useState(false)

  // useEffect below will invoke after every render
  // useEffect(() => {
  //     console.log('helloasdasd')
  // })

  // useEffect below will only run ONCE if the dependency array is empty
  // second arg of useEffect is the dependency array
  // Dependency array can have multiple dependencies. useEffect will listen to changes and will trigger again when a change happens
  useEffect(() => {
    console.log("helloasdasd");
    getMovies();
  }, []);

  // Why we are using useEffect?
  // To make HTTP request the moment the component loads
  // Use case: We want to use an empty dependency array to prevent multiple requests to the server

  return (
    <div>
      THIS IS OUR MOVIE PAGE
      {/* <button onClick={() => setBool(true)}>CLICK ME</button> */}
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
};

export default Movies;
