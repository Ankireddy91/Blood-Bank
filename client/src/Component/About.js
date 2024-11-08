import React from "react";
import img1 from "../img/g1.webp";
import img2 from "../img/g3.webp";
import img3 from "../img/g4.webp";

const About = () => {
  // Define inline styles as JavaScript objects
  const styles = {
    container: {
      marginTop: "30px",
      marginBottom: "40px",
      display: "flex",
      justifyContent: "space-around",
    },
    card: {
      border: "none",
      borderRadius: "15px",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
    },
    img: {
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      height: "200px",
      objectFit: "cover",
    },
    cardBody: {
      padding: "20px",
      textAlign: "center",
    },
    title: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "10px",
    },
    text: {
      fontSize: "1rem",
      color: "#666",
    },
    button: {
      backgroundColor: "#ff6363",
      border: "none",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "5px",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#e55656",
    },
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={styles.container}>
      {[{ title: "Compassion", img: img1, text: "We are driven by a deep commitment to caring for others and making a positive impact in our communities." },
        { title: "Safety", img: img2, text: "We adhere to the highest standards in blood collection and testing to ensure the safety of both donors and recipients." },
        { title: "Community", img: img3, text: "We believe in the power of collective action and work to inspire a culture of generosity and solidarity." }]
        .map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100" style={styles.card}>
              <img src={item.img} className="card-img-top" style={styles.img} alt={item.title} />
              <div className="card-body" style={styles.cardBody}>
                <h5 style={styles.title}>{item.title}</h5>
                <p style={styles.text}>{item.text}</p>
                <button
                  type="button"
                  style={{ ...styles.button }}
                  onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                  onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                >
                  Read more..
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
