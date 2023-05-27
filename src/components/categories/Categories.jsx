import React from "react";
import "./Categories.css";
import pizza from "../../assets/pizza.png";
import burger from "../../assets/burger.png";
import cake from "../../assets/cake.png";
import meat from "../../assets/meat.png";
import sushi from "../../assets/sushi.png";
import broccoli from "../../assets/broccoli.png";
import { useRef, useState } from "react";
import { useEffect } from "react";

export default function Categories({ setCats }) {
  const [ids, setIds] = useState([]);
  const categories = [
    {
      id: 0,
      name: "Pizza",
      image: pizza,
    },
    {
      id: 1,
      name: "Burger",
      image: burger,
    },
    {
      id: 2,
      name: "BBG",
      image: meat,
    },
    {
      id: 3,
      name: "Sushi",
      image: sushi,
    },
    {
      id: 4,
      name: "Vegan",
      image: broccoli,
    },
    {
      id: 5,
      name: "Desserts",
      image: cake,
    },
  ];
  useEffect(() => {
    setCats(ids);
  }, [ids]);

  return (
    <div className="categories">
      {categories.map((cat) => (
        <div
          className={
            ids.includes(cat.id)
              ? "categoryItem categoryActive"
              : "categoryItem"
          }
          key={cat.id}
          onClick={() => {
            if (ids.includes(cat.id)) {
              // ID already exists, remove it
              const updatedIds = ids.filter(
                (existingId) => existingId !== cat.id
              );
              setIds(updatedIds);
            } else {
              // ID doesn't exist, insert it
              const updatedIds = [...ids, cat.id];
              setIds(updatedIds);
            }
          }}
        >
          <img src={cat.image} alt="" className="categoryImage" />
          <span className="categoryName">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
