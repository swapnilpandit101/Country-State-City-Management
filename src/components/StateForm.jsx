import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { useCountryContext } from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";

const StateForm = () => {
  const { addState } = useStateContext();
  const { countries } = useCountryContext();
  const [stateName, setStateName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateName.trim() && selectedCountry) {
      addState(stateName, selectedCountry);
      setStateName("");
      setSelectedCountry("");
    }
  };

  return (
    <div className="container mt-3">
      <div className="card shadow-sm p-3">
        <h4 className="text-center mb-3">Add State</h4>
        <form onSubmit={handleSubmit} className="row g-2">
          {/* State Name Input */}
          <div className="col-md-5">
            <input
              type="text"
              className="form-control form-control-sm"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              placeholder="Enter State Name"
              required
            />
          </div>

          {/* Country Dropdown */}
          <div className="col-md-5">
            <select
              className="form-select form-select-sm"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => ( 
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-md-2 text-end">
            <button type="submit" className="btn btn-success btn-sm px-4">
              Add State
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StateForm;
