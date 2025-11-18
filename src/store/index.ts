import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./slices/studentsSlice";
import departmentsReducer from "./slices/departmentsSlice";
import coursesReducer from "./slices/coursesSlice";
import registrationsReducer from "./slices/registrationsSlice";

// Load state from localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

// Save state to localStorage
function saveState(state: unknown) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // ignore write errors
  }
}

const preloadedState = loadState();

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  students: studentsReducer,
  departments: departmentsReducer,
  courses: coursesReducer,
  registrations: registrationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState({
    students: store.getState().students,
    departments: store.getState().departments,
    courses: store.getState().courses,
    registrations: store.getState().registrations,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
