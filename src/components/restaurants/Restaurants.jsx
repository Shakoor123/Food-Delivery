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
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Restaurants({ categorieList }) {
  // const restaurants = [
  //   {
  //     id: 0,
  //     name: "Royal Sushi House",
  //     time: "30-40",
  //     price: "32",
  //     cartValue: 0,
  //     resImage: res1,
  //     featured: true,
  //     foodlist: [
  //       {
  //         fid: 0,
  //         fname: "Sushi",
  //         fImg: sushi,
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     name: "Burgers & Pizza",
  //     time: "40-60",
  //     price: "24",
  //     cartValue: 2,
  //     resImage: res2,
  //     featured: true,
  //     foodlist: [
  //       {
  //         fid: 0,
  //         fname: "Burger",
  //         fImg: burger,
  //       },
  //       {
  //         fid: 1,
  //         fname: "Pizza",
  //         fImg: pizza,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Ninja sushi",
  //     time: "20-40",
  //     price: "40",
  //     cartValue: 0,
  //     resImage: res3,
  //     foodlist: [
  //       {
  //         fid: 0,
  //         fname: "Sushi",
  //         fImg: sushi,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Sushi master",
  //     time: "60-70",
  //     price: "49",
  //     cartValue: 0,
  //     resImage: res4,
  //     foodlist: [
  //       {
  //         fid: 0,
  //         fname: "Sushi",
  //         fImg: sushi,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Japanese sushi",
  //     time: "30-50",
  //     price: "104",
  //     cartValue: 0,
  //     resImage: res5,
  //     foodlist: [
  //       {
  //         fid: 0,
  //         fname: "Sushi",
  //         fImg: sushi,
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Kobe",
  //     time: "20-30",
  //     price: "57",
  //     cartValue: 0,
  //     resImage: res6,
  //     foodlist: [
  //       {
  //         fid: 0,
  //         fname: "Sushi",
  //         fImg: sushi,
  //       },
  //     ],
  //   },
  // ];
  const [restorents, setRestorents] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    const getRestorents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/restorent`
        );
        console.log(res.data);
        setRestorents(res.data);
        setfilteredRestaurants(res.data);
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
    console.log("try", filteredRestaurants);
    setfilteredRestaurants(
      !filteredRestaurants.length == 0 ? filteredRestaurants : restorents
    );
  }, [categorieList]);

  return (
    <>
      <h3 className="restoTitle">Nearby restaurants</h3>
      <div className="restaurents">
        {filteredRestaurants.map((res) => (
          <div className="restoItem" key={res._id}>
            <img
              src={
                "https://www.realmobiweb.com/blog/wp-content/uploads/2022/02/Cute-and-Funny-Dessert-Business-Names.jpg"
              }
              alt=""
              className="restoImage"
            />
            <div className="restoMiddle">
              <div className="restoDetails">
                <div className="restoTitleAndPrice">
                  <Link
                    to={`/products/${res._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <span className="restoItemTitle">{res.name}</span>
                  </Link>
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
