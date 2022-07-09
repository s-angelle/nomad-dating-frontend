import axios from "axios";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
const KEY = "pk_test_51LHtg6AQrp0tnoc0Gl6LC8BgbOqR3VnojnRql2LVLtBuvOa6axJSexNgUmlNHigzzgZ3tA3SxgFka3jAGAObMF3s00ELeWKp6x";

const Pay = () => {
const [stripeToken, setStripeToken] = useState(null);

const onToken = (token) => {
    setStripeToken(token);
  //  console.log(stripeToken);
};
useEffect(() => {
    const makeRequest = async () => {
        try {
           const res = await axios.post('/api/checkout/payment', {
            tokenId: stripeToken.id,
            amount: 2000,
           }
        );
           console.log(res.data);
        } catch (err){
            console.log(err);
        }
      };
      if (stripeToken) makeRequest()
},[stripeToken])

  return (
    <div>
      <StripeCheckout
       name="The Wander Shop"
       image=""
       billingAddress
       shippingAddress
       description="Your total is $20"
       amount={2000}
       token={onToken}
       stripeKey={KEY}>
        <button>Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
