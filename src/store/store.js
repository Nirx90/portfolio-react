import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import navbarReducer from "../slices/navbarSlice";
import serviceCardReducer from "../slices/serviceCardSlice";
import skillCardReducer from "../slices/skillSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    navbar: navbarReducer,
    serviceCard: serviceCardReducer,
    skillCard: skillCardReducer,
  },
});

export default store;
