import React, { useState, useEffect } from "react";
import "./Products.css";
import Navbar from "../../components/navbar/Navbar";
import res1 from "../../assets/res1.png";
import cart from "../../assets/cart.png";
import sushi from "../../assets/sushi.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Products() {
  const [restorents, setRestorents] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  var { id } = useParams();
  useEffect(() => {
    const getRestorents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/restorent`
        );
        setRestorents(res.data);
        setfilteredRestaurants(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRestorents();
  }, []);
  useEffect(() => {
    const getRestorentProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/restorent/${id}`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRestorentProduct();
  }, [id]);

  return (
    <div className="home">
      <div className="homeNavWrapper">
        <div className="homeWrapper">
          <Navbar />
        </div>
      </div>
      <div className="homeWrapper">
        <h2 className="cartMainTitle">Products</h2>
        <div className="products">
          <div className="productLeft">
            <div className="resWrapper">
              {restorents.map((res) => (
                <div
                  className={res._id == id ? "resItem resActive" : "resItem"}
                  onClick={() => {
                    id = res._id;
                  }}
                  key={res._id}
                >
                  <img src={res1} alt="" className="resImage" />
                  <span className="resTitle">{res.name}</span>
                  <div className="resCart">
                    <img src={cart} alt="" className="cartImage" />
                    {/* <div className="resCartCout">2</div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="productsRight">
            {products.map((product) => (
              <div className="singleProduct" key={product._id}>
                <img src={sushi} alt="" className="productImage" />
                <span className="productTitle">{product.title}</span>
                <div className="offerTextAndPrice">
                  <span className="offerText"> 50 % off </span>
                  <s className="actualPrice"> ₹ {product.price * 2}</s>
                  <span className="currentPrice"> ₹ {product.price}</span>
                </div>
                <span className="deliveryTime">
                  Delivery in {product.time} min
                </span>
                <button className="addtoCart">Add TO Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
