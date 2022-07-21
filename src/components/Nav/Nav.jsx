import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import "./Nav.css";
import CompanyLogo from "../../images/Wander-Shop-Co.png";

const Nav = ({ user, setUser, logOut }) => {
  const handleLogOut = () => {
    setUser(null);
    logOut();
  };

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      <nav className="navbar custom navbar-expand-lg p-3" id="navbar">
        <div className="container-fluid d-flex justify-content-center">
          <Link className="navbar-brand col" to="/">
            <img id="company-logo" src={CompanyLogo} alt='Company Logo' />
          </Link>
          <button
            className="navbar-toggler"
            id="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id="navbar-toggler"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user ? (
              <>

                <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
                  <li className="nav-item mt-2">
                    <Link to="/cart/:id">
                      <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined
                          id="shopping-cart"
                          fontSize="inherit"
                          color="white"
                        />
                      </Badge>
                    </Link>
                  </li>
                  <li className="nav-item mt-1">
                    <Link
                      className="nav-link text-white"
                      id="nav-item"
                      to="/products"
                    >
                      Adventures
                    </Link>
                  </li>
                  <li className="nav-item mt-1">
                    <Link
                      className="nav-link text-white"
                      onClick={handleLogOut}
                      to="/"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mt-2">About Us</li>
                <li className="nav-item mt-2">
                  <Link className="nav-link text-white" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item mt-2">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
