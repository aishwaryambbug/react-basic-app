import { useState } from "react";

function ThemeCard({ title }) {
  const [darkMode, setDarkMode] = useState(false);

  const cardStyle = {
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    margin: "40px auto",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{darkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeCard;
