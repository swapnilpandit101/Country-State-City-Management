// import React, { useState } from "react";
// import CountryTable from "./components/Country/CountryTable";
// import StateTable from "./components/State/StateTable";
// import CityTable from "./components/City/CityTable";
// import CountryForm from "./components/Country/CountryForm";
// import StateForm from "./components/State/StateForm";
// import CityForm from "./components/City/CityForm";

// const CountryStateCity = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   // Add Country
//   const addCountry = (countryName) => {
//     const trimmedName = countryName.trim();
//     if (!trimmedName) return alert("Country name cannot be empty!");
//     if (countries.some((c) => c.name.toLowerCase() === trimmedName.toLowerCase())) {
//       return alert("Country already exists!");
//     }

//     const newCountry = { id: Date.now(), name: trimmedName };
//     setCountries((prev) => [...prev, newCountry]);
//   };

//   // Add State
//   const addState = (stateName, countryId) => {
//     const trimmedName = stateName.trim();
//     if (!trimmedName) return alert("State name cannot be empty!");
//     if (states.some((s) => s.name.toLowerCase() === trimmedName.toLowerCase() && s.countryId === countryId)) {
//       return alert("State already exists in this country!");
//     }

//     const newState = { id: Date.now(), name: trimmedName, countryId };
//     setStates((prev) => [...prev, newState]);
//   };

//   // Add City
//   const addCity = (cityName, stateId) => {
//     const trimmedName = cityName.trim();
//     if (!trimmedName) return alert("City name cannot be empty!");
//     if (cities.some((c) => c.name.toLowerCase() === trimmedName.toLowerCase() && c.stateId === stateId)) {
//       return alert("City already exists in this state!");
//     }

//     const newCity = { id: Date.now(), name: trimmedName, stateId };
//     setCities((prev) => [...prev, newCity]);
//   };

//   // Delete Country
//   const deleteCountry = (id) => {
//     const updatedStates = states.filter((state) => state.countryId !== id);
//     const stateIdsToDelete = new Set(updatedStates.map((state) => state.id));

//     setCountries((prev) => prev.filter((country) => country.id !== id));
//     setStates(updatedStates);
//     setCities((prev) => prev.filter((city) => !stateIdsToDelete.has(city.stateId)));
//   };

//   // Delete State
//   const deleteState = (id) => {
//     setStates((prev) => prev.filter((state) => state.id !== id));
//     setCities((prev) => prev.filter((city) => city.stateId !== id));
//   };

//   // Delete City
//   const deleteCity = (id) => {
//     setCities((prev) => prev.filter((city) => city.id !== id));
//   };

//   // Edit Country
//   const editCountry = (id, newCountryName) => {
//     setCountries((prev) =>
//       prev.map((country) => (country.id === id ? { ...country, name: newCountryName } : country))
//     );
//   };

//   // Edit State
//   const editState = (id, newStateName) => {
//     setStates((prev) =>
//       prev.map((state) => (state.id === id ? { ...state, name: newStateName } : state))
//     );
//   };

//   // Edit City
//   const editCity = (id, newCityName) => {
//     setCities((prev) =>
//       prev.map((city) => (city.id === id ? { ...city, name: newCityName } : city))
//     );
//   };

//   return (
//     <div>
//       <CountryForm addCountry={addCountry} />
//       <StateForm addState={addState} countries={countries} />
//       <CityForm addCity={addCity} states={states} />

//       <CountryTable countries={countries} deleteCountry={deleteCountry} editCountry={editCountry} />
//       <StateTable states={states} countries={countries} deleteState={deleteState} editState={editState} />
//       <CityTable cities={cities} states={states} countries={countries} deleteCity={deleteCity} editCity={editCity} />
//     </div>
//   );
// };

// export default CountryStateCity;
