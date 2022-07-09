import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { removeProduct } from "../../redux/cartRedux";
import { deleteProduct } from "../../utilities/products-service";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { RemoveCircleOutline } from '@material-ui/icons';
import { Add } from "@material-ui/icons";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();
  const productDetails = location.state;
  const dispatch = useDispatch();

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

  // const handleQuantity = (type) => {
  //   if(type === 'dec') {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1)
  //   }
  // }

  // const handleClick = () => {
  //   // update cart
  //   dispatch(
  //     addProduct({ product: productDetails._id, quantity, price: productDetails.price*quantity })
  //   
  // }

  const handleAddClick = () => {
    // update cart
    dispatch(
      addProduct({ ...productDetails, quantity })
    )
  }

  const handleRemoveClick = () => {
    dispatch(
      removeProduct({...productDetails, quantity})
    )
  }

  return (
    <div>
      <img src={productDetails.image} alt="" />
      <h5>{productDetails.title}</h5>
      <p>{productDetails.description}</p>
      <p> ${productDetails.price}</p>
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
       <Button><AddCircleOutline onClick={handleAddClick}/></Button> Add to Cart
       <Button><RemoveCircleOutline onClick={handleRemoveClick}/></Button> Remove from Cart
    </div>
  );
};

export default ProductDetails;
