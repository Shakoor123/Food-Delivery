import React from "react";
import "./Deals.css";
import deal01 from "../../../assets/deal01.png";
import deal02 from "../../../assets/deal02.png";

export default function Deals() {
  return (
    <div className="deals">
      <div className="dealItem">
        <div className="dealLeft">
          <img src={deal01} alt="" className="dealImg" />
        </div>
        <div className="dealRight">
          <div className="dealTop">
            <span className="dealTitle">All deserts</span>
            <span className="dealPersentage">20% OFF</span>
          </div>
          <div className="dealBottom">
            <span className="dealCategory">Deserty</span>
          </div>
        </div>
      </div>
      <div className="dealItem2">
        <div className="dealLeft">
          <img src={deal02} alt="" className="dealImg" />
        </div>
        <div className="dealRight">
          <div className="dealTop">
            <span className="dealTitle">Big Burgers</span>
            <span className="dealPersentage2">50% OFF</span>
          </div>
          <div className="dealBottom">
            <span className="dealCategory">Fooddies</span>
          </div>
        </div>
      </div>
    </div>
  );
}
