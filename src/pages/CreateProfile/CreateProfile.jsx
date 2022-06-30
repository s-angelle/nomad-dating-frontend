import { useState } from "react";
import * as profilesService from "../../utilities/profiles-service";
import { useNavigate } from "react-router-dom";
import "./CreateProfile.css";

const CreateProfile = () => {
  // If you don't specifically define object properties in your state, if you set your state anywhere in your code, it will automatically create the state object property for you.
  const [profileDetails, setProfileDetails] = useState({
    name: "",
    age: 0,
    job: "",
    school: "",
    image: "",
    about: "",
    interests: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    profilesService.createProfile(profileDetails);
    navigate("/profiles");
  };

  // console.log(profileDetails)
  return (
    <form className="row g-3" id="create-profile-form" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          name="name"
          onChange={handleChange}
          value={profileDetails.name}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="inputAge" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="inputAge"
          name="age"
          onChange={handleChange}
          value={profileDetails.age}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="inputJob" className="form-label">
          Job
        </label>
        <input
          type="text"
          className="form-control"
          id="inputJob"
          name="job"
          onChange={handleChange}
          value={profileDetails.job}
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputSchool" className="form-label">
          School
        </label>
        <input
          type="text"
          className="form-control"
          id="inputSchool"
          name="school"
          onChange={handleChange}
          value={profileDetails.school}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputImage" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="inputImage"
          name="image"
          onChange={handleChange}
          value={profileDetails.image}
        />
      </div>

      <div className="col-md-2">
        <label htmlFor="inputAbout" className="form-label">
          About You
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAbout"
          name="about"
          onChange={handleChange}
          value={profileDetails.about}
        />
      </div>

      <div className="col-md-2">
        <label htmlFor="inputInterests" className="form-label">
          Your Interests
        </label>
        <input
          type="text"
          className="form-control"
          id="inputInterests"
          name="interests"
          onChange={handleChange}
          value={profileDetails.interests}
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary" >
          Create Profile
        </button>
      </div>
    </form>
  );
};

export default CreateProfile;
