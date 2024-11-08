import axios from "axios";
import React, { useEffect, useState } from "react";

const DonerList = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/collectData")
      .then((res) => setRows(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  // Inline CSS for styling
  const styles = {
    container: {
      marginTop: "50px",
      padding: "20px",
      maxWidth: "800px",
      margin: "auto",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px",
      textAlign: "left",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "left",
      backgroundColor: "#fff",
    },
    rowOdd: {
      backgroundColor: "#f2f2f2",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Donor List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th} scope="col">Sr. No.</th>
            <th style={styles.th} scope="col">Name</th>
            <th style={styles.th} scope="col">Blood Group</th>
            <th style={styles.th} scope="col">Date</th>
            <th style={styles.th} scope="col">Gender</th>
            <th style={styles.th} scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? {} : styles.rowOdd}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{item?.name}</td>
              <td style={styles.td}>{item?.bloodgroup}</td>
              <td style={styles.td}>{item?.date}</td>
              <td style={styles.td}>{item?.gender}</td>
              <td style={styles.td}>{item?.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonerList;
