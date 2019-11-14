import React, { useState } from "react";

import { connect } from "react-redux";
import { addRestaurant } from "./store/restaurants/actions";

import { Button, Row } from "react-materialize";
import Modal from "./components/materialize/Modal";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

function RestaurantListPage({ restaurants, addRestaurant }) {
  // const [restaurantNames, setRestaurantNames] = useState([]); handled by redux
  const [newRestaurantModal, setNewRestaurantModal] = useState(null);

  const handleAddRestaurant = newRestaurantName => {
    addRestaurant(newRestaurantName);
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
        <RestaurantList restaurantNames={restaurants} />
      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  };
}

const mapDispatchToProps = {
  addRestaurant
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantListPage);
