import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Doner = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const { bloodGroup, donationDate, donorName, gender, location, email } =
      formJson;

    axios
      .put("http://localhost:8001/createData", {
        bloodGroup,
        donationDate,
        donorName,
        gender,
        location,
        email,
      })
      .then((res) => {
        setMessage(res?.data?.msg);
        if (res?.data?.success) {
          navigate("/DonerList");
        }
      })
      .catch((err) => console.log(err));
  };

  // Inline CSS for styling
  const styles = {
    container: {
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",
    },
    card: {
      maxWidth: "600px",
      width: "100%",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    formLabel: {
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ced4da",
      marginBottom: "10px",
    },
    select: {
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ced4da",
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "15px",
    },
    message: {
      textAlign: "center",
      color: "green",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Blood Donor Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Donor Name */}
          <div className="mb-3">
            <label htmlFor="donorName" style={styles.formLabel}>
              Donor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="donorName"
              name="donorName"
              placeholder="Enter donor name"
              required
              style={styles.input}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" style={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              style={styles.input}
            />
          </div>

          {/* Blood Group */}
          <div className="mb-3">
            <label htmlFor="bloodGroup" style={styles.formLabel}>
              Blood Group
            </label>
            <select
              className="form-select"
              id="bloodGroup"
              name="bloodGroup"
              required
              style={styles.select}
            >
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Donation Date */}
          <div className="mb-3">
            <label htmlFor="donationDate" style={styles.formLabel}>
              Donation Date
            </label>
            <input
              type="date"
              className="form-control"
              id="donationDate"
              name="donationDate"
              required
              style={styles.input}
            />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="location" style={styles.formLabel}>
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              placeholder="Enter location"
              required
              style={styles.input}
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label style={styles.formLabel}>Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  required
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  required
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  required
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default Doner;
