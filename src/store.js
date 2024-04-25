import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/counterSlice'; // Assuming this is the reducer for the counter slice
import addReducer from "./feature/itemSlice"; // Assuming this is the reducer for the item slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: addReducer,
  }
});
