import React from "react";

function PlantCard({ plant, setPlants }) {
  const handleStockToggle = () => {
    const updatedPlant = { ...plant, inStock: !plant.inStock };
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({ inStock: updatedPlant.inStock }),
    })
      .then(response => response.json())
      .then(() => {
        setPlants(plants => 
          plants.map(p => p.id === plant.id ? updatedPlant : p)
        );
      });
  };
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button 
        className={plant.inStock ? "primary" : ""} 
        onClick={handleStockToggle}
      >
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;