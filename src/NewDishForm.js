import React from "react";
import { Formik } from "formik";

import { Button, TextInput, Row } from "react-materialize";

function NewDishForm({ onSave }) {
  const handleSave = (values, { resetForm }) => {
    const { dishName } = values;
    onSave(dishName);
    resetForm();
  };

  const DishForm = ({ values, handleChange, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <Row>
          <TextInput
            s={12}
            label="Dish Name"
            name="dishName"
            value={values.dishName}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Button type="submit">Save</Button>
        </Row>
      </form>
    );
  };

  return (
    <Formik
      initialValues={{ dishName: "" }}
      onSubmit={handleSave}
      component={DishForm}
    />
  );
}

export default NewDishForm;
