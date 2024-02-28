import React from 'react';
import Header from './Header';
import PlantPage from './PlantPage';

/*
COMPONENT LAYOUT

App
|--Header
|--PlantPage
    |--NewPlantForm
    |--Search
    |--PlantList
        |--PlantCard
        |--PlantCard...
*/

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
