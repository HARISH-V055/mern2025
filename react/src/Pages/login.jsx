import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Print to the console
    console.log("Username:", form.username);
    console.log("Password:", form.password);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: "2rem auto", padding: 24, borderRadius: 8, boxShadow: "0 2px 8px #ccc" }}>
      <h2>Login</h2>
      <div style={{ marginBottom: 16 }}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
      </div>
      <button type="submit" style={{ width: "100%", padding: 10, background: "#007bff", color: "#fff", border: "none", borderRadius: 4 }}>
        Login
      </button>
    </form>
  );
};

export default Login;