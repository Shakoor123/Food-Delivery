import React from "react";
import "./Products.css";
import Navbar from "../../components/navbar/Navbar";
import res1 from "../../assets/res1.png";
import cart from "../../assets/cart.png";
import sushi from "../../assets/sushi.png";

export default function Products() {
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
              <div className="resItem">
                <img src={res1} alt="" className="resImage" />
                <span className="resTitle">Royal Sushi House</span>
                <div className="resCart">
                  <img src={cart} alt="" className="cartImage" />
                  <div className="resCartCout">2</div>
                </div>
              </div>
              <div className="resItem">
                <img src={res1} alt="" className="resImage" />
                <span className="resTitle">Royal Sushi House</span>
                <div className="resCart">
                  <img src={cart} alt="" className="cartImage" />
                  <div className="resCartCout">2</div>
                </div>
              </div>
              <div className="resItem resActive">
                <img src={res1} alt="" className="resImage" />
                <span className="resTitle">Royal Sushi House</span>
                <div className="resCart">
                  <img src={cart} alt="" className="cartImage" />
                  <div className="resCartCout">2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="productsRight">
            <div className="singleProduct">
              <img src={sushi} alt="" className="productImage" />
              <span className="productTitle">Slipper shoue in kerala</span>
              <div className="offerTextAndPrice">
                <span className="offerText"> 50 % off </span>
                <s className="actualPrice"> ₹ 2000</s>
                <span className="currentPrice"> ₹ 1000</span>
              </div>
              <span className="deliveryTime">Delivery in 30-40 min</span>
              <button className="addtoCart">Add TO Cart</button>
            </div>
            <div className="singleProduct">
              <img src={sushi} alt="" className="productImage" />
              <span className="productTitle">Slipper shoue in kerala</span>
              <div className="offerTextAndPrice">
                <span className="offerText"> 50 % off </span>
                <s className="actualPrice"> ₹ 2000</s>
                <span className="currentPrice"> ₹ 1000</span>
              </div>
              <span className="deliveryTime">Delivery in 30-40 min</span>
              <button className="addtoCart">Add TO Cart</button>
            </div>
            <div className="singleProduct">
              <img src={sushi} alt="" className="productImage" />
              <span className="productTitle">Slipper shoue in kerala</span>
              <div className="offerTextAndPrice">
                <span className="offerText"> 50 % off </span>
                <s className="actualPrice"> ₹ 2000</s>
                <span className="currentPrice"> ₹ 1000</span>
              </div>
              <span className="deliveryTime">Delivery in 30-40 min</span>
              <button className="addtoCart">Add TO Cart</button>
            </div>
            <div className="singleProduct">
              <img src={sushi} alt="" className="productImage" />
              <span className="productTitle">Slipper shoue in kerala</span>
              <div className="offerTextAndPrice">
                <span className="offerText"> 50 % off </span>
                <s className="actualPrice"> ₹ 2000</s>
                <span className="currentPrice"> ₹ 1000</span>
              </div>
              <span className="deliveryTime">Delivery in 30-40 min</span>
              <button className="addtoCart">Add TO Cart</button>
            </div>
            <div className="singleProduct">
              <img src={sushi} alt="" className="productImage" />
              <span className="productTitle">Slipper shoue in kerala</span>
              <div className="offerTextAndPrice">
                <span className="offerText"> 50 % off </span>
                <s className="actualPrice"> ₹ 2000</s>
                <span className="currentPrice"> ₹ 1000</span>
              </div>
              <span className="deliveryTime">Delivery in 30-40 min</span>
              <button className="addtoCart">Add TO Cart</button>
            </div>
            <div className="singleProduct">
              <img src={sushi} alt="" className="productImage" />
              <span className="productTitle">Slipper shoue in kerala</span>
              <div className="offerTextAndPrice">
                <span className="offerText"> 50 % off </span>
                <s className="actualPrice"> ₹ 2000</s>
                <span className="currentPrice"> ₹ 1000</span>
              </div>
              <span className="deliveryTime">Delivery in 30-40 min</span>
              <button className="addtoCart">Add TO Cart</button>
            </div>
            <div className="singleProduct">
              <img src={sushi} alt="" className="productImage" />
              <span className="productTitle">Slipper shoue in kerala</span>
              <div className="offerTextAndPrice">
                <span className="offerText"> 50 % off </span>
                <s className="actualPrice"> ₹ 2000</s>
                <span className="currentPrice"> ₹ 1000</span>
              </div>
              <span className="deliveryTime">Delivery in 30-40 min</span>
              <button className="addtoCart">Add TO Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
