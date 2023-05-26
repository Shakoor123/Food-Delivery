import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navLeft">
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="navSearch">
          <input type="text" className="navinput" />
          <img src={search} alt="" className="navSearchIcon" />
        </div>
      </div>
      <div className="navRight">
        <div className="navmenu">
          <span className="navmenuItem">Restaurants</span>
          <span className="navmenuItem">Deals</span>
          <span className="navmenuItem">My orders</span>
        </div>
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <div className="cart">
            <img src={cart} alt="" className="cartIcon" />
            <span className="cartCount">4</span>
          </div>
        </Link>
        <img src={profile} alt="" className="profile" />
      </div>
    </div>
  );
}
