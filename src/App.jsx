import React from "react";
import { CityProvider } from "./context/CityContext";
import { StateProvider } from "./context/StateContext";
import { CountryProvider } from "./context/CountryContext";

import CountryForm from "./components/CountryForm";
import StateForm from "./components/StateForm";
import CityForm from "./components/CityForm";

import CountryTable from "./components/CountryTable";
import StateTable from "./components/StateTable";
import CityTable from "./components/CityTable";

const App = () => {
  return (
    <CountryProvider> {/* ✅ Country Provider First */}
      <StateProvider> {/* ✅ Then State Provider */}
        <CityProvider> {/* ✅ Finally City Provider */}
          <div>
            <CountryForm />
            <StateForm />
            <CityForm />
            <CountryTable />
            <StateTable />
            <CityTable />
          </div>
        </CityProvider>
      </StateProvider>
    </CountryProvider>
  );
};

export default App;
