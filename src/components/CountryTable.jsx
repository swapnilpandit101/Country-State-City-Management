import React, { useState, useContext } from "react";
import CountryContext from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CountryTable = () => {
  const { countries, deleteCountry, editCountry } = useContext(CountryContext);

  const [editCountryData, setEditCountryData] = useState({ id: "", name: "" });

  const handleEditClick = (country) => {
    setEditCountryData(country);
    new bootstrap.Modal(document.getElementById("editCountryModal")).show();
  };

  const handleSaveEdit = () => {
    editCountry(editCountryData.id, editCountryData.name);
    document.getElementById("closeEditModal").click();
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">Country List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.id}>
                <td>{country.name}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditClick(country)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteCountry(country.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Country Modal */}
      <div className="modal fade" id="editCountryModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Country</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={editCountryData.name}
                onChange={(e) => setEditCountryData({ ...editCountryData, name: e.target.value })}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeEditModal">
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={handleSaveEdit}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryTable;
