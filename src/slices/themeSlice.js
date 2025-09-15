import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpoints } from "../api/endpoints";

export const getAllThemesThunk = createAsyncThunk(
  "theme/getall",
  async (_, { rejectWithValue }) => {  // Add getState here
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(endpoints.get_themes);

      return response.data.data;  // Return response.data instead of full response
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch themes"
      );
    }
  }
);


const initialState = {
  //   backgroundColor: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
  Name : "",
  Type : "",
  Themes: [],
  BackgroundColor: "#ffff",
  PrimaryTextColor: "rgba(0, 0, 0, 0.87)",
  SecondaryTextColor: "rgba(0, 0, 0, 0.6)",
  DarkMode: false,
  Animation: false,
  HeaderColor: "black",
  loading: false,
  error: false,
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
      state.DarkMode = data.DarkMode;
      state.Animation = data.Animation;
      state.HeaderColor = data.HeaderColor;
      state.Name = data.Name;
      state.Type = data.Type;
    },
    resetTheme: (state) => {
      state.BackgroundColor = "#ffff";
      state.PrimaryTextColor = "rgba(0, 0, 0, 0.87)";
      state.SecondaryTextColor = "rgba(0, 0, 0, 0.6)";
      state.DarkMode = false;
      state.Animation = false;
      state.HeaderColor = "black";
      state.loading = false;
      state.error = false;
      state.Name = "";
      state.Type = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllThemesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllThemesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.Themes = action.payload;
      })
      .addCase(getAllThemesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { setThemeColors, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
