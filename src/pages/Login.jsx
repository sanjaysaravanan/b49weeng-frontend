// LoginForm.js
import { useState } from "react";
import "./Login.css";
import { loginUser } from "../crud";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [directToHome, setDirectToHome] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    const data = await loginUser({ email, password });
    if (data.code) {
      // You direct the user to the home page
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userDetails", JSON.stringify(data.userDetails));
      setDirectToHome(true);
    } else {
      // stay in the same page
      alert(data.msg);
    }
  };

  if (directToHome || isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className="form-footer">
          <button type="submit">Login</button>
          <Link to="/register">New user?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
