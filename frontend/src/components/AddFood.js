import React, { useState } from "react";
import { addFood } from "../services/FoodService";

function AddFood() {
  const [food, setFood] = useState({
    name: "",
    description: "",
    price: "",
    available: true,
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(food).then(() => {
      alert("Food added successfully");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Food (Admin)</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddFood;