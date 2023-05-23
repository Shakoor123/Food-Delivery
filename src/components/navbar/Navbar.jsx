import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import cart from "../../assets/cart.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navLeft">
        <img src={logo} alt="" className="logo" />
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
        <div className="cart">
          <img src={cart} alt="" className="cartIcon" />
          <span className="cartCount">4</span>
        </div>
        <img src={profile} alt="" className="profile" />
      </div>
    </div>
  );
}
