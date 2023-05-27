import { createSlice } from "@reduxjs/toolkit";

const restorentSlice = createSlice({
  name: "cart",
  initialState: {
    id: "",
  },
  reducers: {
    addRestorent: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { addRestorent } = restorentSlice.actions;

export default restorentSlice.reducer;
