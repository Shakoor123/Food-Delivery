import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Deals from "../../components/navbar/deals/Deals";
import Categories from "../../components/categories/Categories";
export default function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <Navbar />
        <Deals />
        <Categories />
      </div>
    </div>
  );
}
