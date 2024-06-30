import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const existingTodo = state.todos.find(todo => todo.id === id);
      if (existingTodo) {
        existingTodo.name = updatedTodo.name;
        existingTodo.description = updatedTodo.description;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const existingTodo = state.todos.find(todo => todo.id === action.payload);
      if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
      }
    },
    loadTodos: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export const { addTodo, editTodo, deleteTodo, toggleTodo, loadTodos } = todoSlice.actions;
export default todoSlice.reducer;
