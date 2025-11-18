import type { Teacher } from "../../Types/Generic";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeachersState {
  teachers: Teacher[];
  loading: boolean;
  error: string | null;
}

const initialState: TeachersState = {
  teachers: [],
  loading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setTeachers: (state, action: PayloadAction<Teacher[]>) => {
      state.teachers = action.payload;
      state.loading = false;
      state.error = null;
    },
    addTeacher: (state, action: PayloadAction<Teacher>) => {
      state.teachers.push(action.payload);
    },
    updateTeacher: (state, action: PayloadAction<Teacher>) => {
      const index = state.teachers.findIndex(
        (teacher) => (teacher.teacherId = action.payload.teacherId)
      );

      if (index !== -1) {
        state.teachers[index] = action.payload;
      }
    },
    deleteTeacher: (state, action: PayloadAction<number>) => {
      state.teachers.filter(
        (teacher) => teacher.teacherId !== action.payload.teacherId
      );
    },
  },
});

export const { addTeacher, setTeachers, updateTeacher, deleteTeacher } =
  teachersSlice.actions;

export default teachersSlice.reducers;
