import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../utilities/stripe-service';



const KEY = "pk_test_51LHtg6AQrp0tnoc0Gl6LC8BgbOqR3VnojnRql2LVLtBuvOa6axJSexNgUmlNHigzzgZ3tA3SxgFka3jAGAObMF3s00ELeWKp6x";

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
   
    const quantity = useSelector(state => state.cart.quantity)
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
               const res = await userRequest.post('/checkout/payment', {
                tokenId: stripeToken.id,
                amount: cart.total * 100,
            }
            );
        } catch (err){
            navigate("/success")
            }
          };
         stripeToken && makeRequest()
    },[stripeToken, cart.total, navigate])

    return (
        <div>
            <button>Your Cart ({quantity})</button>
            <button>Continue Shopping</button>
            <StripeCheckout
       name="The Wander Shop"
       image="LOGO"
       billingAddress
       shippingAddress
       description={`Your total is ${cart.total}`}
       amount={cart.total*100}
       token={onToken}
       stripeKey={KEY}>
        <button>Pay Now</button>
      </StripeCheckout>
            <h4>Info</h4>
            {cart.products.map(product => (
                <div> 
               <img src={product.image}/>
                <h5>{product.title}</h5>
                <h6> ${product.price}</h6>
                </div>
                ))
}
                <p> Order Summary</p>
                <p>Subtotal</p>
                $ {cart.total}
        </div>
    );
}

export default Cart;
