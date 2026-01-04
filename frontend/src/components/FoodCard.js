import React from "react";
import "../styles/FoodCard.css";

function FoodCard({ item, onOrder }) {
  return (
    <div className="food-card">
      <h3>{item.name}</h3>
      <p className="price">₹{item.price}</p>
      <p className="desc">{item.description}</p>

      <button onClick={() => onOrder(item)}>
        Order Now 🍔
      </button>
    </div>
  );
}

export default FoodCard;
