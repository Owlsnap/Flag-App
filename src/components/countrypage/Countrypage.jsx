import React, { useEffect, useState, useContext } from "react";
import "./Countrypage.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DarkModeContext } from "../Darkmode";
import backArrowWhite from "../../../assets/arrow-left.svg";
import backArrowBlack from "../../../assets/arrow-left-dark.svg";

export default function Countrypage() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const foundCountry = data.find((country) => country.cca3 === name);
        setCountry(foundCountry);
      })
      .catch((error) => console.error("Error:", error));
  }, [name]);

  const getBorderCountries = () => {

    if (country && country.borders) {
      const borderCountries = country.borders.map((border) => {
        return (
          <Link
            to={`/${border}`}
            key={border}
            className="border-country-button"
            style={{
              color: darkMode ? "white" : "#2B3844",
              backgroundColor: darkMode ? "#2B3844" : "white",
            }}
          >
            {border}
          </Link>
        );
      });
      return borderCountries;
    } else {
      return <p>None</p>;
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  function backArrowDarkmode() {

    if (darkMode === false) {
      return <img src={backArrowBlack} alt="backArrowBlack" />;
    } else {
      return <img src={backArrowWhite} alt="backArrowWhite" />;
    }
  }

  return (
    <div
      className="Countrypage"
      style={{
        backgroundColor: darkMode ? "#202C36" : "#F2F2F2",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className="Countrypage-container">
        <div className="backButtonFlag-container">
          <button
            className="backButton"
            onClick={() => handleBackClick()}
            style={{
              backgroundColor: darkMode ? "#202C36" : "#F2F2F2",
              color: darkMode ? "white" : "black",
            }}
          >
            {backArrowDarkmode()}
            <p>Back</p>
          </button>
          <div className="Countrypage-container-flag">
            {country && <img src={country.flags.svg} alt="flag" />}
          </div>
        </div>
        <div className="Countrypage-container-info">
          {country && <h2>{country.name.common}</h2>}
          <div className="Countrypage-container-info-details">
            <div className="Countrypage-container-info-details-left">
              <p>
                <span>Native Name: </span>
                {country &&
                country.name.nativeName &&
                typeof country.name.nativeName === "object" &&
                Object.values(country.name.nativeName)[0].common
                  ? Object.values(country.name.nativeName)[0].common
                  : "None"}
              </p>
              <p>
                <span>Population: </span>
                {country && country.population}
              </p>
              <p>
                <span>Region: </span>
                {country && country.region}
              </p>
              <p>
                <span>Capital: </span>
                {country && country.capital ? country.capital : "None"}
              </p>
            </div>
            <div className="Countrypage-container-info-details-right">
              <p>
                <span>Top Level Domain: </span>
                {country && country.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {country &&
                  country.currencies &&
                  typeof country.currencies === "object" &&
                  Object.keys(country.currencies)[0]}
              </p>
              <p>
                <span>Languages: </span>
                {country &&
                  country.languages &&
                  typeof country.languages === "object" &&
                  Object.values(country.languages)[0]}
              </p>
            </div>
          </div>
          <div className="Countrypage-container-info-borders">
            <p>
              <span>Border Countries: </span>
            </p>
            <div className="Countrypage-container-info-borders-countries">
              {country && getBorderCountries()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
