import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import navbarReducer from "../slices/navbarSlice";
import serviceCardReducer from "../slices/serviceCardSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    navbar: navbarReducer,
    serviceCard: serviceCardReducer,
  },
});

export default store;
