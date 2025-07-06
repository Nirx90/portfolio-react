import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BackgroundColor: "rgba(255, 255, 255, 0)",
  TextColor: "",
  IconColor : "#ffc107",
  BoxShadow: "",
  BorderRadious: 3,
  BorderWidth: 1,
  Transparency: "none",
  BorderColor: "rgba(255, 255, 255, 0.3)",
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviewBackgroundColorThunk: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },
    setReviewDarkModeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      // state.BorderColor = data.BorderColor;
    },
    setReviewThemeThunk: (state, action) => {
      const data = action.payload;
      state.TextColor = data.TextColor;
      state.BorderColor = data.BorderColor;
      state.BackgroundColor = data.BackgroundColor;
    },
    setReviewBorderWidthThunk: (state, action) => {
      const { BorderWidth } = action.payload;
      state.BorderWidth = BorderWidth;
    },
    setReviewTextColorThunk: (state, action) => {
      const { TextColor, IconColor } = action.payload;
      state.TextColor = TextColor;
      state.IconColor = IconColor;
    },
    setReviewBorderColorThunk: (state, action) => {
      const { BorderColor } = action.payload;
      state.BorderColor = BorderColor;
    },
    setReviewBorderRadiousThunk: (state, action) => {
      const { BorderRadious } = action.payload;
      state.BorderRadious = BorderRadious;
    },
    setReviewTransparencyThunk: (state, action) => {
      const { Transparency } = action.payload;
      state.Transparency = Transparency;
    },
    resetReview: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setReviewBackgroundColorThunk,
  setReviewTextColorThunk,
  setReviewBorderWidthThunk,
  setReviewBorderRadiousThunk,
  setReviewBorderColorThunk,
  setReviewTransparencyThunk,
  setReviewDarkModeThunk,
  setReviewThemeThunk,
  resetReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;
