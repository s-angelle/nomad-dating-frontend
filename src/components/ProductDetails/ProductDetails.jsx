import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { removeProduct } from "../../redux/cartRedux";
import { deleteProduct } from "../../utilities/products-service";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { AddCircleOutline, Edit } from '@material-ui/icons';
import { RemoveCircleOutline } from '@material-ui/icons';
import './ProductDetails.css';


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
    <div id='details-div'>
      <img id='product-details-img' src={productDetails.image} alt=""/>
      <h4 id='product-title'>{productDetails.title}</h4>
      <h6 id='price'> ${productDetails.price}</h6>
      <h6 id='product-description'>{productDetails.description}</h6>
      <Button>
        <Edit
        onClick={() =>
          navigate(`/products/${productDetails._id}/edit`, { state: productDetails })
        }
        />
      </Button>
        Edit
      {/* <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button> */}
       <Button id='button'><AddCircleOutline onClick={handleAddClick}/></Button> Add to Cart
       <Button id='button'><RemoveCircleOutline onClick={handleRemoveClick}/></Button> Remove from Cart
    </div>
  );
};

export default ProductDetails;
