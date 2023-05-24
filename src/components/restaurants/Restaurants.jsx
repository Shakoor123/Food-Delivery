import React from "react";
import "./Restaurants.css";
import sushi from "../../assets/sushi.png";
import res1 from "../../assets/res1.png";
import res2 from "../../assets/res2.png";
import res3 from "../../assets/res3.png";
import res4 from "../../assets/res4.png";
import res5 from "../../assets/res5.png";
import res6 from "../../assets/res6.png";

import clock from "../../assets/clock.png";
import cart from "../../assets/cart.png";
import burger from "../../assets/burger.png";
import pizza from "../../assets/pizza.png";

export default function Restaurants() {
  const restaurants = [
    {
      id: 0,
      name: "Royal Sushi House",
      time: "30-40",
      price: "32",
      cartValue: 0,
      resImage: res1,
      featured: true,
      foodlist: [
        {
          fid: 0,
          fname: "Sushi",
          fImg: sushi,
        },
      ],
    },
    {
      id: 1,
      name: "Burgers & Pizza",
      time: "40-60",
      price: "24",
      cartValue: 2,
      resImage: res2,
      featured: true,
      foodlist: [
        {
          fid: 0,
          fname: "Burger",
          fImg: burger,
        },
        {
          fid: 1,
          fname: "Pizza",
          fImg: pizza,
        },
      ],
    },
    {
      id: 2,
      name: "Ninja sushi",
      time: "20-40",
      price: "40",
      cartValue: 0,
      resImage: res3,
      foodlist: [
        {
          fid: 0,
          fname: "Sushi",
          fImg: sushi,
        },
      ],
    },
    {
      id: 3,
      name: "Sushi master",
      time: "60-70",
      price: "49",
      cartValue: 0,
      resImage: res4,
      foodlist: [
        {
          fid: 0,
          fname: "Sushi",
          fImg: sushi,
        },
      ],
    },
    {
      id: 4,
      name: "Japanese sushi",
      time: "30-50",
      price: "104",
      cartValue: 0,
      resImage: res5,
      foodlist: [
        {
          fid: 0,
          fname: "Sushi",
          fImg: sushi,
        },
      ],
    },
    {
      id: 5,
      name: "Kobe",
      time: "20-30",
      price: "57",
      cartValue: 0,
      resImage: res6,
      foodlist: [
        {
          fid: 0,
          fname: "Sushi",
          fImg: sushi,
        },
      ],
    },
  ];
  return (
    <>
      <h3 className="restoTitle">Nearby restaurants</h3>
      <div className="restaurents">
        {restaurants.map((res) => (
          <div className="restoItem" key={res.id}>
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
                {res.foodlist.map((food) => (
                  <div className="fooditem" key={food.fid}>
                    <img src={food.fImg} alt="" className="foodImg" />
                    <span className="foodName">{food.fname}</span>
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
