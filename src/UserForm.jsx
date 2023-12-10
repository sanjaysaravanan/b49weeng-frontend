// UserForm.js
import { useState } from "react";
import PropTypes from "prop-types";
import "./UserForm.css"; // Import the CSS file

const UserForm = ({ createNewUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
    createNewUser(formData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

UserForm.propTypes = {
  createNewUser: PropTypes.func,
};

export default UserForm;
