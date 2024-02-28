import { React } from "react";
import "./Input.css";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../Darkmode.jsx";
import { useContext } from "react";

export default function Input({ filteredBySearchQuery }) {
  const location = useLocation();
  const { darkMode } = useContext(DarkModeContext);

  if (
    location.pathname.startsWith("/") &&
    location.pathname.split("/").length > 2
  ) {
    return null;
  }

  return (
    <div
      className="inputfield-container"
      style={{
        backgroundColor: darkMode ? "#202C36" : "#F2F2F2",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className="inputfield">
        <input
          type="text"
          placeholder="Search for a country..."
          id="searchForACountry"
          style={{
            backgroundColor: darkMode ? "#2B3844" : "white",
            color: darkMode ? "white" : "#2B3844",
          }}
          onChange={(e) => {
            filteredBySearchQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
