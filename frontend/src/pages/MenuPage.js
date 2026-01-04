import React, { useEffect, useState } from "react";
import { getAllFoodItems } from "../services/FoodService";
import "./MenuPage.css";

function MenuPage() {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState("/Images/Owner.jpg");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getAllFoodItems()
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  // ✅ PLACE ORDER (FINAL & CORRECT)
  const placeOrder = (item) => {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user) {
      alert("Please login first");
      return;
    }

    fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.name,          // ✅ simple userId
        customerName: user.name,    // ✅ shown in admin
        items: item.name,
        totalPrice: item.price,
        status: "PLACED",
      }),
    })
      .then(() => alert("Order placed successfully!"))
      .catch(() => alert("Failed to place order"));
  };

  // ✅ VIEW BUTTON
  const viewItem = (item) => {
    setSelectedItem(item);
    const name = item.name.toLowerCase();
    setSelectedImage(
      name.includes("breakfast") ? "/Images/Breakfast.jpg" : "/Images/Meal.jpg"
    );
  };

  return (
    <div className="menu-layout">
      {/* LEFT — MENU */}
      <div className="menu-page">
        <h2 className="menu-title">Menu</h2>

        {items.map((item) => (
          <div key={item.id} className="menu-item">
            <h3>
              {item.name} – ₹{item.price}
            </h3>
            <p>{item.description}</p>

            <button className="order-btn" onClick={() => placeOrder(item)}>
              Place Order
            </button>

            <button className="view-btn" onClick={() => viewItem(item)}>
              View
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT — PREVIEW */}
      <div className="photo-page">
        <h2 className="photo-title">Preview</h2>

        <img src={selectedImage} alt="Food Preview" className="food-photo" />

        {selectedItem ? (
          <p>
            <strong>{selectedItem.name}</strong> is freshly prepared using
            hygienic ingredients.
          </p>
        ) : (
          <div>
            <p>Welcome to our cloud kitchen.</p>
            <p>We provide healthy and delicious breakfast and meal options.</p>
            <p>
              Click <b>View</b> to see menu photos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
