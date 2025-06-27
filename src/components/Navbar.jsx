import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <nav style={{
      padding: "1rem",
      display: "flex",
      gap: "1rem",
      background: theme === "dark" ? "#222" : "#eee",
      color: theme === "dark" ? "#fff" : "#222"
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/help">Help</Link>
      <button onClick={toggleTheme} style={{ marginLeft: "auto" }}>
        Toggle Theme ({theme})
      </button>
    </nav>
  );
}