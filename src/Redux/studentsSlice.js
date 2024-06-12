import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'studentData',
  initialState: [],
  reducers: {
    upload: (state) => state + id,
  },
})


export const {upload}= counterSlice.actions
export default counterSlice.reducer