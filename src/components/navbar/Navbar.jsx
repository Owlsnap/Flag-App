import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../../assets/techover-logo-dark.png";
import logoWhite from "../../../assets/techover-logo.png";
import { useLocation, useParams } from "react-router-dom";
import { DarkModeContext, DarkModeToggle } from "../Darkmode.jsx";
import { Link } from "react-router-dom";

function techoverLogoDarkmode() {
  const { darkMode } = useContext(DarkModeContext);

  if (darkMode === false) {
    return <img src={logo} alt="logo" />;
  } else {
    return <img src={logoWhite} alt="logo" />;
  }
}

export default function Navbar() {
  const location = useLocation();
  const { darkMode } = useContext(DarkModeContext);
  const { name } = useParams();
  const navbarStyle = {
    position: location.pathname === name ? "sticky" : "relative",
    backgroundColor: darkMode ? "#2B3844" : "white",
    color: darkMode ? "white" : "black",
  };

  return (
    <div className="Navbar-container" style={navbarStyle}>
      <Link
        to={"/"}
        className="Navbar-app-name"
        style={{ color: darkMode ? "white" : "#2b3844" }}
      >
        <h1 className="flag-app-title">The Flag App</h1>
      </Link>
      <div className="logo">{techoverLogoDarkmode()}</div>
      <div className="Navbar-dark-mode">
        <img src="assets\moon-bordered.svg" alt="moon-light" />
        <DarkModeToggle />
      </div>
    </div>
  );
}
