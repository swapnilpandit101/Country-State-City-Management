
import React, { createContext, useContext, useState } from "react";
import { useStateContext } from "./StateContext";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const { states } = useStateContext();
  const [cities, setCities] = useState([]);

  const addCity = (cityName, stateId) => {
    if (!cityName.trim() || !stateId) return;

    const newCity = { id: Date.now(), name: cityName, stateId: Number(stateId) };
    setCities((prevCities) => [...prevCities, newCity]);
  };

  const deleteCity = (cityId) => {
    setCities((prevCities) => prevCities.filter((city) => city.id !== cityId));
  };

  const editCity = (cityId, newCityName) => {
    setCities((prevCities) =>
      prevCities.map((city) =>
        city.id === cityId ? { ...city, name: newCityName } : city
      )
    );
  };

  return (
    <CityContext.Provider value={{ cities, addCity, deleteCity, editCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCityContext must be used within a CityProvider");
  }
  return context;
};

export default CityContext;
