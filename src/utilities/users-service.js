import axios from "axios";

const BASE_URL = "https://the-wander-shop-v2.onrender.com/api/v1/users";

export const login = async (credentials) => {
  try {
    const token = await axios.post(`${BASE_URL}/login`, credentials);
    // Persist the token using Window localStorage
    localStorage.setItem("token", token.data);

    return getUser();
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async (newUser) => {
  try {
    const token = await axios.post(BASE_URL, newUser);
    localStorage.setItem("token", token.data);
    return token;
  } catch (e) {
    console.log(e);
  }
};

export const getToken = () => {
  // Use property/key/field name to grab token
  const token = localStorage.getItem("token");
  // getItem() return null if there is no key
  if (!token) return null;

  // Parse token, split using the '.' to isolate the payload in order to create logic to handle expiration date
  // After decoding token using atob(), which decodes encrypted base64 string, use JSON.parse() to make the decoded string into a JS object
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    return null;
  }
  // If there is a token, which has not expired
  return token;
};

export const getUser = () => {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};

export const logOut = () => {
  localStorage.removeItem("token");
};
