import React, { useState, useEffect } from "react";
import axios from "axios";
import boodImg from "./img/BLOOD1.webp";
import bloodimgnew from "./img/BOOLD2.webp";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    address: "",
    phone: "",
    email: ""
  });
  const [appointments, setAppointments] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const slides = [
    {
      src: boodImg,
      label: "Collect Blood",
      description: "Donate blood today and save lives with your single act.",
    },
    {
      src: bloodimgnew,
      label: "Collect Blood",
      description: "Donate blood today and save lives with your single act.",
    },
    {
      src: boodImg,
      label: "Collect Blood",
      description: "Donate blood today and save lives with your single act.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleAppointmentClick = () => {
    setIsFormVisible(true); // Show the form when the button is clicked
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/appointments", formData);
      alert("Appointment submitted successfully!");
      setIsFormVisible(false);
      setFormData({ name: "", fatherName: "", motherName: "", address: "", phone: "", email: "" }); // Clear form data
      fetchAppointments(); // Refresh the appointments list
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("There was an error submitting your appointment.");
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointments");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" style={{ overflow: "hidden", position: "relative" }}>
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <img src={slide.src} className="d-block w-100" alt={slide.label} style={{ height: "100vh", objectFit: "cover", filter: "brightness(70%)" }} />
              <div className="carousel-caption d-md-block" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "30px", borderRadius: "10px", backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", textAlign: "center", maxWidth: "600px" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "whitesmoke", marginBottom: "20px" }}>{slide.description}</h1>
                <button style={{ marginTop: "20px", padding: "10px 25px", backgroundColor: "#FF5C5C", border: "none", borderRadius: "5px", color: "white", cursor: "pointer", fontSize: "1rem" }} onClick={handleAppointmentClick}>
                  Make an Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Appointment Form Section */}
      {isFormVisible && (
        <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "10px", marginTop: "20px" }}>
          <h2>Appointment Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="fatherName" className="form-label">Father's Name</label>
              <input type="text" className="form-control" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="motherName" className="form-label">Mother's Name</label>
              <input type="text" className="form-control" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )}

      {/* Appointments List */}
      <div style={{ marginTop: "20px" }}>
        <h2>Your Appointments</h2>
        <ul className="list-group">
          {appointments.map((appointment, index) => (
            <li key={index} className="list-group-item">
              {appointment.name} - {appointment.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
