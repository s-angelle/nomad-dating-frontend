import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as profilesService from "../../utilities/profiles-service";

const UpdateProfileForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const profile = location.state;

  const [profileDetails, setProfileDetails] = useState(profile);

  // console.log(location.state)

  const handleChange = (e) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await profilesService.updateProfile(profileDetails);
      // console.log(res)
      if (res.status === 200)
        navigate(`/profiles/${profileDetails.id}`, { state: profileDetails });
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(movieDetails)
  return (
    <form className="row g-3" id="create-movie-form" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="inputTitle4" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="inputTitle4"
          name="title"
          onChange={handleChange}
          value={profileDetails.title}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="inputGenre4" className="form-label">
          Genre
        </label>
        <input
          type="text"
          className="form-control"
          id="inputGenre4"
          name="genre"
          onChange={handleChange}
          value={profileDetails.genre}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="inputGenre4" className="form-label">
          Year
        </label>
        <input
          type="number"
          className="form-control"
          id="inputGenre4"
          name="year"
          onChange={handleChange}
          value={profileDetails.year}
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputPlot" className="form-label">
          Plot
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPlot"
          placeholder="Profile description..."
          name="plot"
          onChange={handleChange}
          value={profileDetails.plot}
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
        <label htmlFor="inputContentRating" className="form-label">
          Content Rating
        </label>
        <input
          type="text"
          className="form-control"
          id="inputContentRating"
          name="contentRating"
          onChange={handleChange}
          value={profileDetails.contentRating}
        />
      </div>

      <div className="col-md-2">
        <label htmlFor="inputIMDBrating" className="form-label">
          IMDB Rating
        </label>
        <input
          type="number"
          className="form-control"
          id="inputIMDBrating"
          name="imDbRating"
          onChange={handleChange}
          value={profileDetails.imDbRating}
        />
      </div>

      <div className="col-md-2">
        <label htmlFor="inputRuntimeMins" className="form-label">
          Runtime Mins
        </label>
        <input
          type="number"
          className="form-control"
          id="inputRuntimeMins"
          name="runtimeMins"
          onChange={handleChange}
          value={profileDetails.runtimeMins}
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary" >
          Update Profile
        </button>
      </div>
    </form>
  );
};


export default UpdateProfileForm;
