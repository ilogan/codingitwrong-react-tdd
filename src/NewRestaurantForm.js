import React, { useState } from "react";

import { Button, TextInput } from "react-materialize";

function NewRestaurantForm({ onSave }) {
  const [inputText, setInputText] = useState("");

  const handleSave = e => {
    e.preventDefault();
    onSave(inputText);
  };

  return (
    <div>
      <TextInput
        label="Restaurant Name"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        data-testid="newRestaurantName"
      />
      <Button data-testid="saveNewRestaurantButton" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default NewRestaurantForm;
