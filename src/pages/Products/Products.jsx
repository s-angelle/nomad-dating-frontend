import { useState, useEffect } from "react";
import { getProducts } from "../../utilities/products-service";
import { Link, useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [bool, setBool] = useState(false)

  const navigate = useNavigate();

  // useEffect below will invoke after every render
  // useEffect(() => {
  //     console.log('helloasdasd')
  // })

  // useEffect below will only run ONCE if the dependency array is empty
  // second arg of useEffect is the dependency array
  // Dependency array can have multiple dependencies. useEffect will listen to changes and will trigger again when a change happens
  useEffect(() => {
    // IIFE - Immediately Invoked Function Expression
    // ()(), we can put an anonymous function inside the first set of parenthesis and the second set of parenthesis will immediately invoke that function
    (async () => {
      const productsRes = await getProducts();
      setProducts(productsRes.data);
    })();
  }, []);

  // Why we are using useEffect?
  // To make HTTP request the moment the component loads
  // Use case: We want to use an empty dependency array to prevent multiple requests to the server

  // console.log('profileS', profiles)
  return (
    <div className="h-100" id="product-wrapper">
      <Link className="btn btn-primary" to="/products/create">
        Add product
      </Link>

      <div id="product-container">
        {products.map((product) => (
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
              <h5 className="card-title">{product.price}</h5>
              <p className="card-text">{product.description}</p>
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
