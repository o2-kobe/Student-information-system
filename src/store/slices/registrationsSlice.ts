import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Registration } from "../../Types/Generic";

interface RegistrationsState {
  registrations: Registration[];
  loading: boolean;
  error: string | null;
}

const initialState: RegistrationsState = {
  registrations: [],
  loading: false,
  error: null,
};

const registrationsSlice = createSlice({
  name: "registrations",
  initialState,
  reducers: {
    setRegistrations: (state, action: PayloadAction<Registration[]>) => {
      state.registrations = action.payload;
      state.loading = false;
      state.error = null;
    },
    addRegistration: (state, action: PayloadAction<Registration>) => {
      state.registrations.push(action.payload);
    },
    updateRegistration: (state, action: PayloadAction<Registration>) => {
      const index = state.registrations.findIndex(
        (registration) =>
          registration.studentID === action.payload.studentID &&
          registration.courseID === action.payload.courseID
      );
      if (index !== -1) {
        state.registrations[index] = action.payload;
      }
    },
    deleteRegistration: (
      state,
      action: PayloadAction<{ studentID: number; courseID: number }>
    ) => {
      state.registrations = state.registrations.filter(
        (registration) =>
          !(
            registration.studentID === action.payload.studentID &&
            registration.courseID === action.payload.courseID
          )
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setRegistrations,
  addRegistration,
  updateRegistration,
  deleteRegistration,
  setLoading,
  setError,
} = registrationsSlice.actions;

export default registrationsSlice.reducer;
