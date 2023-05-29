import { createSlice } from "@reduxjs/toolkit";

const restorentSlice = createSlice({
  name: "restorent",
  initialState: {
    Rid: "",
  },
  reducers: {
    addRestorent: (state, action) => {
      state.Rid = action.payload;
    },
  },
});

export const { addRestorent } = restorentSlice.actions;

export default restorentSlice.reducer;
