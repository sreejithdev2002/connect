import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    // increment: (state, action) => (state = state + 1),
    // decrement: (state, action) => (state = state - 1),
    // incrementByAmt: (state, action) => (state = state + action.payload),
    addToDo: (state, action) => (state = state + action.payload),
  },
});

// export const { increment, decrement, incrementByAmt } = counterSlice.actions;
export const { addToDo } = counterSlice.actions;
export default counterSlice.reducer;
