import React, { useState, useContext } from "react";
import CountryContext from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CountryForm = () => {
  const { addCountry } = useContext(CountryContext);
  const [countryName, setCountryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (countryName.trim()) {
      addCountry(countryName);
      setCountryName("");
    }
  };

  return (
    <div className="container mt-3">
      <div className="card shadow-sm p-3">
        <h4 className="text-center mb-3">Add Country</h4>
        <form onSubmit={handleSubmit} className="row g-2">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control form-control-sm"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              placeholder="Enter Country Name"
              required
            />
          </div>
          <div className="col-md-2 text-end ms-auto">
            <button type="submit" className="btn btn-success btn-sm px-4">
              Add Country
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryForm;
