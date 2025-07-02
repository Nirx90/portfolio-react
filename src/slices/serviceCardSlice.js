import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // BackgroundColor: "rgba(255, 255, 255, 0.05)",
  BackgroundColor: "rgba(255, 255, 255, 0)",
  PrimaryTextColor: "rgba(0, 0, 0, 0.87)",
  SecondaryTextColor: "rgba(0, 0, 0, 0.6)",
  BoxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
  BorderRadious: "20px",
  BorderWidth: 1,
  Transparency: "none",
  BorderColor: "#FFFFFF4D",
};

const serviceCardSlice = createSlice({
  name: "serviceCard",
  initialState,
  reducers: {
    setserviceCardBackgroundColor: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
    },
    setserviceCardDarkMode: (state, action) => {
      const data = action.payload;
      state.BackgroundColor = data.BackgroundColor;
      state.PrimaryTextColor = data.PrimaryTextColor;
      state.SecondaryTextColor = data.SecondaryTextColor;
    },
    setserviceCardBorderWidth: (state, action) => {
      const { BorderWidth } = action.payload;
      state.BorderWidth = BorderWidth;
    },
    setserviceCardBorderColor: (state, action) => {
      const { BorderColor } = action.payload;
      state.BorderColor = BorderColor;
    },
    setserviceCardBorderRadious: (state, action) => {
      const { BorderRadious } = action.payload;
      state.BorderRadious = BorderRadious;
    },
    setserviceCardTransparency: (state, action) => {
      const { Transparency } = action.payload;
      state.Transparency = Transparency;
    },
    resetserviceCard: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const {
  setserviceCardBackgroundColor,
  setserviceCardBorderWidth,
  setserviceCardBorderRadious,
  setserviceCardBorderColor,
  setserviceCardTransparency,
  setserviceCardDarkMode,
  resetserviceCard,
} = serviceCardSlice.actions;

export default serviceCardSlice.reducer;
