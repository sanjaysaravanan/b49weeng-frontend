// RegisterForm.js
import { useState } from "react";
import "./Register.css";
import { registerUser } from "../crud";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your registration logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("DOB:", dob);
    console.log("Name:", name);
    console.log("Image URL:", imageUrl);
    await registerUser({ email, password, dob, name, imageUrl });
    alert("User Created Successfully, Please Login Now....");
    // Add your registration logic here, like sending a request to a server
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
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

        <label>Date of Birth:</label>
        <input type="date" value={dob} onChange={handleDobChange} required />

        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />

        <label>Image URL:</label>
        <input
          type="url"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
