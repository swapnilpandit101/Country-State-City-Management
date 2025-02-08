import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const addCountry = (countryName) => {
    const newCountry = { id: uuidv4(), name: countryName };
    setCountries((prevCountries) => [...prevCountries, newCountry]);
  };

  const deleteCountry = (countryId) => {
    setCountries((prevCountries) => prevCountries.filter((country) => country.id !== countryId));
  };

  const editCountry = (countryId, newCountryName) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) => (country.id === countryId ? { ...country, name: newCountryName } : country))
    );
  };

  return (
    <CountryContext.Provider value={{ countries, addCountry, deleteCountry, editCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};

export default CountryContext;
