import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackgroundColor: "primary",
  TextColor: "white",
  BorderWidth: 2,
  BorderRadious: 25,
  Padding: 12,
  Transparency: 2,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavBarDarkMode: (state, action) => {
      const { BackgroundColor, TextColor } = action.payload;
      state.BackgroundColor = BackgroundColor;
      state.TextColor = TextColor;
    },
    setNavBarThemeThunk: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
      state.TextColor = data.TextColor;
    },
    setNavBarBackgroundColor: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },

    setNavBarTextColor: (state, action) => {
      const {TextColor} = action.payload;
      state.TextColor = TextColor;
    },
    setNavBarBorderWidth: (state, action) => {
      const { BorderWidth } = action.payload;
      state.BorderWidth = BorderWidth;
    },
    setNavBarBorderRadious: (state, action) => {
      const { BorderRadious } = action.payload;
      state.BorderRadious = BorderRadious;
    },
    setNavBarTransparency: (state, action) => {
      const { Transparency } = action.payload;
      state.Transparency = Transparency;
    },
    setNavBarPadding: (state, action) => {
      const { Padding } = action.payload;
      state.Padding = Padding;
    },
    resetNavbar: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setNavBarDarkMode,
  resetNavbar,
  setNavBarPadding,
  setNavBarBackgroundColor,
  setNavBarBorderWidth,
  setNavBarBorderRadious,
  setNavBarTransparency,
  setNavBarTextColor,
  setNavBarThemeThunk
} = navbarSlice.actions;
export default navbarSlice.reducer;
