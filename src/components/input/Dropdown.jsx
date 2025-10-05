import React, { useContext } from "react";
import "./Input.css";
import { DarkModeContext } from "../Darkmode.jsx";

function regionArrowDarkmode(darkMode) {
  if (darkMode === true) {
    return "/assets/arrow-down-light.svg";
  } else {
    return "/assets/arrow-down-dark.svg";
  }
}

export default function Dropdown({ handleRegionChange }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className="region-with-arrow"
      style={{
        backgroundColor: darkMode ? "#2B3844" : "White",
        color: darkMode ? "white" : "black",
      }}
    >
      <select
        id="filter-by-region"
        style={{
          backgroundColor: darkMode ? "#2B3844" : "White",
          color: darkMode ? "white" : "black",
        }}
        onChange={(e) => {
          handleRegionChange(e);
        }}
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
      <label htmlFor="filter-by-region">
        <img src={regionArrowDarkmode(darkMode)} alt="arrow" />
      </label>
    </div>
  );
}
