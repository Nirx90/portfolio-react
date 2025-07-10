import { createSlice } from "@reduxjs/toolkit";

// bgcolor : "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
const initialState = {
  //   backgroundColor: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
  BackgroundColor: "#ffff",
  PrimaryTextColor: "rgba(0, 0, 0, 0.87)",
  SecondaryTextColor: "rgba(0, 0, 0, 0.6)",
  BoxShadow : "0 8px 32px rgba(31, 38, 135, 0.2)",
  DarkMode : false,
  Animation : false
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeColors: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
      state.PrimaryTextColor = data.PrimaryTextColor;
      state.SecondaryTextColor = data.SecondaryTextColor;
      state.BoxShadow = data.BoxShadow;
      state.DarkMode = data.DarkMode;
      state.Animation = data.Animation;
    },
    resetTheme: () => initialState,
  },
  extraReducers: (builder) => {

  },
});

export const { setThemeColors, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
