import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function Footer() {
  const navBarCss = useSelector((state) => state.navbar);
  const { DarkMode, Animation } = useSelector((state) => state.theme);
  return (
    <Box
      sx={{
        mt:5,
        py: 3,
        background: navBarCss.BackgroundColor,
        backgroundSize: Animation ? "400% 400%" : "100%",
        animation: "gradientShift 8s ease infinite",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Box>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: DarkMode ? "whitesmoke" : "black" }}
        >
          © {new Date().getFullYear()} Chaudhari Nirav. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
