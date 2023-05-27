import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Deals from "../../components/navbar/deals/Deals";
import Categories from "../../components/categories/Categories";
import Restaurants from "../../components/restaurants/Restaurants";
import { useState, useEffect } from "react";
export default function Home() {
  const [cats, setCats] = useState([]);
  const [categorieList, setCategorieList] = useState([]);
  useEffect(() => {
    const numberToText = (number) => {
      switch (number) {
        case 0:
          return "pizza";
        case 1:
          return "burger";
        case 2:
          return "bbq";
        case 3:
          return "sushi";
        case 4:
          return "vegan";
        case 5:
          return "cake";
        default:
          return "unknown";
      }
    };

    const texts = cats.map((cat) => numberToText(cat));
    setCategorieList(texts);
  }, [cats]);
  return (
    <div className="home">
      <div className="homeNavWrapper">
        <div className="homeWrapper">
          <Navbar />
        </div>
      </div>
      <div className="homeWrapper">
        <Deals />
        <Categories setCats={setCats} />
        <Restaurants categorieList={categorieList} />
      </div>
    </div>
  );
}
