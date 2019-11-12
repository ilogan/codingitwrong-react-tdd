import React from "react";

import { Button, TextInput, Row } from "react-materialize";
import { Formik } from "formik";

function NewRestaurantForm({ onSave }) {
  const handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;
    onSave(restaurantName);
    resetForm();
  };

  const validate = values => {
    const errors = {};
    if (values.restaurantName === "") {
      errors.restaurantName = "Cannot be blank";
    }
    return errors;
  };

  const RestaurantForm = ({ values, errors, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <TextInput
        s={12}
        m={8}
        l={10}
        className={errors.restaurantName ? "invalid" : ""}
        label="Restaurant Name"
        name="restaurantName"
        value={values.restaurantName}
        error={errors.restaurantName}
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
  );

  return (
    <Row>
      <Formik
        initialValues={{ restaurantName: "" }}
        onSubmit={handleSave}
        validate={validate}
        component={RestaurantForm}
      />
    </Row>
  );
}

export default NewRestaurantForm;
