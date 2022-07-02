import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as productsService from "../../utilities/products-service";

const UpdateProductForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  const [productDetails, setProductDetails] = useState(product);

  // console.log(location.state)

  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await productsService.updateProduct(productDetails);
      // console.log(res)
      if (res.status === 200)
        navigate(`/products/${productDetails.id}`, { state: productDetails });
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
          value={productDetails.title}
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
          value={productDetails.price}
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
          placeholder="Product description..."
          name="plot"
          onChange={handleChange}
          value={productDetails.description}
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
          value={productDetails.image}
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary" >
          Update Product
        </button>
      </div>
    </form>
  );
};


export default UpdateProductForm;
