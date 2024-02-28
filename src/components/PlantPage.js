import React, { useEffect, useState } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage() {
  const [plants, setPlants] = useState([]);

  // ---- Initial fetch ----
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        console.log(data);
      });
  }, []);

  function onNewPlantSubmit(plant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(plant),
    })
      .then((res) => res.json())
      .then((newPlantResponse) => setPlants([...plants, newPlantResponse]));
  }

  function onToggleInStock(plant) {}
  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit} />
      <Search />
      <PlantList plants={plants} onToggleInStock={onToggleInStock} />
    </main>
  );
}

export default PlantPage;
