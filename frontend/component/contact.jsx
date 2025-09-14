import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://portfolio-backend-7rp0.onrender.com/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const res = await axios.post(API_URL, {
        name,
        email,
        Message: message, // must match backend field
      });
      if (res.status === 201) {
        setSuccess("Message sent successfully ✅");
        setname("");
        setemail("");
        setmessage("");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-white text-gray-900 py-12 px-6 md:px-20"
    >
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-widest border-b-4 border-gray-300 inline-block pb-2">
          CONTACT
        </h1>
      </div>
      <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              placeholder="Write your message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Success / Error */}
          {success && (
            <p className="text-green-600 text-center font-medium">{success}</p>
          )}
          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
