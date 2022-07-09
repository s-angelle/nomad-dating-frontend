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
      <Link className="btn btn-primary" to="/products/create">
        Add product
      </Link>
      <div id="product-container">
        {products.sort((a, b) => a.title.localeCompare(b.title)).map((product) => (
          <div
            className="card"
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
              <p className="card-text"> ${product.price}</p>
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
