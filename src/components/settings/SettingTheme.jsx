import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { setNavBarThemeThunk } from "../../slices/navbarSlice";
import { IconCircleFilled } from "@tabler/icons-react";
import { setThemeColors } from "../../slices/themeSlice";

export default function SettingTheme() {
  const dispatch = useDispatch();

  const themes = [
    { color: "#7cf03d" },
    { color: "#D4FF40" },
    { color: "#7cf03d" },
    { color: "#7cf03d" },
  ];

  const setTheme = (color) => {
    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: "Black",
      })
    );

    dispatch(
      setThemeColors({
        backgroundColor: color,
        primaryTextColor: "whitesmoke",
        secondaryTextColor: "whitesmoke",
        BoxShadow: "none",
      })
    );
  };

  const themeCss = useSelector((state) => state.theme);

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
          backgroundColor:'black'
        }}
      >
        {themes.map((th) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 30,
                height: 30,
                border: `5px solid ${th.color}`,
                borderRadius: "50%",
              }}
            >
              <IconCircleFilled
                color={th.color}
                onClick={() => setTheme(th.color)}
                cursor="pointer"
              />
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
}
