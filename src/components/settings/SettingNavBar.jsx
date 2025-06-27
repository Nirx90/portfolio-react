import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Slider, Stack, TextField, Typography } from "@mui/material";
import {
  setNavBarBackgroundColor,
  setNavBarBorderRadious,
  setNavBarBorderWidth,
  setNavBarPadding,
  setNavBarTextColor,
} from "../../slices/navbarSlice";

export default function SettingNavBar() {

  const dispatch = useDispatch();

  const navBarCss = useSelector((state)=> state.navbar)

  const handleNavBGChange = (e) => {
    dispatch(
      setNavBarBackgroundColor({
        BackgroundColor: e.target.value,
      })
    );
  };

  const handleNavTextColorChange = (e) => {
    dispatch(
      setNavBarTextColor({
        TextColor: e.target.value,
      })
    );
  };

  const handleNavBRChange = (e) => {
    dispatch(
      setNavBarBorderRadious({
        BorderRadious: e.target.value,
      })
    );
  };

  const handleNavBWChange = (e) => {
    dispatch(
      setNavBarBorderWidth({
        BorderWidth: e.target.value,
      })
    );
  };

  const handleNavPaddingChange = (e) => {
    dispatch(
      setNavBarPadding({
        Padding: e.target.value,
      })
    );
  };

  return (
    <Box sx={{ width: 400, p: 2 }}>
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            mt: 1,
          }}
        >
          <Box sx={{ width: "85%" }}>
            <TextField
              label="Background Color"
              name="bgColor"
              size="small"
              value={navBarCss.BackgroundColor}
              onChange={handleNavBGChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "15%" }}>
            <TextField
              name="bgColor"
              size="small"
              value={navBarCss.BackgroundColor}
              onChange={handleNavBGChange}
              type="color"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: 2,
          }}
        >
          <Box sx={{ width: "85%" }}>
            <TextField
              label="Text & Icon Color"
              name="bgColor"
              size="small"
              value={navBarCss.TextColor}
              onChange={handleNavTextColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "15%" }}>
            <TextField
              name="bgColor"
              size="small"
              value={navBarCss.TextColor}
              onChange={handleNavTextColorChange}
              type="color"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            mt: 2,
          }}
        >
          <Box>
            <Typography>Border Radious</Typography>
            <Box sx={{ width: 130 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Slider
                  aria-label="Border-Radious"
                  value={navBarCss.BorderRadious}
                  onChange={handleNavBRChange}
                />
                <Typography>{navBarCss.BorderRadious}</Typography>
              </Stack>
            </Box>
          </Box>
          <Box>
            <Typography>Border Width</Typography>
            <Box sx={{ width: 130 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Slider
                  aria-label="Border-Width"
                  value={navBarCss.BorderWidth}
                  onChange={handleNavBWChange}
                />
                <Typography>{navBarCss.BorderWidth}</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography>Padding</Typography>
          <Box sx={{ width: 130 }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ alignItems: "center", mb: 1 }}
            >
              <Slider
                aria-label="Border-Width"
                value={navBarCss.Padding}
                onChange={handleNavPaddingChange}
              />
              <Typography>{navBarCss.Padding}</Typography>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
