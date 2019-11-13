import React, { useState } from "react";

import { Button, Row } from "react-materialize";
import Modal from "./components/materialize/Modal";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

function RestaurantListPage() {
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [newRestaurantModal, setNewRestaurantModal] = useState(null);

  const handleAddRestaurant = newRestaurantName => {
    setRestaurantNames([newRestaurantName, ...restaurantNames]);
    newRestaurantModal.close();
  };

  const handleCancelAddRestaurant = () => {
    newRestaurantModal.close();
  };

  return (
    <div>
      <Modal
        data-testid="addRestaurantModal"
        id="addRestaurantModal"
        modal={{
          setModal: setNewRestaurantModal,
          instance: newRestaurantModal
        }}
        header="New Restaurant"
        trigger={
          <Button data-testid="addRestaurantButton">Add restaurant</Button>
        }
      >
        <NewRestaurantForm
          onSave={handleAddRestaurant}
          onCancel={handleCancelAddRestaurant}
        />
      </Modal>
      <Row>
        <RestaurantList restaurantNames={restaurantNames} />
      </Row>
    </div>
  );
}

export default RestaurantListPage;
