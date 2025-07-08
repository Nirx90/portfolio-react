import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackgroundColor: "rgba(255, 255, 255, 0)",
  TextColor: "rgba(0, 0, 0, 0.87)",
  IconColor: "#1976D2",
  BoxShadow: "",
  BorderRadious: 5,
  BorderWidth: 1,
  Transparency: "none",
  BorderColor: "rgba(255, 255, 255, 0.3)",
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExperienceBackgroundColorThunk: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },
    setExperienceDarkModeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
    },
    setExperienceBorderWidthThunk: (state, action) => {
      const { BorderWidth } = action.payload;
      state.BorderWidth = BorderWidth;
    },
    setExperienceThemeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      state.IconColor = data.IconColor;
      state.BorderColor = data.BorderColor;
      state.BackgroundColor = data.BackgroundColor;
    },
    setExperienceTextColorThunk: (state, action) => {
      const { TextColor, IconColor } = action.payload;
      state.TextColor = TextColor;
      state.IconColor = IconColor;
    },
    setExperienceBorderColorThunk: (state, action) => {
      const { BorderColor } = action.payload;
      state.BorderColor = BorderColor;
    },
    setExperienceBorderRadiousThunk: (state, action) => {
      const { BorderRadious } = action.payload;
      state.BorderRadious = BorderRadious;
    },
    setExperienceTransparencyThunk: (state, action) => {
      const { Transparency } = action.payload;
      state.Transparency = Transparency;
    },
    resetExperience: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setExperienceBackgroundColorThunk,
  setExperienceTextColorThunk,
  setExperienceBorderWidthThunk,
  setExperienceBorderRadiousThunk,
  setExperienceBorderColorThunk,
  setExperienceTransparencyThunk,
  setExperienceDarkModeThunk,
  setExperienceThemeThunk,
  resetExperience,
} = experienceSlice.actions;

export default experienceSlice.reducer;
