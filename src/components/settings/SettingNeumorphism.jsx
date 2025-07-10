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
    { color: "#8A2BE2", gradient: false, type: "neon", animation: false },
    {
      BoxShadow: "inset 4px 4px 8px 4px #b8bcc1, inset -4px -4px 8px #ffffff",
      gradient: true,
      type: "gradient",
      animation: false,
    },
  ];

  const neonTheme = themes.filter((th) => th.type === "neon");
  const gradientTheme = themes.filter((th) => th.type === "gradient");
  const animatedTheme = themes.filter((th) => th.type === "animated");

  const setTheme = (theme) => {
    const color = theme.color;

    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: theme.gradient ? "white" : "black",
      })
    );

    dispatch(
      setThemeColors({
        BackgroundColor: "black",
        PrimaryTextColor: "whitesmoke",
        SecondaryTextColor: "whitesmoke",
        BoxShadow: "none",
        DarkMode: true,
        Animation: theme.animation,
      })
    );

    dispatch(
      setserviceCardThemeThunk({
        BackgroundColor: theme.gradient ? color : "rgba(255, 255, 255, 0)",
        PrimaryTextColor: theme.gradient ? "white" : color,
        SecondaryTextColor: theme.gradient ? "white" : color,
        IconColor: theme.gradient ? "white" : color,
        BorderColor: color,
      })
    );
    dispatch(
      setExperienceThemeThunk({
        BackgroundColor: theme.gradient ? color : "rgba(255, 255, 255, 0)",
        TextColor: theme.gradient ? "white" : color,
        IconColor: theme.gradient ? "white" : color,
        BorderColor: color,
      })
    );

    dispatch(
      setSkillCardThemeThunk({
        BackgroundColor: theme.gradient ? color : "rgba(255, 255, 255, 0)",
        IconColor: theme.gradient ? "white" : color,
        TextColor: theme.gradient ? "white" : color,
        BorderColor: color,
      })
    );

    dispatch(
      setReviewThemeThunk({
        BackgroundColor: theme.gradient ? color : "rgba(255, 255, 255, 0)",
        IconColor: theme.gradient ? "white" : color,
        TextColor: theme.gradient ? "white" : color,
        BorderColor: color,
      })
    );

    dispatch(
      setContactThemeThunk({
        BackgroundColor: theme.gradient ? color : "rgba(255, 255, 255, 0)",
        IconColor: theme.gradient ? "white" : color,
        TextColor: theme.gradient ? "white" : color,
        BorderColor: color,
      })
    );

    dispatch(
      setHeroThemeThunk({
        BackgroundColor: color,
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
          <Typography>Neon</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {neonTheme.map((th) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    border: `5px solid ${th.gradient ? "#1976d2" : th.color}`,
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    onClick={() => setTheme(th)}
                    sx={{
                      background: th.color,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    on
                  ></Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography>Gradient</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {gradientTheme.map((th) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    border: `5px solid ${th.gradient ? "#1976d2" : th.color}`,
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    onClick={() => setTheme(th)}
                    sx={{
                      background: th.color,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    on
                  ></Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography>Animated</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {animatedTheme.map((th) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    border: `5px solid ${th.gradient ? "#1976d2" : th.color}`,
                    borderRadius: "50%",
                  }}
                >
                  <Box
                    onClick={() => setTheme(th)}
                    sx={{
                      background: th.color,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      cursor: "pointer",
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
