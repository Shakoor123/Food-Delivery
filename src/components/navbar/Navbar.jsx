import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import menu from "../../assets/menu.png";

import cart from "../../assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userRedux";
export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user).currentUser;
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutCurrentUser = () => {
    localStorage.removeItem("foodDelivery");
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navLeft">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="navSearch">
          <input type="text" className="navinput" />
          <img src={search} alt="" className="navSearchIcon" />
        </div>
      </div>
      <div className="navRight">
        <div className="navmenu">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span className="navmenuItem">Restaurants</span>
          </Link>
          <span className="navmenuItem" onClick={logoutCurrentUser}>
            Log Out
          </span>
          <Link to={`/orders/${user?._id}`} style={{ textDecoration: "none" }}>
            <span className="navmenuItem">My orders</span>
          </Link>
        </div>
        {menuOpen && (
          <div className="navmenu" id="navmenu">
            {menuOpen && (
              <span
                className="x"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                X
              </span>
            )}

            <Link to={"/"} style={{ textDecoration: "none" }}>
              <span className="navmenuItem">Restaurants</span>
            </Link>
            <span className="navmenuItem" onClick={logoutCurrentUser}>
              Log Out
            </span>
            <Link
              to={`/orders/${user?._id}`}
              style={{ textDecoration: "none" }}
            >
              <span className="navmenuItem">My orders</span>
            </Link>
          </div>
        )}
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <div className="cart">
            <img src={cart} alt="" className="cartIcon" />
            {quantity > 0 && <span className="cartCount">{quantity}</span>}
          </div>
        </Link>
        <img src={profile} alt="" className="profile" />
        <img
          src={menu}
          alt=""
          className="menuIcon"
          onClick={() => {
            setMenuOpen(true);
          }}
        />
      </div>
    </div>
  );
}
