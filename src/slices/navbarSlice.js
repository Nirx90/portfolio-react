import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const updateBackground = createAsyncThunk("user/fetchUser", async () => {

// });

const initialState = {
  backgroundColor: "primary",
  textColor: "white",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbarColors: (state, action) => {
      const { backgroundColor, textColor } = action.payload;
      state.backgroundColor = backgroundColor;
      state.textColor = textColor;
    },
    resetNavbar: () => initialState,
  },
  extraReducers: (builder) => {
    // builder.addCase(updateBackground, (state, action) => {
    //   state.darkMode = false;
    // });
  },
});

export const { setNavbarColors, resetNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
