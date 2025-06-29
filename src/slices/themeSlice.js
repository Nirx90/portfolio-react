import { createSlice } from "@reduxjs/toolkit";

// bgcolor : "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
const initialState = {
  //   backgroundColor: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
  backgroundColor: "#ffff",
  primaryTextColor: "rgba(0, 0, 0, 0.87)",
  secondaryTextColor: "rgba(0, 0, 0, 0.6)",
  BoxShadow : "0 8px 32px rgba(31, 38, 135, 0.2)",
  DarkMode : false
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeColors: (state, action) => {
      const data = action.payload;
      state.backgroundColor = data.backgroundColor;
      state.primaryTextColor = data.primaryTextColor;
      state.secondaryTextColor = data.secondaryTextColor;
      state.BoxShadow = data.BoxShadow;
      state.DarkMode = true;
    },
    resetTheme: () => initialState,
  },
  extraReducers: (builder) => {

  },
});

export const { setThemeColors, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
