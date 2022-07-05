import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import UpdateProductForm from "../../components/UpdateProductForm/UpdateProductForm";
// Pages
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Products from "../Products/Products";
import CreateProduct from "../CreateProduct/CreateProduct";
import Cart from "../Cart/Cart";
import Pay from "../Pay/Pay";
import Success from "../Success/Success";
import StripeCheckout from 'react-stripe-checkout';
// Services
import * as usersService from "../../utilities/users-service";
// CSS
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (usersService.getToken()) setUser(usersService.getUser());
  }, []);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} logOut={usersService.logOut} />

      {/* client-side route that renders the component instance if the path matches the url in the address bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        {user && (
          <>
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id/edit" element={<UpdateProductForm />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/pay" element={<Pay />}/>
            <Route path="/success" element={<Success />} />
          </>
        )}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
