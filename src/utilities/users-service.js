import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/users";

export const login = async (credentials) => {
  try {
    // console.log('users servce', credentials)
    const token = await axios.post(`${BASE_URL}/login`, credentials);

    // console.log(token.data)

    // Persist the token using Window localStorage
    // setItem() first arg is the property name and the second arg is the value
    localStorage.setItem("token", token.data);

    return getUser();
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async (newUser) => {
  try {
    // console.log(newUser)
    // newUser.age = parseInt(newUser.age)
    const token = await axios.post(BASE_URL, newUser);
    localStorage.setItem("token", token.data);
    return token;
  } catch (e) {
    console.log(e);
  }
};

export const getToken = () => {
  // Use property/key/field name to grab our token
  const token = localStorage.getItem("token");
  // getItem() return null if there is no key
  if (!token) return null;
  // console.log('Grabing token', token)

  // Parse our token, split using the '.' to isolate our payload so we can create logic to handle our exp date
  // After we decode our token using atob() which decodes encrypted base64 string, we will use JSON.parse() to make the decoded string into a JS object
  // JWT is encrypted in base64
  const payload = JSON.parse(atob(token.split(".")[1]));
  // console.log(payload)
  // console.log(typeof payload) // string

  // console.log(new Date(Date.now()))
  // console.log(new Date(payload.exp * 1000))
  // JWT's expiration is written in seconds, not milliseconds
  if (payload.exp * 1000 < Date.now()) {
    // payload.exp is higher but when it expires it's greater than the current date
    // Token has expired
    localStorage.removeItem("token");
    return null;
  }

  // If we have a token and not expired
  return token;
};

export const getUser = () => {
  const token = getToken();
  return token ? JSON.parse(Window.atob(token.split(".")[1])).user : null;
};

export const logOut = () => {
  localStorage.removeItem("token");
};
