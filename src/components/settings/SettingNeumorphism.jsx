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
  const [useInset, setUseInset] = React.useState(false);

  const themes = [
    {
      color: "#e0e5ec",
      BoxShadow: "8px 8px 16px #b8bcc1, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #b8bcc1, inset -4px -4px 8px #ffffff",
      IconColor: "black",
      TextColor: "black",
      DarkMode: false,
    },
    {
      color: "#1d222b",
      BoxShadow: "8px 8px 16px #161a21, -8px -8px 16px #262c36",
      InsetBoxShadow: "inset 4px 4px 8px #161a21, inset -4px -4px 8px #262c36",
      IconColor: "whitesmoke",
      TextColor: "whitesmoke",
      DarkMode: true,
    },
    {
      color: "#f0f0f3",
      BoxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff",
      IconColor: "#333333",
      TextColor: "#333333",
      DarkMode: false,
    },
    {
      color: "#e8edf1",
      BoxShadow: "10px 10px 20px #c5cacf, -10px -10px 20px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #c5cacf, inset -4px -4px 8px #ffffff",
      IconColor: "#222831",
      TextColor: "#222831",
      DarkMode: false,
    },
    {
      color: "#f8d7da",
      BoxShadow: "8px 8px 16px #d1b5b7, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d1b5b7, inset -4px -4px 8px #ffffff",
      IconColor: "#721c24",
      TextColor: "#721c24",
      DarkMode: false,
    },
    {
      color: "#d0e7ff",
      BoxShadow: "8px 8px 16px #a3b9cc, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #a3b9cc, inset -4px -4px 8px #ffffff",
      IconColor: "#0d47a1",
      TextColor: "#0d47a1",
      DarkMode: false,
    },
    {
      color: "#e2f0e4",
      BoxShadow: "8px 8px 16px #c0cec2, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #c0cec2, inset -4px -4px 8px #ffffff",
      IconColor: "#2e7d32",
      TextColor: "#2e7d32",
      DarkMode: false,
    },
    {
      color: "#2f2f3a",
      BoxShadow: "8px 8px 16px #262630, -8px -8px 16px #383848",
      InsetBoxShadow: "inset 4px 4px 8px #262630, inset -4px -4px 8px #383848",
      IconColor: "#e0e0e0",
      TextColor: "#e0e0e0",
      DarkMode: true,
    },
    {
      color: "#1e3a5f",
      BoxShadow: "6px 6px 12px #162c47, -6px -6px 12px #264a77",
      InsetBoxShadow: "inset 4px 4px 8px #162c47, inset -4px -4px 8px #264a77",
      IconColor: "#cfd8dc",
      TextColor: "#cfd8dc",
      DarkMode: true,
    },
    {
      color: "#5a3e36",
      BoxShadow: "6px 6px 12px #472f28, -6px -6px 12px #6d4d43",
      InsetBoxShadow: "inset 4px 4px 8px #472f28, inset -4px -4px 8px #6d4d43",
      IconColor: "#fce4ec",
      TextColor: "#fce4ec",
      DarkMode: true,
    },
    {
      color: "#3b3b3b",
      BoxShadow: "10px 10px 20px #2e2e2e, -10px -10px 20px #484848",
      InsetBoxShadow: "inset 4px 4px 8px #2e2e2e, inset -4px -4px 8px #484848",
      IconColor: "#fafafa",
      TextColor: "#fafafa",
      DarkMode: true,
    },
    {
      color: "#f3e5f5",
      BoxShadow: "8px 8px 16px #d1c2d3, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d1c2d3, inset -4px -4px 8px #ffffff",
      IconColor: "#6a1b9a",
      TextColor: "#6a1b9a",
      DarkMode: false,
    },
    {
      color: "#e0f2f1",
      BoxShadow: "8px 8px 16px #b3c2c1, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #b3c2c1, inset -4px -4px 8px #ffffff",
      IconColor: "#004d40",
      TextColor: "#004d40",
      DarkMode: false,
    },
    {
      color: "#fff3e0",
      BoxShadow: "8px 8px 16px #d8c3a8, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d8c3a8, inset -4px -4px 8px #ffffff",
      IconColor: "#ef6c00",
      TextColor: "#ef6c00",
      DarkMode: false,
    },
    {
      color: "#fde0dc",
      BoxShadow: "8px 8px 16px #dcb8b5, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #dcb8b5, inset -4px -4px 8px #ffffff",
      IconColor: "#c2185b",
      TextColor: "#c2185b",
      DarkMode: false,
    },
    {
      color: "#4a5568",
      BoxShadow: "8px 8px 16px #3b4354, -8px -8px 16px #596179",
      InsetBoxShadow: "inset 4px 4px 8px #3b4354, inset -4px -4px 8px #596179",
      IconColor: "#f7fafc",
      TextColor: "#f7fafc",
      DarkMode: true,
    },
    {
      color: "#1f2937",
      BoxShadow: "10px 10px 20px #141a23, -10px -10px 20px #2a374b",
      InsetBoxShadow: "inset 4px 4px 8px #141a23, inset -4px -4px 8px #2a374b",
      IconColor: "#e2e8f0",
      TextColor: "#e2e8f0",
      DarkMode: true,
    },
    {
      color: "#37474f",
      BoxShadow: "6px 6px 12px #2c383e, -6px -6px 12px #43545e",
      InsetBoxShadow: "inset 4px 4px 8px #2c383e, inset -4px -4px 8px #43545e",
      IconColor: "#cfd8dc",
      TextColor: "#cfd8dc",
      DarkMode: true,
    },
    {
      color: "#fdf6e3",
      BoxShadow: "8px 8px 16px #dcd3be, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #dcd3be, inset -4px -4px 8px #ffffff",
      IconColor: "#8d6e63",
      TextColor: "#8d6e63",
      DarkMode: false,
    },
    {
      color: "#f1f8e9",
      BoxShadow: "8px 8px 16px #cdd6c5, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #cdd6c5, inset -4px -4px 8px #ffffff",
      IconColor: "#558b2f",
      TextColor: "#558b2f",
      DarkMode: false,
    },
    {
      color: "#7b1b1b",
      BoxShadow: "8px 8px 16px #5a1212, -8px -8px 16px #9c2222",
      InsetBoxShadow: "inset 4px 4px 8px #5a1212, inset -4px -4px 8px #9c2222",
      IconColor: "#fddede",
      TextColor: "#fddede",
      DarkMode: true,
    },
    {
      color: "#1b5e20",
      BoxShadow: "8px 8px 16px #133f16, -8px -8px 16px #237f2a",
      InsetBoxShadow: "inset 4px 4px 8px #133f16, inset -4px -4px 8px #237f2a",
      IconColor: "#c8e6c9",
      TextColor: "#c8e6c9",
      DarkMode: true,
    },
    {
      color: "#fffde7",
      BoxShadow: "8px 8px 16px #dcdac4, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #dcdac4, inset -4px -4px 8px #ffffff",
      IconColor: "#a1887f",
      TextColor: "#a1887f",
      DarkMode: false,
    },

    //new
    {
      color: "#2c2c2c",
      BoxShadow: "8px 8px 16px #1e1e1e, -8px -8px 16px #3a3a3a",
      InsetBoxShadow: "inset 4px 4px 8px #1e1e1e, inset -4px -4px 8px #3a3a3a",
      IconColor: "#e0e0e0",
      TextColor: "#e0e0e0",
      DarkMode: true,
    },
    {
      color: "#1c2331",
      BoxShadow: "8px 8px 16px #11161f, -8px -8px 16px #273047",
      InsetBoxShadow: "inset 4px 4px 8px #11161f, inset -4px -4px 8px #273047",
      IconColor: "#90caf9",
      TextColor: "#90caf9",
      DarkMode: true,
    },
    {
      color: "#3b1f2b",
      BoxShadow: "8px 8px 16px #2a1620, -8px -8px 16px #4c2836",
      InsetBoxShadow: "inset 4px 4px 8px #2a1620, inset -4px -4px 8px #4c2836",
      IconColor: "#f8bbd0",
      TextColor: "#f8bbd0",
      DarkMode: true,
    },
    {
      color: "#1a3a2d",
      BoxShadow: "8px 8px 16px #10251d, -8px -8px 16px #245041",
      InsetBoxShadow: "inset 4px 4px 8px #10251d, inset -4px -4px 8px #245041",
      IconColor: "#a5d6a7",
      TextColor: "#a5d6a7",
      DarkMode: true,
    },
    {
      color: "#352f1b",
      BoxShadow: "8px 8px 16px #242011, -8px -8px 16px #463e25",
      InsetBoxShadow: "inset 8px 8px 16px #242011, inset -8px -8px 16px #463e25",
      IconColor: "#ffecb3",
      TextColor: "#ffecb3",
      DarkMode: true,
    },

    {
      color: "#4a1f2d", // Dark Pink
      BoxShadow: "8px 8px 16px #321420, -8px -8px 16px #622a3a",
      InsetBoxShadow: "inset 4px 4px 8px #321420, inset -4px -4px 8px #622a3a",
      IconColor: "#f48fb1",
      TextColor: "#f48fb1",
      DarkMode: true,
    },
    {
      color: "#4d3a10", // Dark Yellow/Gold
      BoxShadow: "8px 8px 16px #312506, -8px -8px 16px #674e1a",
      InsetBoxShadow: "inset 4px 4px 8px #312506, inset -4px -4px 8px #674e1a",
      IconColor: "#ffd54f",
      TextColor: "#ffd54f",
      DarkMode: true,
    },
    {
      color: "#5b3c0a", // Dark Saffron / Burnt Orange
      BoxShadow: "8px 8px 16px #3e2906, -8px -8px 16px #784f0e",
      InsetBoxShadow: "inset 4px 4px 8px #3e2906, inset -4px -4px 8px #784f0e",
      IconColor: "#ffb74d",
      TextColor: "#ffb74d",
      DarkMode: true,
    },
    {
      color: "#5a1e2e", // Rose Red / Deep Rose
      BoxShadow: "8px 8px 16px #3d1420, -8px -8px 16px #772a3e",
      InsetBoxShadow: "inset 4px 4px 8px #3d1420, inset -4px -4px 8px #772a3e",
      IconColor: "#ec407a",
      TextColor: "#ec407a",
      DarkMode: true,
    },
  ];

  const setTheme = (theme) => {
    const color = theme.color;

    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
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
        HeaderColor: theme.TextColor,
      })
    );

    dispatch(
      setserviceCardThemeThunk({
        BackgroundColor: color,
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: "none",
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );
    dispatch(
      setExperienceThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setSkillCardThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setReviewThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setContactThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setHeroThemeThunk({
        BackgroundColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Select Theme</Typography>
            <Button onClick={() => setUseInset(!useInset)} sx={{ mb: 1 }}>
              {useInset ? "Use Normal Shadow" : "Use Inset Shadow"}
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 1,
            }}
          >
            {themes.map((th) => (
              <Box
                key={th.color}
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
                    boxShadow: useInset ? th?.InsetBoxShadow : th.BoxShadow,
                  }}
                ></Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
