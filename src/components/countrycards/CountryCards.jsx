import React, { useContext, useState } from "react";
import "./CountryCards.css";
import CountryCard from "../../components/CountryCard";
import { DarkModeContext } from "../Darkmode";

export default function CountryCards({ filteredCountries }) {
  const { darkMode } = useContext(DarkModeContext);
  const [selectedRegion, setSelectedRegion] = useState("");
  
  // Add defensive check to ensure filteredCountries is an array
  const safeFilteredCountries = Array.isArray(filteredCountries) ? filteredCountries : [];
  
  return (
    <div
      className="all-CountryCards"
      style={{ backgroundColor: darkMode ? "#202C36" : "#F2F2F2" }}
    >
      {safeFilteredCountries
        .filter(
          (country) => !selectedRegion || country.region === selectedRegion
        )
        .map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            setSelectedRegion={setSelectedRegion}
          />
        ))}
    </div>
  );
}
