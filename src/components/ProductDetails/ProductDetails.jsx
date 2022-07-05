import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../utilities/products-service";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productDetails = location.state;

  // console.log(location.state)

  // console.log(location)

  const handleDelete = async () => {
    try {
      const res = await deleteProduct(productDetails._id);
      if (res.status === 200) navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <img src={productDetails.image} alt="" />
      <p>Title: {productDetails.title}</p>
      <p>Price: {productDetails.price}</p>
      <button
        className="btn btn-primary"
        onClick={() =>
          navigate(`/products/${productDetails._id}/edit`, { state: productDetails })
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

export default ProductDetails;
