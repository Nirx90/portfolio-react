import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#4b5563",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontWeightLight: 400,
    fontWeightRegular: 400,
  },
  palette: {
    primary: {
      main: "#5D5FEF",
    },
    text: {
      primary: "#1e3354",
      secondary: "#667085",
    },
    background: {
      default: "#f4f4f5",
    },
    success: {
      main: "#59B259",
    },
    error: {
      main: "#ff4c4c",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#007bff",
    },
    action: {
      active: "#000000",
    },
  },
});

export default theme;
