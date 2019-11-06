import React, { useState } from "react";

import { Button, TextInput, Row } from "react-materialize";

function NewRestaurantForm({ onSave }) {
  const [inputText, setInputText] = useState("");

  const handleSave = e => {
    e.preventDefault();
    onSave(inputText);
  };

  return (
    <Row>
      <TextInput
        s={12}
        m={8}
        l={10}
        label="Restaurant Name"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        data-testid="newRestaurantName"
      />
      <Button
        s={12}
        m={4}
        l={2}
        data-testid="saveNewRestaurantButton"
        onClick={handleSave}
      >
        Save
      </Button>
    </Row>
  );
}

export default NewRestaurantForm;
