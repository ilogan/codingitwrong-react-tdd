import React, { useState } from "react";

import { connect } from "react-redux";
import { addDish } from "./store/dishes/actions";

import { Link } from "react-router-dom";
import { Button, Row } from "react-materialize";
import Modal from "./components/materialize/Modal";

import NewDishForm from "./NewDishForm";
import DishList from "./DishList";

function RestaurantDetailPage({ dishes, addDish }) {
  //const [dishNames, setDishNames] = useState([]); handled by redux
  const [newDishModal, setNewDishModal] = useState(null);

  const handleAddDish = dishName => {
    addDish(dishName);
    newDishModal.close();
  };

  return (
    <div>
      <Row>
        <Link to="/">Back</Link>
      </Row>
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
        <DishList dishNames={dishes} />
      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes
  };
}

const mapDispatchToProps = {
  addDish
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetailPage);
