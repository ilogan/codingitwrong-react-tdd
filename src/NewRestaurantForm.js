import React from "react";

import { Button, TextInput, Row } from "react-materialize";
import { Formik } from "formik";

function NewRestaurantForm({ onSave, onCancel }) {
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

  const RestaurantForm = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset
  }) => {
    // find better solution using formik onReset
    const handleCancel = () => {
      handleReset();
      onCancel();
    };

    return (
      <form onSubmit={handleSubmit}>
        <Row>
          <TextInput
            s={12}
            className={errors.restaurantName ? "invalid" : ""}
            label="Restaurant Name"
            name="restaurantName"
            value={values.restaurantName}
            error={errors.restaurantName}
            onChange={handleChange}
            data-testid="newRestaurantName"
          />
        </Row>
        <Row>
          <Button data-testid="saveNewRestaurantButton" type="submit">
            Save
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Row>
      </form>
    );
  };

  return (
    <Formik
      initialValues={{ restaurantName: "" }}
      onSubmit={handleSave}
      validate={validate}
      component={RestaurantForm}
    />
  );
}

export default NewRestaurantForm;
