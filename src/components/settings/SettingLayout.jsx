import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Paper, TextField, Typography } from "@mui/material";
import SettingService from "./SettingService";
import { setThemeColors } from "../../slices/themeSlice";

export default function SettingLayout() {

  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    bgColor: "",
    borderRadious: "",
  });

  const themeCss = useSelector((state) => state.theme);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    dispatch(
      setThemeColors({
        backgroundColor: formData.bgColor,
        primaryTextColor: "whitesmoke",
        secondaryTextColor: "whitesmoke",
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
              value={formData.bgColor}
              onChange={handleChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "15%" }}>
            <TextField
              name="bgColor"
              size="small"
              value={formData.bgColor}
              onChange={handleChange}
              type="color"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Paper>

      <SettingService />
    </Box>
  );
}
