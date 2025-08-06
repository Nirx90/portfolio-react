import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Paper, TextField, Typography } from "@mui/material";
import SettingService from "./SettingService";
import { setThemeColors } from "../../slices/themeSlice";
import SettingSkills from "./SettingSkill";

export default function SettingLayout() {

  const dispatch = useDispatch();

  const [bgColor, setBgColor] = React.useState("");

  const handleChange = (e) => {
    setBgColor(e.target.value);
    dispatch(
      setThemeColors({
        BackgroundColor: e.target.value,
        PrimaryTextColor: "whitesmoke",
        SecondaryTextColor: "whitesmoke",
        BoxShadow: "none",
      })
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Typography>Theme</Typography>
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
              value={bgColor}
              onChange={handleChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "15%" }}>
            <TextField
              name="bgColor"
              size="small"
              value={bgColor}
              onChange={handleChange}
              type="color"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Paper>

      <SettingService />

      <SettingSkills />
    </Box>
  );
}
