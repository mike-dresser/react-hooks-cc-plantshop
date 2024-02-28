import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onToggleInStock }) {
  let plantCards = plants.map((plant) => {
    return (
      <PlantCard
        plant={plant}
        key={plant.id}
        onToggleInStock={onToggleInStock}
      />
    );
  });

  return (
    <ul className="cards" key="plant-list">
      {/* render PlantCards components in here */}
      {plantCards}
    </ul>
  );
}

export default PlantList;
