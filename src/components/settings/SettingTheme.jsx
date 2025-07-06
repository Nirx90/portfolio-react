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

export default function SettingTheme() {
  const dispatch = useDispatch();

  const themes = [
    { color: "#7cf03d", gradient: false },
    { color: "#D4FF40", gradient: false },
    {
      color: "linear-gradient(135deg, #FF4081 0%, #1976d2 100%)",
      gradient: true,
    },
  ];

  const setTheme = (theme) => {
    const color = theme.color

    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: theme.gradient ? 'white' : 'black',
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
        BackgroundColor : theme.gradient ? color : 'rgba(255, 255, 255, 0)',
        PrimaryTextColor: theme.gradient ? 'white' : color,
        SecondaryTextColor: theme.gradient ? 'white' : color,
        BorderColor: color,
      })
    );
    
    dispatch(
      setSkillCardThemeThunk({
        BackgroundColor : theme.gradient ? color : 'rgba(255, 255, 255, 0)',
        IconColor: theme.gradient ? 'white' : color,
        TextColor: theme.gradient ? 'white' : color,
        BorderColor: color,
      })
    );
    
    dispatch(
      setReviewThemeThunk({
        BackgroundColor : theme.gradient ? color : 'rgba(255, 255, 255, 0)',
        IconColor: theme.gradient ? 'white' : color,
        TextColor: theme.gradient ? 'white' : color,
        BorderColor: color,
      })
    );

    dispatch(
      setContactThemeThunk({
        BackgroundColor : theme.gradient ? color : 'rgba(255, 255, 255, 0)',
        IconColor: theme.gradient ? 'white' : color,
        TextColor: theme.gradient ? 'white' : color,
        BorderColor: color,
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
          // backgroundColor:'black'
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
                border: `5px solid ${th.gradient ? "#1976d2" : th.color}`,
                borderRadius: "50%",
              }}
            >
              {/* <IconCircleFilled
                color={th.color}
                onClick={() => setTheme(th.color)}
                cursor="pointer"
                /> */}
              <Box
                onClick={() => setTheme(th)}
                sx={{
                  background: th.color,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  cursor:'pointer'
                }}
                on
              ></Box>
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
}
