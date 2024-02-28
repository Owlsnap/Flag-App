import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import Input from "../input/Input";
import CountryCards from "../../components/countrycards/CountryCards.jsx";
import Dropdown from "../input/Dropdown";
import { DarkModeContext } from "../Darkmode";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  const allCountriesLoader = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    return data;
  };

  useEffect(() => {
    allCountriesLoader().then((data) => {
      setCountries(data);
      setFilteredList(data);
      setLoading(false);
    });
  }, []);

  const filteredBySearchQuery = (query) => {
    return countries.filter((country) => {
      return (
        country.name &&
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
    });
  };

  function filteredByRegionQuery(query) {
    return countries.filter((country) => {
      return country.region && country.region === query;
    });
  }

  function handleFilteredBySearchQuery(query) {
    const filteredList = filteredBySearchQuery(query);
    setFilteredList(filteredList);
  }

  if (loading) {
    return <h1 className="Loading">Loading...</h1>;
  }

  const handleRegionChange = (e) => {
    const region = e.target.value;
    if (region === "All") {
      setFilteredList(countries);
    } else {
      const filteredList = filteredByRegionQuery(region);
      setFilteredList(filteredList);
    }
  };

  return (
    <div
      className="Home"
      style={{ backgroundColor: darkMode ? "#202C36" : "#F2F2F2" }}
    >
      <div className="inputAndDropdown-container">
        <Input filteredBySearchQuery={handleFilteredBySearchQuery} />
        <Dropdown handleRegionChange={handleRegionChange} />
      </div>
      <CountryCards
        filteredCountries={filteredList}
      />
    </div>
  );
}
