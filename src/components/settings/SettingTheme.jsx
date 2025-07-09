import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { setNavBarThemeThunk } from "../../slices/navbarSlice";
import { IconCircleFilled } from "@tabler/icons-react";
import { setThemeColors } from "../../slices/themeSlice";
import { setserviceCardThemeThunk } from "../../slices/serviceCardSlice";
import { setSkillCardThemeThunk } from "../../slices/skillSlice";
import { setReviewThemeThunk } from "../../slices/reviewSlice";
import { setContactThemeThunk } from "../../slices/contactSlice";
import { setExperienceThemeThunk } from "../../slices/experienceSlice";
import { setHeroThemeThunk } from "../../slices/heroSlice";

export default function SettingTheme() {
  const dispatch = useDispatch();

  const themes = [
    { color: "#D4FF40", gradient: false, type: "neon", animation: false },
    { color: "#00FFFF", gradient: false, type: "neon", animation: false },
    { color: "#FF4DA6", gradient: false, type: "neon", animation: false },
    { color: "#39FF14", gradient: false, type: "neon", animation: false },
    { color: "#B026FF", gradient: false, type: "neon", animation: false },
    { color: "#FF6600", gradient: false, type: "neon", animation: false },
    { color: "#FF00FF", gradient: false, type: "neon", animation: false },
    { color: "#8A2BE2", gradient: false, type: "neon", animation: false },
    {
      color: "linear-gradient(135deg, #00FFFF, #B026FF, #FF4DA6)",
      gradient: true,
      type: "gradient",
      animation: false,
    },
    {
      color: "linear-gradient(135deg, #00FFFF 0%, #B026FF 100%)",
      gradient: true,
      type: "gradient",
      animation: false,
    },
    {
      color: "linear-gradient(150deg, #AFFF00 0%, #3EF8E0 100%)",
      gradient: true,
      type: "gradient",
      animation: false,
    },
    {
      color: "linear-gradient(45deg, #B026FF 0%, #FF4DA6 100%)",
      gradient: true,
      type: "gradient",
      animation: false,
    },
    {
      color: "linear-gradient(160deg, #FF6600 0%, #00FFFF 100%)",
      gradient: true,
      type: "gradient",
      animation: false,
    },
    {
      color: "linear-gradient(135deg, #FF4081 0%, #1976d2 100%)",
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      color: "linear-gradient(135deg, #68A063 0%, #1976d2 100%)",
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      color: "linear-gradient(135deg, #589636 0%, #1976d2 100%)",
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      color: "linear-gradient(135deg, #764ABC 0%, #1976d2 100%)",
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      color: "linear-gradient(-45deg, #00ffff, #ff4da6, #b026ff, #00ffff)",
      gradient: true,
      animation: true,
      type: "animated",
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
