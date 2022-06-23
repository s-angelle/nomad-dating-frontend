import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
// Pages
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Movies from "../Movies/Movies";
// Services
import * as usersService from "../../utilities/users-service";
// CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (usersService.getToken()) setUser(usersService.getUser());
  }, []);

  console.log("hello", user);
  return (
    <div className="App">
      <Nav user={user} setUser={setUser} logOut={usersService.logOut} />

      {/* client-side route that renders the component instance if the path matches the url in the address bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={user && <Movies />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
