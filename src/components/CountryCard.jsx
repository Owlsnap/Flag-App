import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./Darkmode";

export default function CountryCard({ country }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Link
      to={country.cca3}
      key={country.cca3}
      className="CountryCard-container"
      style={{
        backgroundColor: darkMode ? "#2B3844" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <img src={country.flags.png} alt="flag" id="flag" />
      <h2>{country.name.common}</h2>
      <div className="CountryCard-container-info">
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital && country.capital[0]}
        </p>
      </div>
    </Link>
  );
}
