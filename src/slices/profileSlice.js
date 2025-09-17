import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endpoints } from "../api/endpoints";

export const getProfileInfo = createAsyncThunk(
  "profile/get",
  async (_, { rejectWithValue }) => {  // Add getState here
    try {

      const response = await axios.get(endpoints.get_profile);

      return response.data.data;  // Return response.data instead of full response
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch themes"
      );
    }
  }
);

export const updateProfileInfo = createAsyncThunk(
  "profile/update",
  async (_, { rejectWithValue }) => {  // Add getState here
    try {

      const response = await axios.get(endpoints.get_profile);

      return response.data.data;  // Return response.data instead of full response
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch themes"
      );
    }
  }
);


const initialState = {
  headerText : "Nirav Chaudhari",
  profileImages : [],
  selectedProfileImage : "https://digitalks-crm-bucket.s3.ap-south-1.amazonaws.com/CRM-ONE/staff/profileImage/profileImage-1750330132699-570439323.jpg",
  ResumeUrl: "",
  DefaultTheme : false,
  theme : false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProfileImage = action.payload.selectedProfileImage;
        state.profileImages = action.payload.profileImages;
        state.DefaultTheme = action.payload.defaultTheme;
        state.theme = action.payload.theme;
        state.headerText = action.payload.headerText;
      })
      .addCase(getProfileInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { setThemeColors, resetTheme } = profileSlice.actions;
export default profileSlice.reducer;
