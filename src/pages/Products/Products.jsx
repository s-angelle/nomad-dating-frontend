import { useState, useEffect } from "react";
import { getProducts } from "../../utilities/products-service";
import { Link, useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const productsRes = await getProducts();
      setProducts(productsRes.data);
    })();
  }, []);

  return (
    <div className="h-100" id="product-wrapper">
      <h2>Check Out Our Adventures</h2>
      <Link className="btn btn-light" id='add-product-btn'to="/products/create">
        Add an Adventure
      </Link>
      <div id="product-container">
        {products.sort((a, b) => a.title.localeCompare(b.title)).map((product) => (
          <div
            className="card zoom-box"
            id="product-card"
            key={product._id}
            onClick={() => navigate(`/products/${product._id}`, { state: product })}
          >
            <img
              src={product.image}
              className="card-img-top"
              alt={`product poster: ${product.title}`}
              id="product-poster"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-text"> ${product.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <button onClick={() => setBool(true)}>CLICK ME</button> */
}
{
  /* <button onClick={logOut}>LOGOUT</button> */
}
export default Products;
