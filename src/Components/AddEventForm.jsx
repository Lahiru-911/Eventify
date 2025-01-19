import React, { useState } from "react";
import axios from "axios";

const AddEventForm = ({ onEventAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    price: "",
    image: "",
    month: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    axios
      .post("http://localhost:5000/events", formData)
      .then((response) => {
        onEventAdded(response.data); // Update the parent component with the new event
        setFormData({
          title: "",
          date: "",
          time: "",
          price: "",
          image: "",
          month: "",
        });
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Event</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Event Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Date</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Time</label>
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Month</label>
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Add Event
        </button>
      </div>
    </form>
  );
};

export default AddEventForm;
