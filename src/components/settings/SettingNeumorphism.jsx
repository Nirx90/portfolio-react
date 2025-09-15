import * as React from "react";
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

export default function SettingNeumorphism() {
  const dispatch = useDispatch();
  const [useInset, setUseInset] = React.useState(false);

  const { Themes } = useSelector((state) => state.theme);
  const ProfileData = useSelector((state) => state.profile);

  const setTheme = (theme) => {
    console.log("🚀 ~ setTheme ~ theme:", theme)
    const color = theme.color;

    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: theme.NavBarTextColor || theme.TextColor,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setThemeColors({
        BackgroundColor: color,
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        DarkMode: theme.DarkMode,
        Animation: false,
        HeaderColor: theme.TextColor,
        Name: theme.name,
        Type: theme.type,
      })
    );

    dispatch(
      setserviceCardThemeThunk({
        BackgroundColor: color,
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
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
        ButtonTextColor: theme.NavBarTextColor || "white"
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
            <Typography>Select Theme</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Use Inset</Typography>
              <Switch onClick={() => setUseInset(!useInset)} value={useInset} />
            </Box>
          </Box>

          <Box>
            <Typography>Classic</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 1,
              }}
            >
              {Themes.length > 0 &&
                Themes.filter((th) => th.type === "Neu-Classic").map((th) => (
                  <Box>
                    <Box
                      key={th.color}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        // border: `2px solid ${th.color}`,
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
                          boxShadow: useInset
                            ? th?.InsetBoxShadow
                            : th.BoxShadow,
                        }}
                      ></Box>
                    </Box>
                    <Typography textAlign="center" fontSize={9}>
                      {th.name.split(" ")[0]}{" "}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>Gradient</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 1,
              }}
            >
              {Themes.length > 0 &&
                Themes.filter((th) => th.type === "Neu-Gradient").map((th) => (
                  <Box>
                    <Box
                      key={th.color}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        // border: `2px solid ${th.color}`,
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
                          boxShadow: useInset
                            ? th?.InsetBoxShadow
                            : th.BoxShadow,
                        }}
                      ></Box>
                    </Box>
                    <Typography textAlign="center" fontSize={9}>
                      {th.name.split(" ")[0]}{" "}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>Glassmorphism</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 1,
              }}
            >
              {Themes.length > 0 &&
                Themes.filter((th) => th.type === "Neu-Glassmorphism").map((th) => (
                  <Box
                    key={th.color}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      // border: `2px solid ${th.color}`,
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
        </Box>
      </Paper>
    </Box>
  );
}
