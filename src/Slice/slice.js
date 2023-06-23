import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    incrementAsync: state => state, // Placeholder for saga action
  },
});

export const { increment, decrement, incrementAsync } = counterSlice.actions;
export default counterSlice.reducer;