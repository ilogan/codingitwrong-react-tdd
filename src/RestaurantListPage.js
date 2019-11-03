import React, { useState } from "react";

import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

function RestaurantListPage() {
  const [restaurantNames, setRestaurantNames] = useState([]);

  const handleAddRestaurant = newRestaurantName => {
    setRestaurantNames([newRestaurantName, ...restaurantNames]);
  };

  return (
    <div>
      <button data-testid="addRestaurantButton">Add Restaurant</button>
      <NewRestaurantForm onSave={handleAddRestaurant} />
      <RestaurantList restaurantNames={restaurantNames} />
    </div>
  );
}

export default RestaurantListPage;
