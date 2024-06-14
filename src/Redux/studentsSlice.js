import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    studentsData: [],
    token: '',
  },
  reducers: {
    storedata: (state, action) => {
      state.studentsData = action.payload;
    },
    storeToken: (state, action) => {
      state.token = action.payload;
    }
  },
});

export const { storedata, storeToken } = studentSlice.actions;
export default studentSlice.reducer;
