import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import UpdateMovieForm from "../../components/UpdateMovieForm/UpdateMovieForm";
// Pages
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Movies from "../Movies/Movies";
import CreateMovie from "../CreateMovie/CreateMovie";
// Services
import * as usersService from "../../utilities/users-service";
// CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (usersService.getToken()) setUser(usersService.getUser());
  }, []);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} logOut={usersService.logOut} />

      {/* client-side route that renders the component instance if the path matches the url in the address bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        {user && (
          <>
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/create" element={<CreateMovie />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/:id/edit" element={<UpdateMovieForm />} />
          </>
        )}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
