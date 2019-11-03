import React, { useState } from "react";

function NewRestaurantForm({ onSave }) {
  const [inputText, setInputText] = useState("");

  const handleSave = e => {
    e.preventDefault();
    onSave(inputText);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="newRestaurantName"
        onChange={e => setInputText(e.target.value)}
      />
      <button data-testid="saveNewRestaurantButton" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default NewRestaurantForm;
