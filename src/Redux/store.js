import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from "../Redux/studentsSlice"

export const store = configureStore({
  reducer: {
    students: studentsReducer
  },
})