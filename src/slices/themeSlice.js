import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const updateBackground = createAsyncThunk("user/fetchUser", async () => {

// });

// bgcolor : "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
const initialState = {
  //   backgroundColor: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
  backgroundColor: "primary",
  primaryTextColor: "rgba(0, 0, 0, 0.87)",
  secondaryTextColor: "rgba(0, 0, 0, 0.6)",
  BoxShadow : "0 8px 32px rgba(31, 38, 135, 0.2)"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setThemeColors: (state, action) => {
      const data = action.payload;
      state.backgroundColor = data.backgroundColor;
      state.primaryTextColor = data.primaryTextColor;
      state.secondaryTextColor = data.secondaryTextColor;
    },
    resetTheme: () => initialState,
  },
  extraReducers: (builder) => {
    // builder.addCase(updateBackground, (state, action) => {
    //   state.darkMode = false;
    // });
  },
});

export const { setThemeColors, setDarkMode, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
