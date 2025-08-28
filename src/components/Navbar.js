import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGames } from "../actions/gamesActions";
import logo from "../assets/logo.svg";

const Navbar = ({ selectedOption, setSelectedOption }) => {
  const options = ["Popular", "Latest Released", "Upcoming", "Favorites"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  // theme toggle
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("site-theme") || "dark";
    } catch (e) {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("site-theme", theme);
    } catch (e) {}
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>

      <div className="nav-list">
        <button
          aria-label="menu"
          onClick={() => setOpen((s) => !s)}
          className="nav-button"
          style={{ display: "none" }}
        >
          ☰
        </button>

        <div
          style={{
            display: open ? "flex" : "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          {options.map((option) => (
            <Link to="/" key={option}>
              <button
                className={`nav-button ${
                  option === selectedOption ? "active" : ""
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            </Link>
          ))}
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="nav-button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
