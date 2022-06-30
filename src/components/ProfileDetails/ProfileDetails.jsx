import { useLocation, useNavigate } from "react-router-dom";
import { deleteProfile } from "../../utilities/profiles-service";

const ProfileDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profileDetails = location.state;

  // console.log(location.state)

  // console.log(location)

  const handleDelete = async () => {
    try {
      const res = await deleteProfile(profileDetails._id);
      if (res.status === 200) navigate("/profiles");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <img src={profileDetails.image} alt="" />
      <p>Title: {profileDetails.title}</p>
      <p>Content Rating: {profileDetails.contentRating}</p>
      <button
        className="btn btn-primary"
        onClick={() =>
          navigate(`/profiles/${profileDetails._id}/edit`, { state: profileDetails })
        }
      >
        Edit
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ProfileDetails;
