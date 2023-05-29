import React, { useEffect } from "react";
import "./Restaurants.css";
import sushi from "../../assets/sushi.png";
import res1 from "../../assets/res1.png";
import res2 from "../../assets/res2.png";
import res3 from "../../assets/res3.png";
import res4 from "../../assets/res4.png";
import res5 from "../../assets/res5.png";
import res6 from "../../assets/res6.png";

import clock from "../../assets/clock.png";
import cake from "../../assets/cake.png";
import cart from "../../assets/cart.png";
import burger from "../../assets/burger.png";
import pizza from "../../assets/pizza.png";
import bbq from "../../assets/meat.png";
import vegan from "../../assets/broccoli.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRestorent } from "../../redux/restorentRedux";
export default function Restaurants({ categorieList }) {
  const [restorents, setRestorents] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectRestorent = (id) => {
    dispatch(addRestorent(id));
    navigate("/products");
  };
  useEffect(() => {
    const getRestorents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/restorent`
        );
        setfilteredRestaurants(res.data);
        setRestorents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRestorents();
  }, []);
  useEffect(() => {
    const filteredRestaurants = restorents.filter((restaurant) => {
      return restaurant.categories.some((category) =>
        categorieList.includes(category)
      );
    });
    setfilteredRestaurants(
      !filteredRestaurants.length == 0 ? filteredRestaurants : restorents
    );
  }, [categorieList]);

  return (
    <>
      <h3 className="restoTitle">Nearby restaurants</h3>
      <div className="restaurents">
        {filteredRestaurants.map((res) => (
          <div
            className="restoItem"
            key={res._id}
            onClick={() => {
              selectRestorent(res._id);
            }}
          >
            <img src={res.resImage} alt="" className="restoImage" />
            <div className="restoMiddle">
              <div className="restoDetails">
                <div className="restoTitleAndPrice">
                  <span className="restoItemTitle">{res.name}</span>
                  <span className="timeAndPrice">
                    <img src={clock} alt="" className="clock" /> {res.time} min
                    ▪ ${res.price}
                    min sum
                  </span>
                </div>
                <div className="cartWrapper">
                  <img src={cart} alt="" className="cartimage" />
                  {res.cartValue > 0 && (
                    <span className="cartValue">{res.cartValue}</span>
                  )}
                </div>
              </div>
              <div className="foodlists">
                {res.categories.map((food, index) => (
                  <div className="fooditem" key={index}>
                    <img
                      src={
                        (food == "sushi" && sushi) ||
                        (food == "burger" && burger) ||
                        (food == "pizza" && pizza) ||
                        (food == "vegan" && vegan) ||
                        (food == "bbq" && bbq) ||
                        (food == "cake" && cake)
                      }
                      alt=""
                      className="foodImg"
                    />
                    <span className="foodName">{food}</span>
                  </div>
                ))}
              </div>
            </div>
            {res.featured && (
              <div className="featuredDiv">
                <div className="featuredText">FEATURED</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
