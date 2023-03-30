import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./store/todoSlice"; // Импорт экшена

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
