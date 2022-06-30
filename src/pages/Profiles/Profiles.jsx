import { useState, useEffect } from "react";
import { getProfiles } from "../../utilities/profiles-service";
import { Link, useNavigate } from "react-router-dom";
import "./Profiles.css";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
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
      const profilesRes = await getProfiles();
      setProfiles(profilesRes.data);
    })();
  }, []);

  // Why we are using useEffect?
  // To make HTTP request the moment the component loads
  // Use case: We want to use an empty dependency array to prevent multiple requests to the server

  // console.log('profileS', profiles)
  return (
    <div className="h-100" id="profile-wrapper">
      <Link className="btn btn-primary" to="/profiles/create">
        Add profile
      </Link>

      <div id="profile-container">
        {profiles.map((profile) => (
          <div
            className="card"
            id="profile-card"
            key={profile._id}
            onClick={() => navigate(`/profiles/${profile._id}`, { state: profile })}
          >
            <img
              src={profile.image}
              className="card-img-top"
              alt={`profile poster: ${profile.name}`}
              id="profile-poster"
            />
            <div className="card-body">
              <h5 className="card-title">{profile.age}</h5>
              <p className="card-text">{profile.about}</p>
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
export default Profiles;
