import React, { useState } from "react";
import CountryTable from "./components/Country/CountryTable";
import StateTable from "./components/State/StateTable";
import CityTable from "./components/City/CityTable";
import CountryForm from "./components/Country/CountryForm";
import StateForm from "./components/State/StateForm";
import CityForm from "./components/City/CityForm";

const CountryStateCity = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Add Country
  const addCountry = (countryName) => {
    const newCountry = { id: Date.now(), name: countryName };
    setCountries((prev) => [...prev, newCountry]);
  };

  // Add State
  const addState = (stateName, countryId) => {
    const newState = { id: Date.now(), name: stateName, countryId };
    setStates((prev) => [...prev, newState]);
  };

  // Add City
  const addCity = (cityName, stateId) => {
    const newCity = { id: Date.now(), name: cityName, stateId };
    setCities((prev) => [...prev, newCity]);
  };

  // Delete Country
  const deleteCountry = (id) => {
    setCountries((prev) => prev.filter((country) => country.id !== id));

    const statesToDelete = states.filter((state) => state.countryId === id);
    const stateIdsToDelete = statesToDelete.map((state) => state.id);

    setStates((prev) => prev.filter((state) => state.countryId !== id));
    setCities((prev) => prev.filter((city) => !stateIdsToDelete.includes(city.stateId)));
  };

  // Delete State
  const deleteState = (id) => {
    setStates((prev) => prev.filter((state) => state.id !== id));
    setCities((prev) => prev.filter((city) => city.stateId !== id));
  };

  // Delete City
  const deleteCity = (id) => {
    setCities((prev) => prev.filter((city) => city.id !== id));
  };

  // Edit State
  const editState = (id, newStateName) => {
    setStates((prev) => prev.map((state) => state.id === id ? { ...state, name: newStateName } : state));
  };

  // Edit City
  const editCity = (id, newCityName) => {
    setCities((prev) => prev.map((city) => city.id === id ? { ...city, name: newCityName } : city));
  };

  return (
    <div>
      <CountryForm addCountry={addCountry} />
      <StateForm addState={addState} countries={countries} />
      <CityForm addCity={addCity} states={states} />
      
      <CountryTable countries={countries} deleteCountry={deleteCountry} />
      <StateTable states={states} countries={countries} deleteState={deleteState} editState={editState} />
      <CityTable cities={cities} states={states} countries={countries} deleteCity={deleteCity} editCity={editCity} />
    </div>
  );
};

export default CountryStateCity;
