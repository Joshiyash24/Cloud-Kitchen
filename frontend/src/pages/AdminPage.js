import React, { useEffect, useState } from "react";
import "./AdminPage.css";

function AdminPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch all orders from backend
    fetch("http://localhost:8080/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin Dashboard</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Items / Food</th>
            <th>Total Price</th>
            <th>Order Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.items || order.foodName}</td>
              <td>₹{order.totalPrice || order.price}</td>
              <td>
                {order.orderTime
                  ? new Date(order.orderTime).toLocaleString()
                  : ""}
              </td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
