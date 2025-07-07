import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import navbarReducer from "../slices/navbarSlice";
import serviceCardReducer from "../slices/serviceCardSlice";
import skillCardReducer from "../slices/skillSlice";
import experienceReducer from "../slices/experienceSlice";
import reviewReducer from "../slices/reviewSlice";
import contactReducer from "../slices/contactSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    navbar: navbarReducer,
    serviceCard: serviceCardReducer,
    skillCard: skillCardReducer,
    experience: experienceReducer,
    review: reviewReducer,
    contact: contactReducer,
  },
});

export default store;
