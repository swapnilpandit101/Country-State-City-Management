import React, { useState } from "react";
import { useCityContext } from "../context/CityContext";
import { useStateContext } from "../context/StateContext";
import { useCountryContext } from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CityTable = () => {
  const { cities, deleteCity, editCity } = useCityContext();
  const { states } = useStateContext();
  const { countries } = useCountryContext();

  const [editCityData, setEditCityData] = useState({ id: "", name: "" });

  const handleEditClick = (city) => {
    setEditCityData(city);
    new bootstrap.Modal(document.getElementById("editCityModal")).show();
  };

  const handleSaveEdit = () => {
    editCity(editCityData.id, editCityData.name);
    document.getElementById("closeEditModal").click();
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">City List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => {
              const state = states.find((s) => s.id === city.stateId);
              const country = state
                ? countries.find((c) => c.id === state.countryId)
                : null;

              return (
                <tr key={city.id}>
                  <td>{city.name}</td>
                  <td>{(state || {}).name || "NA"}</td>
                  <td>{(country || {}).name || "NA"}</td>

                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEditClick(city)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCity(city.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Edit City Modal */}
      <div className="modal fade" id="editCityModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit City</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={editCityData.name}
                onChange={(e) =>
                  setEditCityData({ ...editCityData, name: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="closeEditModal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSaveEdit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityTable;
