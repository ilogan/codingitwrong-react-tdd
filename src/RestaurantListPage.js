import React, { useState } from "react";

import { Button } from "react-materialize";
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
      <Button
        data-testid="addRestaurantButton"
        onClick={handleShowNewRestaurantForm}
      >
        Add Restaurant
      </Button>
      {showNewRestaurantForm ? (
        <NewRestaurantForm onSave={handleAddRestaurant} />
      ) : null}
      <RestaurantList restaurantNames={restaurantNames} />
    </div>
  );
}

export default RestaurantListPage;
