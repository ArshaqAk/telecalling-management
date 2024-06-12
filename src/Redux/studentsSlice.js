import { createSlice } from '@reduxjs/toolkit'

const studentSlice = createSlice({
  name: 'studnts',
  initialState:[],
  reducers: {
    storedata: (state,action) => {
      return action.payload;
    },
  },
})


export const {storedata}= studentSlice.actions;
export default studentSlice.reducer