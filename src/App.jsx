import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <h1>React Functional Components</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </header>

      <main className="content">
        <p>This is my first React app.</p>
      </main>

      <footer className="footer">© 2026 React App</footer>
    </div>
  );
}

export default App;

