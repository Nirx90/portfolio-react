import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, Switch, TextField, Typography } from "@mui/material";
import { setNavBarThemeThunk } from "../../slices/navbarSlice";
import { setThemeColors } from "../../slices/themeSlice";
import { setserviceCardThemeThunk } from "../../slices/serviceCardSlice";
import { setSkillCardThemeThunk } from "../../slices/skillSlice";
import { setReviewThemeThunk } from "../../slices/reviewSlice";
import { setContactThemeThunk } from "../../slices/contactSlice";
import { setExperienceThemeThunk } from "../../slices/experienceSlice";
import { setHeroThemeThunk } from "../../slices/heroSlice";

export default function SettingTheme() {
  const dispatch = useDispatch();

  const [standardDark, setStandardDark] = useState(false);
  const [gradientDark, setGradientDark] = useState(false);
  const [animatedDark, setAnimatedDark] = useState(false);

  const { Themes } = useSelector((state) => state.theme);

  const setTheme = (theme) => {
    const color = theme.color;
    let isDark = false;
    if (theme.type === "Standard") {
      isDark = standardDark;
    }
    if (theme.type === "Gradient") {
      isDark = gradientDark;
    }
    if (theme.type === "Animated") {
      isDark = animatedDark;
    }

    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: isDark ? "white" : "black",
      })
    );

    dispatch(
      setThemeColors({
        BackgroundColor: isDark ? "black" : "white",
        PrimaryTextColor: isDark ? "whitesmoke" : "black",
        SecondaryTextColor: isDark ? "whitesmoke" : "black",
        DarkMode: isDark ? true : false,
        Animation: theme.Animation,
        HeaderColor: isDark ? "white" : "black",
      })
    );

    dispatch(
      setserviceCardThemeThunk({
        BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        IconColor: theme.TextColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );
    dispatch(
      setExperienceThemeThunk({
        BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
        TextColor: theme.TextColor,
        IconColor: theme.TextColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setSkillCardThemeThunk({
        BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
        IconColor: theme.TextColor,
        TextColor: theme.TextColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setReviewThemeThunk({
        BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
        IconColor: theme.TextColor,
        TextColor: theme.TextColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setContactThemeThunk({
        BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
        IconColor: theme.TextColor,
        TextColor: theme.TextColor,
        BorderColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );

    dispatch(
      setHeroThemeThunk({
        TextColor: color,
        BackgroundColor: color,
        BoxShadow: theme.BoxShadow,
      })
    );
  };

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
            <Typography>Standard</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Dark</Typography>
              <Switch
                onClick={() => setStandardDark(!standardDark)}
                value={standardDark}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {Themes.length > 0 && Themes.filter((th) => th.type === "Standard").map((th) => {
              return (
                <Box
                  onClick={() => setTheme(th)}
                  sx={{
                    background: th.color,
                    width: 45,
                    height: 45,
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                ></Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Gradient</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Dark</Typography>
              <Switch
                onClick={() => setGradientDark(!gradientDark)}
                value={gradientDark}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {Themes.length > 0 && Themes.filter((th) => th.type === "Gradient").map((th) => {
              return (
                <Box
                  onClick={() => setTheme(th)}
                  sx={{
                    background: th.color,
                    width: 45,
                    height: 45,
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                  on
                ></Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Animated</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Dark</Typography>
              <Switch
                onClick={() => setAnimatedDark(!animatedDark)}
                value={animatedDark}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {Themes.length > 0 && Themes.filter((th) => th.type === "Animated").map((th) => {
              return (
                <Box
                  onClick={() => setTheme(th)}
                  sx={{
                    background: th.color,
                    width: 45,
                    height: 45,
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                  on
                ></Box>
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
