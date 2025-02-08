import React, { useState, useContext, useRef } from "react";
import StateContext from "../context/StateContext";
import CountryContext from "../context/CountryContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as bootstrap from "bootstrap";

const StateTable = () => {
  const { states, deleteState, editState } = useContext(StateContext);
  const { countries } = useContext(CountryContext);
  const [editStateData, setEditStateData] = useState({ id: "", name: "" });
  const modalRef = useRef(null);

  const handleEditClick = (state) => {
    setEditStateData(state);
    const modal = new bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleSaveEdit = () => {
    editState(editStateData.id, editStateData.name);
    document.getElementById("closeEditModal").click();
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">State List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>State</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {states.map((state) => {
              const country = countries.find((c) => c.id === state.countryId);
              return (
                <tr key={state.id}>
                  <td>{state.name}</td>
                  <td>{country ? country.name : "NA"}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEditClick(state)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteState(state.id)}
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

      {/* Edit State Modal */}
      <div className="modal fade" id="editStateModal" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit State</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={editStateData.name}
                onChange={(e) =>
                  setEditStateData({ ...editStateData, name: e.target.value })
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

export default StateTable;