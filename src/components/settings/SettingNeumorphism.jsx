import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { setNavBarThemeThunk } from "../../slices/navbarSlice";
import { setThemeColors } from "../../slices/themeSlice";
import { setserviceCardThemeThunk } from "../../slices/serviceCardSlice";
import { setSkillCardThemeThunk } from "../../slices/skillSlice";
import { setReviewThemeThunk } from "../../slices/reviewSlice";
import { setContactThemeThunk } from "../../slices/contactSlice";
import { setExperienceThemeThunk } from "../../slices/experienceSlice";
import { setHeroThemeThunk } from "../../slices/heroSlice";

export default function SettingNeumorphism() {
  const dispatch = useDispatch();

  const themes = [
    {
      color: "#e0e5ec",
      BoxShadow: "8px 8px 16px #b8bcc1, -8px -8px 16px #ffffff",
      IconColor: "black",
      TextColor: "black",
      DarkMode: false,
    },
    {
      color: "#e0e5ec",
      BoxShadow: "inset 4px 4px 8px #b8bcc1, inset -4px -4px 8px #ffffff",
      IconColor: "black",
      TextColor: "black",
      DarkMode: false,
    },
    {
      color: "#1d222b",
      BoxShadow: "8px 8px 16px #161a21, -8px -8px 16px #262c36",
      IconColor: "whitesmoke",
      TextColor: "whitesmoke",
      DarkMode: true,
    },
    {
      color: "#1d222b",
      BoxShadow: "inset 4px 4px 8px #161a21, inset -4px -4px 8px #262c36",
      IconColor: "whitesmoke",
      TextColor: "whitesmoke",
      DarkMode: true,
    },
    // new
    {
      color: "#f0f0f3",
      BoxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
      IconColor: "#333333",
      TextColor: "#333333",
      DarkMode: false,
    },
    {
      color: "#f7f8fa",
      BoxShadow: "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff",
      IconColor: "#4a4a4a",
      TextColor: "#4a4a4a",
      DarkMode: false,
    },
    {
      color: "#e8edf1",
      BoxShadow: "10px 10px 20px #c5cacf, -10px -10px 20px #ffffff",
      IconColor: "#222831",
      TextColor: "#222831",
      DarkMode: false,
    },

    {
      color: "#f8d7da",
      BoxShadow: "8px 8px 16px #d1b5b7, -8px -8px 16px #ffffff",
      IconColor: "#721c24",
      TextColor: "#721c24",
      DarkMode: false,
    },
    {
      color: "#d0e7ff",
      BoxShadow: "8px 8px 16px #a3b9cc, -8px -8px 16px #ffffff",
      IconColor: "#0d47a1",
      TextColor: "#0d47a1",
      DarkMode: false,
    },
    {
      color: "#e2f0e4",
      BoxShadow: "inset 4px 4px 8px #c0cec2, inset -4px -4px 8px #ffffff",
      IconColor: "#2e7d32",
      TextColor: "#2e7d32",
      DarkMode: false,
    },
    {
      color: "#2f2f3a",
      BoxShadow: "8px 8px 16px #262630, -8px -8px 16px #383848",
      IconColor: "#e0e0e0",
      TextColor: "#e0e0e0",
      DarkMode: true,
    },
    {
      color: "#1e3a5f",
      BoxShadow: "6px 6px 12px #162c47, -6px -6px 12px #264a77",
      IconColor: "#cfd8dc",
      TextColor: "#cfd8dc",
      DarkMode: true,
    },
    {
      color: "#5a3e36",
      BoxShadow: "6px 6px 12px #472f28, -6px -6px 12px #6d4d43",
      IconColor: "#fce4ec",
      TextColor: "#fce4ec",
      DarkMode: true,
    },
    {
      color: "#3b3b3b",
      BoxShadow: "10px 10px 20px #2e2e2e, -10px -10px 20px #484848",
      IconColor: "#fafafa",
      TextColor: "#fafafa",
      DarkMode: true,
    },

    //new

    {
      color: "#f3e5f5",
      BoxShadow: "8px 8px 16px #d1c2d3, -8px -8px 16px #ffffff",
      IconColor: "#6a1b9a",
      TextColor: "#6a1b9a",
      DarkMode: false,
    },
    {
      color: "#e0f2f1",
      BoxShadow: "8px 8px 16px #b3c2c1, -8px -8px 16px #ffffff",
      IconColor: "#004d40",
      TextColor: "#004d40",
      DarkMode: false,
    },
    {
      color: "#fff3e0",
      BoxShadow: "8px 8px 16px #d8c3a8, -8px -8px 16px #ffffff",
      IconColor: "#ef6c00",
      TextColor: "#ef6c00",
      DarkMode: false,
    },
    {
      color: "#fde0dc",
      BoxShadow: "inset 4px 4px 8px #dcb8b5, inset -4px -4px 8px #ffffff",
      IconColor: "#c2185b",
      TextColor: "#c2185b",
      DarkMode: false,
    },
    {
      color: "#4a5568",
      BoxShadow: "8px 8px 16px #3b4354, -8px -8px 16px #596179",
      IconColor: "#f7fafc",
      TextColor: "#f7fafc",
      DarkMode: true,
    },
    {
      color: "#1f2937",
      BoxShadow: "10px 10px 20px #141a23, -10px -10px 20px #2a374b",
      IconColor: "#e2e8f0",
      TextColor: "#e2e8f0",
      DarkMode: true,
    },
    {
      color: "#37474f",
      BoxShadow: "6px 6px 12px #2c383e, -6px -6px 12px #43545e",
      IconColor: "#cfd8dc",
      TextColor: "#cfd8dc",
      DarkMode: true,
    },
  ];

  const setTheme = (theme) => {
    const color = theme.color;

    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setThemeColors({
        BackgroundColor: color,
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        BoxShadow: "none",
        DarkMode: theme.DarkMode,
        Animation: false,
      })
    );

    dispatch(
      setserviceCardThemeThunk({
        BackgroundColor: color,
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: "none",
        BoxShadow: theme.BoxShadow,
      })
    );
    dispatch(
      setExperienceThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setSkillCardThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setReviewThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setContactThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setHeroThemeThunk({
        BackgroundColor: color,
        BoxShadow: theme.BoxShadow,
        TextColor: theme.TextColor,
      })
    );
  };

  const themeCss = useSelector((state) => state.theme);

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <Box>
          <Typography>Select Theme</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 1,
            }}
          >
            {themes.map((th) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    border: `5px solid ${th.color}`,
                    borderRadius: 1,
                    background: th.color,
                  }}
                >
                  <Box
                    onClick={() => setTheme(th)}
                    sx={{
                      background: th.color,
                      width: 30,
                      height: 30,
                      borderRadius: 2,
                      cursor: "pointer",
                      boxShadow: th.BoxShadow,
                    }}
                    on
                  ></Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
