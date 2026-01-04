import React, { useState } from "react";
import { useEffect } from 'react';
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  return (
    <div>
      {/* HEADER */}
      <div style={headerStyle}>
        <span>Welcome, {user.name}</span>
        <button onClick={handleLogout} style={logoutBtnStyle}>
          Logout
        </button>
      </div>

      {/* ROLE BASED PAGE */}
      {user.role === "ADMIN" ? <AdminPage /> : <MenuPage />}
    </div>
  );
}

const headerStyle = {
  backgroundColor: "#1976d2",
  color: "white",
  padding: "12px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoutBtnStyle = {
  backgroundColor: "#ff5252",
  border: "none",
  padding: "8px 14px",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

export default App;
