import React, { useState } from "react";

import { Button, TextInput, Row } from "react-materialize";
import { Formik } from "formik";

function NewRestaurantForm({ onSave }) {
  const handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;
    onSave(restaurantName);
    resetForm();
  };

  return (
    <Row>
      <Formik initialValues={{ restaurantName: "" }} onSubmit={handleSave}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextInput
              s={12}
              m={8}
              l={10}
              label="Restaurant Name"
              name="restaurantName"
              value={values.restaurantName}
              onChange={handleChange}
              data-testid="newRestaurantName"
            />
            <Button
              s={12}
              m={4}
              l={2}
              data-testid="saveNewRestaurantButton"
              type="submit"
            >
              Save
            </Button>
          </form>
        )}
      </Formik>
    </Row>
  );
}

export default NewRestaurantForm;
