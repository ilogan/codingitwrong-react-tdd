import React, { useState } from "react";

import { Button, Row } from "react-materialize";
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
      <Row>
        <Button
          data-testid="addRestaurantButton"
          onClick={handleShowNewRestaurantForm}
        >
          Add Restaurant
        </Button>
      </Row>
      <Row>
        {showNewRestaurantForm ? (
          <NewRestaurantForm onSave={handleAddRestaurant} />
        ) : null}
      </Row>
      <Row>
        <RestaurantList restaurantNames={restaurantNames} />
      </Row>
    </div>
  );
}

export default RestaurantListPage;
