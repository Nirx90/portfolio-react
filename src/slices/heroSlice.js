import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackgroundColor: "linear-gradient(45deg, #1976d2 20%, #4dabf5 80%)",
  TextColor: "linear-gradient(45deg, #1976d2 20%, #4dabf5 80%)",
  IconColor : "#1876D2",
  BoxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setHeroBackgroundColorThunk: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },

    setHeroThemeThunk: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
      state.BoxShadow = data.BoxShadow;
      state.TextColor = data.TextColor;
    },
    setHeroTextColorThunk: (state, action) => {
      const { TextColor, IconColor } = action.payload;
      state.TextColor = TextColor;
      state.IconColor = IconColor;
    },
    resetHero: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setHeroBackgroundColorThunk,
  setHeroTextColorThunk,
  setHeroThemeThunk,
  resetHero,
} = heroSlice.actions;

export default heroSlice.reducer;
