import React, { useState } from "react";
import "./Cart.css";
import Navbar from "../../components/navbar/Navbar";
import sushi from "../../assets/sushi.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../../redux/cartRedux";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../../redux/cartRedux";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user).currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = cart.products.map((product) => {
    return {
      productId: product._id,
    };
  });
  const createOrder = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, {
        userId: user._id,
        products,
        amount: cart.total,
        address: {
          pin: 671317,
          place: "kasaragod",
          state: "kerala",
          landMark: "near mlp school",
          phone: 9995559990,
        },
      });
      dispatch(clearCart());
      navigate(`/orders/${user._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <div className="homeNavWrapper">
        <div className="homeWrapper">
          <Navbar />
        </div>
      </div>
      <div className="homeWrapper">
        {/* <h2 className="noCartMessage">Your Cart Is Empty</h2> */}
        <h2 className="cartMainTitle">Cart</h2>
        <div className="Cart">
          <div className="cartLeft">
            {cart.products.map((product) => (
              <div className="cartItem" key={product._id}>
                <div className="cartItemLeft">
                  <img src={product.img} alt="" className="cartItrmImg" />

                  {/* <select name="" id="" className="cartItemQty">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                  </select> */}
                </div>
                <div className="cartItemRight">
                  <span className="cartItemTitle">{product.title}</span>
                  <div className="offerTextAndPrice">
                    <span className="offerText"> 50 % off </span>
                    <s className="actualPrice"> ₹ {product.price * 2}</s>
                    <span className="currentPrice"> ₹ {product.price}</span>
                  </div>
                  <span className="deliveryTime">
                    Delivery in {product.time} min
                  </span>
                  <span className="KnowMore">Know More</span>
                </div>
                {/* <button
                  className="CartRemove"
                  onClick={removeCartItem(product._id)}
                >
                  Remove
                </button> */}
              </div>
            ))}
          </div>
          <div className="cartRight">
            <div className="checkout">
              <h5 className="CheckoutTitle">Check Out Now</h5>
              <div className="checkoutItem">
                <span className="checkoutText">Actual Price</span>
                <span className="checkoutValue">{cart.total * 2}</span>
              </div>
              <div className="checkoutItem">
                <span className="checkoutText">Discount</span>
                <span className="checkoutValue">{cart.total}</span>
              </div>
              <div className="checkoutItem">
                <span className="checkoutText">Total</span>
                <span className="checkoutValue">{cart.total}</span>
              </div>
              <button className="checkoutNow" onClick={createOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
