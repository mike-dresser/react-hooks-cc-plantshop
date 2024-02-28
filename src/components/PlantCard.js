import React, { useState } from 'react';

function PlantCard({ plant: { id, name, image, price, stocked } }) {
  const [inStock, setInStock] = useState(stocked);

  function toggleInStock() {
    fetch('http://localhost:6001/plants/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ stocked: !inStock }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => setInStock(updatedPlant.stocked));
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
