import axios from "axios";
import { getToken } from "./users-service";

const BASE_URL = "https://the-wander-shop-v2.onrender.com/api/v1/products";

const setOptions = () => {
  return {
    headers: {
      // Attaching the token to our Authorization header
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  };
};

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL, setOptions());
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const createProduct = async (productDetails) => {
  try {
    const createdProduct = await axios.post(
      BASE_URL,
      productDetails,
      setOptions()
    );
    return createdProduct;
  } catch (e) {
    console.log(e);
  }
};

export const updateProduct = async (newProductDetails) => {
  try {
    const updatedProduct = await axios.put(
      `${BASE_URL}/${newProductDetails._id}`,
      newProductDetails,
      setOptions()
    );
    return updatedProduct;
  } catch (e) {
    console.log(e);
  }
};

export const deleteProduct = async (id) => {
  try {
    const deletedProduct = await axios.delete(
      `${BASE_URL}/${id}`,
      setOptions()
    );
    return deletedProduct;
  } catch (e) {
    console.log(e);
  }
};
