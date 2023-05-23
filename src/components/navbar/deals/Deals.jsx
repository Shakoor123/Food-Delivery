import React from "react";
import "./Deals.css";
import deal01 from "../../../assets/deal01.png";
import deal02 from "../../../assets/deal02.png";

export default function Deals() {
  return (
    <div className="deals">
      <img src={deal01} alt="" className="dealImage" />
      <img src={deal02} alt="" className="dealImage" />
    </div>
  );
}
