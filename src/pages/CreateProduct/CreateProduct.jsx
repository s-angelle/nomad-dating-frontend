import { useState } from "react";
import * as productsService from "../../utilities/products-service";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.css";

const CreateProduct = () => {
  // If you don't specifically define object properties in your state, if you set your state anywhere in your code, it will automatically create the state object property for you.
  const [productDetails, setProductDetails] = useState({
    image: "",
    title:"",
    price: 0,
    description: "",
    inStock: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productsService.createProduct(productDetails);
    navigate("/products");
  };

  // console.log(productDetails)
  return (
    <form className="row g-3" id="create-product-form" onSubmit={handleSubmit}>
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
          value={productDetails.image}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputTitle" className="form-label">
         Title
        </label>
        <input
          type="text"
          className="form-control"
          id="inputTitle"
          name="title"
          onChange={handleChange}
          value={productDetails.title}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="inputPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="inputPrice"
          name="price"
          onChange={handleChange}
          value={productDetails.price}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="inputJob" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="inputDescription"
          name="description"
          onChange={handleChange}
          value={productDetails.description}
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="inputAbout" className="form-label">
          In Stock: 
        </label>
        <input
          type="text"
          className="form-control"
          id="inputStock"
          name="stock"
          onChange={handleChange}
          value={productDetails.inStock}
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary" >
          Create Product
        </button>
      </div>
    </form>
  );
};

export default CreateProduct;
