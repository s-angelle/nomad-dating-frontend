import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" id="footer">
          <Link to="/"> © 2022 Copyright: The Wander Shop Co</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
