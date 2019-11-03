import React, { useState } from "react";

import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

function RestaurantListPage() {
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [showNewRestaurantForm, setNewRestaurantForm] = useState(false);

  const handleAddRestaurant = newRestaurantName => {
    setRestaurantNames([newRestaurantName, ...restaurantNames]);
    setNewRestaurantForm(false);
  };

  const handleShowNewRestaurantForm = () => {
    setNewRestaurantForm(true);
  };

  return (
    <div>
      <button
        data-testid="addRestaurantButton"
        onClick={handleShowNewRestaurantForm}
      >
        Add Restaurant
      </button>
      {showNewRestaurantForm ? (
        <NewRestaurantForm onSave={handleAddRestaurant} />
      ) : null}
      <RestaurantList restaurantNames={restaurantNames} />
    </div>
  );
}

export default RestaurantListPage;
