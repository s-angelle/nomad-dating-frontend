import axios from "axios";
import { getToken } from "./users-service";

const BASE_URL = "http://localhost:8080/api/v1/profiles";

const setOptions = () => {
  return {
    headers: {
      // We are attaching the token to our Authorization header
      //  Prefacing with 'Bearer' is recommended in HTTP specification
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  };
};

export const getProfiles = async () => {
  try {
    const response = await axios.get(BASE_URL, setOptions());
    // console.log(response)
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const createProfile = async (profileDetails) => {
  try {
    const createdProfile= await axios.post(BASE_URL, profileDetails, setOptions());
    return createdProfile;
  } catch (e) {
    console.log(e);
  }
};

export const updateProfile = async (newProfileDetails) => {
  try {
    // console.log(newMovieDetails)
    const updatedProfile = await axios.put(
      `${BASE_URL}/${newProfileDetails._id}`,
      newProfileDetails,
      setOptions()
    );
    return updatedProfile;
  } catch (e) {
    console.log(e);
  }
};

export const deleteProfile = async (id) => {
  try {
    const deletedProfile = await axios.delete(`${BASE_URL}/${id}`, setOptions());
    return deletedProfile;
  } catch (e) {
    console.log(e);
  }
};
