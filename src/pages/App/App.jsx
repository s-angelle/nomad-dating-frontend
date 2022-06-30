import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";
// Pages
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Profiles from "../Profiles/Profiles";
import CreateProfile from "../CreateProfile/CreateProfile";
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
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profiles/create" element={<CreateProfile />} />
            <Route path="/profiles/:id" element={<ProfileDetails />} />
            <Route path="/profiles/:id/edit" element={<UpdateProfileForm />} />
          </>
        )}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
