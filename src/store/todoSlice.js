import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const togglesTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      togglesTodo.completed = !togglesTodo.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer; // Экспорт редюсера, который формируется из описанных редюсеров
