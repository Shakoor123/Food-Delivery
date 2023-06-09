import React, { useState, useEffect } from "react";
import "./Products.css";
import Navbar from "../../components/navbar/Navbar";
import res1 from "../../assets/res1.png";
import cart from "../../assets/cart.png";
import sushi from "../../assets/sushi.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { addRestorent } from "../../redux/restorentRedux";
export default function Products() {
  const [restorents, setRestorents] = useState([]);
  const [products, setProducts] = useState([]);
  const [Rid, setRid] = useState(useSelector((state) => state.restorent).Rid);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getRestorents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/restorent`
        );
        setRestorents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRestorents();
  }, [Rid]);
  useEffect(() => {
    const getRestorentProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/restorent/${Rid}`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRestorentProduct();
  }, [Rid]);
  const changeCurrentRestorent = async (id) => {
    setRid(id);
  };
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
                  className={res._id == Rid ? "resItem resActive" : "resItem"}
                  onClick={() => {
                    changeCurrentRestorent(res._id);
                  }}
                  key={res._id}
                >
                  <img src={res.resImage} alt="" className="resImage" />
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
                <img src={product.img} alt="" className="productImage" />
                <span className="productTitle">{product.title}</span>
                <div className="offerTextAndPrice">
                  <span className="offerText"> 50 % off </span>
                  <s className="actualPrice"> ₹ {product.price * 2}</s>
                  <span className="currentPrice"> ₹ {product.price}</span>
                </div>
                <span className="deliveryTime">
                  Delivery in {product.time} min
                </span>
                <button
                  className="addtoCart"
                  onClick={() => {
                    dispatch(addProduct({ ...product, count: 1 }));
                  }}
                >
                  Add TO Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
