// components/CityForm.jsx

// import React, { useState } from "react";
// import { useCityContext } from "../context/CityContext";
// import { useStateContext } from "../context/StateContext";
// import { useCountryContext } from "../context/CountryContext";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CityForm = () => {
//   const { addCity } = useCityContext();
//   const { states } = useStateContext();
//   const { countries } = useCountryContext();

//   const [cityName, setCityName] = useState("");
//   const [selectedState, setSelectedState] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (cityName.trim() && selectedState) {
//       addCity(cityName, selectedState);
//       setCityName("");
//       setSelectedState("");
//     }
//   };

//   return (
//     <div className="container mt-3">
//       <div className="card shadow-sm p-3">
//         <h4 className="text-center mb-3">Add City</h4>
//         <form onSubmit={handleSubmit} className="row g-2">
//           <div className="col-md-5">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               value={cityName}
//               onChange={(e) => setCityName(e.target.value)}
//               placeholder="Enter City Name"
//               required
//             />
//           </div>
//           <div className="col-md-5">
//             <select
//               className="form-select form-select-sm"
//               value={selectedState}
//               onChange={(e) => setSelectedState(e.target.value)}
//               required
//             >
//               <option value="">Select State</option>
//               {states.map((state) => {
//                 const country = countries.find((c) => c.id === state.countryId);
//                 return (
//                   <option key={state.id} value={state.id}>
//                     {state.name} ({country ? country.name : "NA"})
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//           <div className="col-md-2 text-end">
//             <button type="submit" className="btn btn-success btn-sm px-4">
//               Add City
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CityForm;

// components/CityTable.jsx
// import React, { useState } from "react";
// import { useCityContext } from "../context/CityContext";
// import { useStateContext } from "../context/StateContext";
// import { useCountryContext } from "../context/CountryContext";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CityTable = () => {
//   const { cities, deleteCity, editCity } = useCityContext();
//   const { states } = useStateContext();
//   const { countries } = useCountryContext();

//   const [editCityData, setEditCityData] = useState({ id: "", name: "" });

//   const handleEditClick = (city) => {
//     setEditCityData(city);
//     new bootstrap.Modal(document.getElementById("editCityModal")).show();
//   };

//   const handleSaveEdit = () => {
//     editCity(editCityData.id, editCityData.name);
//     document.getElementById("closeEditModal").click();
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="text-center mb-3">City List</h3>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>City</th>
//               <th>State</th>
//               <th>Country</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cities.map((city) => {
//               const state = states.find((s) => s.id === city.stateId);
//               const country = state
//                 ? countries.find((c) => c.id === state.countryId)
//                 : null;

//               return (
//                 <tr key={city.id}>
//                   <td>{city.name}</td>
//                   <td>{(state || {}).name || "NA"}</td>
//                   <td>{(country || {}).name || "NA"}</td>

//                   <td>
//                     <button
//                       className="btn btn-primary btn-sm me-2"
//                       onClick={() => handleEditClick(city)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => deleteCity(city.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit City Modal */}
//       <div className="modal fade" id="editCityModal" tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit City</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={editCityData.name}
//                 onChange={(e) =>
//                   setEditCityData({ ...editCityData, name: e.target.value })
//                 }
//               />
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//                 id="closeEditModal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-success"
//                 onClick={handleSaveEdit}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CityTable;

// components/CountryForm.jsx
// import React, { useState, useContext } from "react";
// import CountryContext from "../context/CountryContext";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CountryForm = () => {
//   const { addCountry } = useContext(CountryContext);
//   const [countryName, setCountryName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (countryName.trim()) {
//       addCountry(countryName);
//       setCountryName("");
//     }
//   };

//   return (
//     <div className="container mt-3">
//       <div className="card shadow-sm p-3">
//         <h4 className="text-center mb-3">Add Country</h4>
//         <form onSubmit={handleSubmit} className="row g-2">
//           <div className="col-md-5">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               value={countryName}
//               onChange={(e) => setCountryName(e.target.value)}
//               placeholder="Enter Country Name"
//               required
//             />
//           </div>
//           <div className="col-md-2 text-end ms-auto">
//             <button type="submit" className="btn btn-success btn-sm px-4">
//               Add Country
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CountryForm;


// components/CountryStateCity.jsx
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
//     const newCountry = { id: Date.now(), name: countryName };
//     setCountries((prev) => [...prev, newCountry]);
//   };

//   // Add State
//   const addState = (stateName, countryId) => {
//     const newState = { id: Date.now(), name: stateName, countryId };
//     setStates((prev) => [...prev, newState]);
//   };

//   // Add City
//   const addCity = (cityName, stateId) => {
//     const newCity = { id: Date.now(), name: cityName, stateId };
//     setCities((prev) => [...prev, newCity]);
//   };

//   // Delete Country
//   const deleteCountry = (id) => {
//     setCountries((prev) => prev.filter((country) => country.id !== id));

//     const statesToDelete = states.filter((state) => state.countryId === id);
//     const stateIdsToDelete = statesToDelete.map((state) => state.id);

//     setStates((prev) => prev.filter((state) => state.countryId !== id));
//     setCities((prev) => prev.filter((city) => !stateIdsToDelete.includes(city.stateId)));
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

//   // Edit State
//   const editState = (id, newStateName) => {
//     setStates((prev) => prev.map((state) => state.id === id ? { ...state, name: newStateName } : state));
//   };

//   // Edit City
//   const editCity = (id, newCityName) => {
//     setCities((prev) => prev.map((city) => city.id === id ? { ...city, name: newCityName } : city));
//   };

//   return (
//     <div>
//       <CountryForm addCountry={addCountry} />
//       <StateForm addState={addState} countries={countries} />
//       <CityForm addCity={addCity} states={states} />
      
//       <CountryTable countries={countries} deleteCountry={deleteCountry} />
//       <StateTable states={states} countries={countries} deleteState={deleteState} editState={editState} />
//       <CityTable cities={cities} states={states} countries={countries} deleteCity={deleteCity} editCity={editCity} />
//     </div>
//   );
// };

// export default CountryStateCity;


// components/CountryTable.jsx
// import React, { useState, useContext } from "react";
// import CountryContext from "../context/CountryContext";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CountryTable = () => {
//   const { countries, deleteCountry, editCountry } = useContext(CountryContext);

//   const [editCountryData, setEditCountryData] = useState({ id: "", name: "" });

//   const handleEditClick = (country) => {
//     setEditCountryData(country);
//     new bootstrap.Modal(document.getElementById("editCountryModal")).show();
//   };

//   const handleSaveEdit = () => {
//     editCountry(editCountryData.id, editCountryData.name);
//     document.getElementById("closeEditModal").click();
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="text-center mb-3">Country List</h3>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>Country</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {countries.map((country) => (
//               <tr key={country.id}>
//                 <td>{country.name}</td>
//                 <td>
//                   <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditClick(country)}>
//                     Edit
//                   </button>
//                   <button className="btn btn-danger btn-sm" onClick={() => deleteCountry(country.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit Country Modal */}
//       <div className="modal fade" id="editCountryModal" tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit Country</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={editCountryData.name}
//                 onChange={(e) => setEditCountryData({ ...editCountryData, name: e.target.value })}
//               />
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeEditModal">
//                 Close
//               </button>
//               <button type="button" className="btn btn-success" onClick={handleSaveEdit}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountryTable;


// components/StateForm.jsx
// import React, { useState } from "react";
// import { useStateContext } from "../context/StateContext";
// import { useCountryContext } from "../context/CountryContext";
// import "bootstrap/dist/css/bootstrap.min.css";

// const StateForm = () => {
//   const { addState } = useStateContext();
//   const { countries } = useCountryContext();
//   const [stateName, setStateName] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (stateName.trim() && selectedCountry) {
//       addState(stateName, selectedCountry);
//       setStateName("");
//       setSelectedCountry("");
//     }
//   };

//   return (
//     <div className="container mt-3">
//       <div className="card shadow-sm p-3">
//         <h4 className="text-center mb-3">Add State</h4>
//         <form onSubmit={handleSubmit} className="row g-2">
//           {/* State Name Input */}
//           <div className="col-md-5">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               value={stateName}
//               onChange={(e) => setStateName(e.target.value)}
//               placeholder="Enter State Name"
//               required
//             />
//           </div>

//           {/* Country Dropdown */}
//           <div className="col-md-5">
//             <select
//               className="form-select form-select-sm"
//               value={selectedCountry}
//               onChange={(e) => setSelectedCountry(e.target.value)}
//               required
//             >
//               <option value="">Select Country</option>
//               {countries.map((country) => (
//                 <option key={country.id} value={country.id}>
//                   {country.name}
//                 </option>
                
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div className="col-md-2 text-end">
//             <button type="submit" className="btn btn-success btn-sm px-4">
//               Add State
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StateForm;

// components/StateTable.jsx
// import React, { useState, useContext } from "react";
// import StateContext from "../context/StateContext";
// import CountryContext from "../context/CountryContext";
// import "bootstrap/dist/css/bootstrap.min.css";

// const StateTable = () => {
//   const { states, deleteState, editState } = useContext(StateContext);
//   const { countries } = useContext(CountryContext);

//   const [editStateData, setEditStateData] = useState({ id: "", name: "" });

//   const handleEditClick = (state) => {
//     setEditStateData(state);
//     new bootstrap.Modal(document.getElementById("editStateModal")).show();
//   };

//   const handleSaveEdit = () => {
//     editState(editStateData.id, editStateData.name);
//     document.getElementById("closeEditModal").click();
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="text-center mb-3">State List</h3>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>State</th>
//               <th>Country</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {states.map((state) => {
//               const country = countries.find((c) => c.id === state.countryId);
//               return (
//                 <tr key={state.id}>
//                   <td>{state.name}</td>
//                   <td>{country ? country.name : "NA"}</td>
//                   <td>
//                     <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditClick(state)}>
//                       Edit
//                     </button>
//                     <button className="btn btn-danger btn-sm" onClick={() => deleteState(state.id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Edit State Modal */}
//       <div className="modal fade" id="editStateModal" tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Edit State</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={editStateData.name}
//                 onChange={(e) => setEditStateData({ ...editStateData, name: e.target.value })}
//               />
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeEditModal">
//                 Close
//               </button>
//               <button type="button" className="btn btn-success" onClick={handleSaveEdit}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StateTable;

// context/CityContext.jsx
// import React, { createContext, useContext, useState } from "react";
// import { useStateContext } from "./StateContext";

// const CityContext = createContext();

// export const CityProvider = ({ children }) => {
//   const { states } = useStateContext();
//   const [cities, setCities] = useState([]);

//   const addCity = (cityName, stateId) => {
//     const newCity = { id: Date.now(), name: cityName, stateId };
//     setCities((prevCities) => [...prevCities, newCity]);
//   };

//   const deleteCity = (cityId) => {
//     setCities((prevCities) => prevCities.filter((city) => city.id !== cityId));
//   };

//   const editCity = (cityId, newCityName) => {
//     setCities((prevCities) =>
//       prevCities.map((city) =>
//         city.id === cityId ? { ...city, name: newCityName } : city
//       )
//     );
//   };

//   return (
//     <CityContext.Provider value={{ cities, addCity, deleteCity, editCity }}>
//       {children}
//     </CityContext.Provider>
//   );
// };

// export const useCityContext = () => {
//   const context = useContext(CityContext);
//   if (!context) {
//     throw new Error("useCityContext must be used within a CityProvider");
//   }
//   return context;
// };

// export default CityContext;


// context/CountryContext.jsx
// import React, { createContext, useState, useContext } from "react";

// const CountryContext = createContext();

// export const CountryProvider = ({ children }) => {
//   const [countries, setCountries] = useState([]);

//   const addCountry = (countryName) => {
//     const newCountry = { id: Date.now(), name: countryName };
//     setCountries((prevCountries) => [...prevCountries, newCountry]);
//   };

//   const deleteCountry = (countryId) => {
//     setCountries((prevCountries) =>
//       prevCountries.filter((country) => country.id !== countryId)
//     );
//   };

//   const editCountry = (countryId, newCountryName) => {
//     setCountries((prevCountries) =>
//       prevCountries.map((country) =>
//         country.id === countryId ? { ...country, name: newCountryName } : country
//       )
//     );
//   };

//   return (
//     <CountryContext.Provider value={{ countries, addCountry, deleteCountry, editCountry }}>
//       {children}
//     </CountryContext.Provider>
//   );
// };

// export const useCountryContext = () => {
//   const context = useContext(CountryContext);
//   if (!context) {
//     throw new Error("useCountryContext must be used within a CountryProvider");
//   }
//   return context;
// };

// export default CountryContext;


// context/StateContext.jsx
// import React, { createContext, useContext, useState } from "react";
// import { useCountryContext } from "./CountryContext";

// const StateContext = createContext();

// export const StateProvider = ({ children }) => {
//   const { countries } = useCountryContext();
//   const [states, setStates] = useState([]);

//   const addState = (stateName, countryId) => {
//     const newState = { id: Date.now(), name: stateName, countryId };
//     setStates((prevStates) => [...prevStates, newState]);
//   };

//   const deleteState = (stateId) => {
//     setStates((prevStates) => prevStates.filter((state) => state.id !== stateId));
//   };

//   const editState = (stateId, newStateName) => {
//     setStates((prevStates) =>
//       prevStates.map((state) =>
//         state.id === stateId ? { ...state, name: newStateName } : state
//       )
//     );
//   };

//   return (
//     <StateContext.Provider value={{ states, addState, deleteState, editState }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => {
//   const context = useContext(StateContext);
//   if (!context) {
//     throw new Error("useStateContext must be used within a StateProvider");
//   }
//   return context;
// };

// export default StateContext;


// App.jsx

// import React from 'react';
// import { CityProvider } from './context/CityContext';
// import { CountryProvider } from './context/CountryContext';
// import { StateProvider } from './context/StateContext';

// import CountryForm from './components/CountryForm';
// import StateForm from './components/StateForm';
// import CityForm from './components/CityForm';

// import CountryTable from './components/CountryTable';
// import StateTable from './components/StateTable';
// import CityTable from './components/CityTable';

// const App = () => {
//   return (
//     <CountryProvider>
//       <StateProvider>
//         <CityProvider>
//           <div>
//             <CountryForm />
//             <StateForm />
//             <CityForm />
//             <CountryTable />
//             <StateTable />
//             <CityTable />
//           </div>
//         </CityProvider>
//       </StateProvider>
//     </CountryProvider>
//   );
// };

// export default App;









