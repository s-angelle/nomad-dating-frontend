import { useState } from "react";
import * as productsService from "../../utilities/products-service";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.css";

const CreateProduct = () => {
  const [productDetails, setProductDetails] = useState({
    image: "",
    title: "",
    price: 0,
    description: "",
    inStock: true,
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

  return (
    <form className="row g-3" id="update-product-form" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="inputTitle4" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="inputTitle4"
          name="title"
          onChange={handleChange}
          value={productDetails.title}
        />
        <div id="price-div" className="col-md-3">
          <label htmlFor="inputGenre4" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="inputGenre4"
            name="price"
            onChange={handleChange}
            value={productDetails.price}
          />
        </div>
      </div>
      <div id="description-div" className="col-12">
        <label htmlFor="inputPlot" className="form-label">
          Description:
        </label>
        <textarea
          rows="5"
          cols="60"
          id="description"
          name="description"
          type="text"
          className="form-control"
          placeholder="Product description..."
          onChange={handleChange}
          value={productDetails.description}
        ></textarea>
      </div>

      <div className="col-md-6">
        <label htmlFor="inputImage" className="form-label">
          Image:
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

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Create Product
        </button>
      </div>
    </form>
  );
};

export default CreateProduct;
