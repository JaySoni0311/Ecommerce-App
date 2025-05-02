import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { GlobalContext } from "../context/GlobalState";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { cart } = useContext(GlobalContext);
  const { setSelectedGender } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <h2>eSTORE</h2>
      </Link>
      <ul className={`navbar-ul ${isOpen ? "open" : ""}`}>
        <li
          onClick={() => {
            setSelectedGender("Men");
            setIsOpen(false);
             
          }}
        >
          Mens
        </li>
        <li
          onClick={() => {
            setSelectedGender("Women");
            setIsOpen(false);
             
          }}
        >
          Womens
        </li>
        <li>Brands</li>
        <li>Accessories</li>
        <Link to="/cart" onClick={() => setIsOpen(false)}>
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders" onClick={() => setIsOpen(false)}>
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hi, User</button>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu
          size={40}
          color="#747df3;
"
        />
      </div>
    </div>
  );
};

export default Navbar;
