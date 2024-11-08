import React from 'react';

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    alert('Thank you for subscribing!');
  };

  const styles = {
    footer: {
      backgroundColor: "#2c2f33",
      color: "#e8e9eb",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    container: {
      maxWidth: "800px",
      margin: "auto",
    },
    title: {
      color: "#ff5c5c",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    hr: {
      width: '60px',
      backgroundColor: '#ff5c5c',
      height: '2px',
      margin: "10px auto",
    },
    button: {
      backgroundColor: "#ff5c5c",
      borderColor: "#ff5c5c",
      color: "white",
    },
    input: {
      fontFamily: "inherit",
      padding: "10px",
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "4px",
      border: "1px solid #ccc",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.container}>
        {/* Section: Newsletter */}
        <section>
          <form onSubmit={handleSubscribe} className="text-center">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-auto">
                <p className="pt-2" style={{ color: "#ff5c5c", fontWeight: "600" }}>
                  Sign up for our newsletter
                </p>
              </div>
              <div className="col-md-5 col-12">
                <input 
                  type="email" 
                  id="form5Example26" 
                  className="form-control" 
                  style={styles.input}
                  placeholder="Enter your email"
                  required 
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn" style={styles.button}>
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Section: Blood Donation */}
        <section className="text-center mt-4">
          <h5 style={styles.title}>Blood Donation</h5>
          <hr style={styles.hr} />
          <p>
            Donate blood and save lives! Your contribution can make a significant impact on someone's life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
