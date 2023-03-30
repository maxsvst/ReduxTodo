import React from "react";

export default function InputField({ text, handleInput, handleSubmit }) {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Добавить задачу</button>
    </label>
  );
}
