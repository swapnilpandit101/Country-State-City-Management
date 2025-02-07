import React, { createContext, useContext, useState } from "react";
import { useCountryContext } from "./CountryContext";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const { countries } = useCountryContext();
  const [states, setStates] = useState([]);

  const addState = (stateName, countryId) => {
    const newState = { id: Date.now(), name: stateName, countryId };
    setStates((prevStates) => [...prevStates, newState]);
  };

  const deleteState = (stateId) => {
    setStates((prevStates) => prevStates.filter((state) => state.id !== stateId));
  };

  const editState = (stateId, newStateName) => {
    setStates((prevStates) =>
      prevStates.map((state) =>
        state.id === stateId ? { ...state, name: newStateName } : state
      )
    );
  };

  return (
    <StateContext.Provider value={{ states, addState, deleteState, editState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

export default StateContext;