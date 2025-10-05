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
    try {
      console.log("Starting API call to restcountries.com...");
      // Updated API call with required fields parameter
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3,borders,currencies,languages,tld");
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("API response received:", data?.length, "countries");
      console.log("Sample country data:", data?.[0]);
      
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error("Error loading countries:", error);
      return [];
    }
  };

  useEffect(() => {
    console.log("useEffect: Starting to load countries...");
    allCountriesLoader()
      .then((data) => {
        console.log("useEffect: Data received:", data?.length, "countries");
        // Ensure data is an array
        const countriesData = Array.isArray(data) ? data : [];
        setCountries(countriesData);
        setFilteredList(countriesData);
        setLoading(false);
        console.log("useEffect: State updated, loading complete");
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setCountries([]);
        setFilteredList([]);
        setLoading(false);
      });
  }, []);

  const filteredBySearchQuery = (query) => {
    if (!Array.isArray(countries)) return [];
    return countries.filter((country) => {
      return (
        country.name &&
        country.name.common &&
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
    });
  };

  function filteredByRegionQuery(query) {
    if (!Array.isArray(countries)) return [];
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

  // Debug: Show if no countries loaded
  if (!loading && countries.length === 0) {
    return (
      <div className="Home" style={{ backgroundColor: darkMode ? "#202C36" : "#F2F2F2", padding: "20px", color: darkMode ? "white" : "black" }}>
        <h2>No countries data loaded</h2>
        <p>Check the browser console for error messages.</p>
        <p>The API might be down or there might be a network issue.</p>
      </div>
    );
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
