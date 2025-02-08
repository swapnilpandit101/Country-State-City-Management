import React, { useState } from "react";
import { useCityContext } from "../context/CityContext";
import { useStateContext } from "../context/StateContext";
import { useCountryContext } from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CityForm = () => {
  const { addCity } = useCityContext();
  const { states } = useStateContext();
  const { countries } = useCountryContext();

  const [cityName, setCityName] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityName.trim() || !selectedState) return;

    addCity(cityName, selectedState);
    setCityName("");
    setSelectedState("");
  };

  return (
    <div className="container mt-3">
      <div className="card shadow-sm p-3">
        <h4 className="text-center mb-3">Add City</h4>
        <form onSubmit={handleSubmit} className="row g-2">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control form-control-sm"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              placeholder="Enter City Name"
              required
            />
          </div>

          <div className="col-md-5">
            <select
              className="form-select form-select-sm"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              required
            >
              <option value="">Select State</option>
              {states.map((state) => {
                const country = countries.find((c) => c.id === state.countryId);
                return (
                  <option key={state.id} value={state.id}>
                    {state.name} {country ? `(${country.name})` : ""}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-md-2 text-end">
            <button type="submit" className="btn btn-success btn-sm px-4">
              Add City
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CityForm;
