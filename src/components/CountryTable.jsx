import React, { useState, useRef } from "react";
import { useCountryContext } from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as bootstrap from "bootstrap"; // ✅ Correct import for Vite

const CountryTable = () => {
  const { countries, deleteCountry, editCountry } = useCountryContext();
  const [editCountryData, setEditCountryData] = useState({ id: "", name: "" });
  const modalRef = useRef(null);

  const handleEditClick = (country) => {
    setEditCountryData(country);
    if (modalRef.current) {
      const modalInstance = new bootstrap.Modal(modalRef.current);
      modalInstance.show();
    }
  };

  const handleSaveEdit = () => {
    if (editCountryData.name.trim()) {
      editCountry(editCountryData.id, editCountryData.name.trim());
      document.getElementById("closeEditModal").click();
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">Country List</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Country</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {countries.length > 0 ? (
              countries.map((country) => (
                <tr key={country.id}>
                  <td>{country.name}</td>
                  <td className="text-center">
                    <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditClick(country)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteCountry(country.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center text-muted">No countries added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Country Modal */}
      <div className="modal fade" id="editCountryModal" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Country</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" id="closeEditModal"></button>
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
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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