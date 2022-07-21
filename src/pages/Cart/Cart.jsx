import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../utilities/stripe-service";
import CompanyLogo from "../../images/Wander-Shop-Co.png";
import "./Cart.css";

const KEY =
  "pk_test_51LHtg6AQrp0tnoc0Gl6LC8BgbOqR3VnojnRql2LVLtBuvOa6axJSexNgUmlNHigzzgZ3tA3SxgFka3jAGAObMF3s00ELeWKp6x";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const quantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
      } catch (err) {
        navigate("/success");
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <div id="cart-item-wrapper">

      <div id="cart-container">
        <h3 id="cart-title">Your Cart ({quantity})</h3>
        {cart.products.map((product) => (
          <div
            className="card"
            id="cart-item-div"
            onClick={() =>
              navigate(`/products/${product._id}`, { state: product })
            }
          >
            <img className="card-img-top" id="cart-image" src={product.image} alt={product.title}/>
            <h5 id="cart-image-title">{product.title}</h5>
            <h6> ${product.price}</h6>
          </div>
        ))}
        
        <div id="summary-div">
          <h3 id="subtotal">Subtotal: $ {cart.total}</h3>{" "}
          <StripeCheckout
            id="checkout"
            name="The Wander Shop"
            image={CompanyLogo}
            billingAddress
            shippingAddress
            description={`Your total is $ ${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button id="pay-btn" className="btn btn-primary">
              Pay
            </button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default Cart;
