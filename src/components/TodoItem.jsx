import React from "react";

import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoComplete } from "../store/todoSlice";

export default function TodoItem({ id, completed, text }) {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo({ id }))}>
        &times;
      </span>
    </li>
  );
}
