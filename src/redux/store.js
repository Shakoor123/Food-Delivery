import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import restorentReducer from "./restorentRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    restorent: restorentReducer,
  },
});
