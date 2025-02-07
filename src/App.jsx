import React from 'react';
import { CityProvider } from './context/CityContext';
import { CountryProvider } from './context/CountryContext';
import { StateProvider } from './context/StateContext';

import CountryForm from './components/CountryForm';
import StateForm from './components/StateForm';
import CityForm from './components/CityForm';

import CountryTable from './components/CountryTable';
import StateTable from './components/StateTable';
import CityTable from './components/CityTable';

const App = () => {
  return (
    <CountryProvider>
      <StateProvider>
        <CityProvider>
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