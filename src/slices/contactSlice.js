import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackgroundColor: "rgba(255, 255, 255, 0)",
  TextColor: "",
  // IconColor : "#2196f3",
  IconColor : "#1876D2",
  BoxShadow: "",
  BorderRadious: 3,
  BorderWidth: 1,
  Transparency: "none",
  BorderColor: "rgba(255, 255, 255, 0.3)",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContactBackgroundColorThunk: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },
    setContactDarkModeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      // state.BorderColor = data.BorderColor;
    },
    setContactThemeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      state.IconColor = data.IconColor;
      state.BorderColor = data.BorderColor;
      state.BackgroundColor = data.BackgroundColor;
    },
    setContactBorderWidthThunk: (state, action) => {
      const { BorderWidth } = action.payload;
      state.BorderWidth = BorderWidth;
    },
    setContactTextColorThunk: (state, action) => {
      const { TextColor, IconColor } = action.payload;
      state.TextColor = TextColor;
      state.IconColor = IconColor;
    },
    setContactBorderColorThunk: (state, action) => {
      const { BorderColor } = action.payload;
      state.BorderColor = BorderColor;
    },
    setContactBorderRadiousThunk: (state, action) => {
      const { BorderRadious } = action.payload;
      state.BorderRadious = BorderRadious;
    },
    setContactTransparencyThunk: (state, action) => {
      const { Transparency } = action.payload;
      state.Transparency = Transparency;
    },
    resetContact: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setContactBackgroundColorThunk,
  setContactTextColorThunk,
  setContactBorderWidthThunk,
  setContactBorderRadiousThunk,
  setContactBorderColorThunk,
  setContactTransparencyThunk,
  setContactDarkModeThunk,
  setContactThemeThunk,
  resetContact,
} = contactSlice.actions;

export default contactSlice.reducer;
