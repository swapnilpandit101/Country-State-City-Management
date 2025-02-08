import React, { useState } from "react";
import { useCountryContext } from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CountryForm = () => {
  const { addCountry } = useCountryContext();
  const [countryName, setCountryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = countryName.trim();
    if (trimmedName) {
      addCountry(trimmedName);
      setCountryName("");
    }
  };

  return (
    <div className="container mt-3">
      <div className="card shadow-sm p-3">
        <h4 className="text-center mb-3">Add Country</h4>
        <form onSubmit={handleSubmit} className="row g-2">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              placeholder="Enter Country Name"
              required
            />
          </div>
          <div className="col-md-4 text-end">
            <button type="submit" className="btn btn-success w-100">
              Add Country
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryForm;
