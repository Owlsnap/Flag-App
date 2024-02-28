import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import CountryPage from "./components/countrypage/Countrypage.jsx";
import allCountriesLoader from "./components/home/Home.jsx";
import countryDetailsLoader from "./components/countrypage/Countrypage.jsx";

function App() {
  return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Routes>
            <Route
              path="/"
              index
              element={<Home />}
              loader={allCountriesLoader}
            />
            <Route
              path=":name"
              element={<CountryPage />}
              loader={countryDetailsLoader}
            />
          </Routes>
        </main>
      </div>
  );
}

export default App;
