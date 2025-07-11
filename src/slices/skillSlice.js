import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackgroundColor: "rgba(255, 255, 255, 0)",
  TextColor: "",
  IconColor : "",
  BoxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
  BorderRadious: 3,
  BorderWidth: 1,
  Transparency: "none",
  BorderColor: "",
};

const skillCardSlice = createSlice({
  name: "skillCard",
  initialState,
  reducers: {
    setSkillCardBackgroundColor: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },
    setSkillCardDarkMode: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      // state.BorderColor = data.BorderColor;
    },
    setSkillCardThemeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      state.BackgroundColor = data.BackgroundColor;
      state.BorderColor = data.BorderColor;
      state.IconColor = data.IconColor;
      state.BoxShadow = data.BoxShadow;
    },
    setSkillCardBorderWidth: (state, action) => {
      const { BorderWidth } = action.payload;
      state.BorderWidth = BorderWidth;
    },
    setSkillCardTextColorThunk: (state, action) => {
      const { TextColor, IconColor } = action.payload;
      state.TextColor = TextColor;
      state.IconColor = IconColor;
    },
    setSkillCardBorderColorThunk: (state, action) => {
      const { BorderColor } = action.payload;
      state.BorderColor = BorderColor;
    },
    setSkillCardBorderRadious: (state, action) => {
      const { BorderRadious } = action.payload;
      state.BorderRadious = BorderRadious;
    },
    setSkillCardTransparency: (state, action) => {
      const { Transparency } = action.payload;
      state.Transparency = Transparency;
    },
    resetSkillCard: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setSkillCardBackgroundColor,
  setSkillCardTextColorThunk,
  setSkillCardBorderWidth,
  setSkillCardBorderRadious,
  setSkillCardBorderColorThunk,
  setSkillCardTransparency,
  setSkillCardDarkMode,
  setSkillCardThemeThunk,
  resetSkillCard,
} = skillCardSlice.actions;

export default skillCardSlice.reducer;
