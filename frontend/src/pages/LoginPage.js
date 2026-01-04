import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAdmin = name.toLowerCase() === "admin";

  const handleLogin = (e) => {
    e.preventDefault();

    let user;

    if (isAdmin) {
      if (password !== "admin123") {
        alert("Wrong password");
        return;
      }
      user = { name, role: "ADMIN" };
    } else {
      user = { name, role: "USER" };
    }

    // ✅ Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    onLogin(user);
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Cloud Kitchen Login</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {isAdmin && (
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
