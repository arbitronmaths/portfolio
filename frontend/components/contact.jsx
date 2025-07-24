import React, { useState, useEffect } from "react";
import axios from "axios";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:3000/users";

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching weights:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in both Name and E-Mail");
      return;
    }
    try {
      await axios.post(API_URL, { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      alert("You are connected!");
      fetchUsers();
    } catch (err) {
      console.error("Error!!!:", err);
    }
  };

  // Removed handleChange since formData is an array, not an object

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form-container">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#275dca"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M12 3l8 8h-5v8h-6v-8H4z" />
          </svg>
        </a>
        <h2>Contact</h2>
        <form action="/submit" method="POST">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" 
          id="fullname" 
          name="fullname" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />

          <label htmlFor="email">Email</label>
          <input type="email" 
          id="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />

          <label htmlFor="message">Message</label>
          <textarea id="message" 
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required></textarea>

          <div className="btn">
            <button onClick={handleSubmit}>
              Let's Connect <i class="fas fa-link"></i>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
