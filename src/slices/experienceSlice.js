import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackgroundColor: "rgba(255, 255, 255, 0)",
  TextColor: "",
  IconColor : "",
  BoxShadow: "",
  BorderRadious: 3,
  BorderWidth: 1,
  Transparency: "none",
  BorderColor: "",
};

const experienceCardSlice = createSlice({
  name: "experienceCard",
  initialState,
  reducers: {
    setExperienceCardBackgroundColorThunk: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },
    setExperienceCardDarkModeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      // state.BorderColor = data.BorderColor;
    },
    setExperienceCardBorderWidthThunk: (state, action) => {
      const { BorderWidth } = action.payload;
      state.BorderWidth = BorderWidth;
    },
    setExperienceCardTextColorThunk: (state, action) => {
      const { TextColor, IconColor } = action.payload;
      state.TextColor = TextColor;
      state.IconColor = IconColor;
    },
    setExperienceCardBorderColorThunk: (state, action) => {
      const { BorderColor } = action.payload;
      state.BorderColor = BorderColor;
    },
    setExperienceCardBorderRadiousThunk: (state, action) => {
      const { BorderRadious } = action.payload;
      state.BorderRadious = BorderRadious;
    },
    setExperienceCardTransparencyThunk: (state, action) => {
      const { Transparency } = action.payload;
      state.Transparency = Transparency;
    },
    resetExperienceCard: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setExperienceCardBackgroundColorThunk,
  setExperienceCardTextColorThunk,
  setExperienceCardBorderWidthThunk,
  setExperienceCardBorderRadiousThunk,
  setExperienceCardBorderColorThunk,
  setExperienceCardTransparencyThunk,
  setExperienceCardDarkModeThunk,
  resetExperienceCard,
} = experienceCardSlice.actions;

export default experienceCardSlice.reducer;
