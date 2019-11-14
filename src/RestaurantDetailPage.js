import React, { useState } from "react";

import { Button, Row } from "react-materialize";
import Modal from "./components/materialize/Modal";

import NewDishForm from "./NewDishForm";
import DishList from "./DishList";

function RestaurantDetailPage() {
  const [dishNames, setDishNames] = useState([]);
  const [newDishModal, setNewDishModal] = useState(null);

  const handleAddDish = dishName => {
    setDishNames([dishName, ...dishNames]);
    newDishModal.close();
  };

  return (
    <div>
      <Modal
        modal={{
          setModal: setNewDishModal,
          instance: newDishModal
        }}
        header="New Dish"
        trigger={<Button>Add dish</Button>}
      >
        <NewDishForm onSave={handleAddDish} />
      </Modal>
      <Row>
        <DishList dishNames={dishNames} />
      </Row>
    </div>
  );
}

export default RestaurantDetailPage;
