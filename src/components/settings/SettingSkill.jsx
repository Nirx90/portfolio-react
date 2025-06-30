import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Slider, Stack, TextField, Typography } from "@mui/material";
import {
  setSkillCardBackgroundColor,
  setSkillCardBorderColorThunk,
  setSkillCardTextColorThunk,
  setSkillCardBorderRadious,
  setSkillCardBorderWidth,
  setSkillCardTransparency
} from "../../slices/skillSlice";

export default function SettingSkills() {
  const [skillCardBG, setSkillCardBG] = React.useState("");
  const [skillCardBorderColor, setSkillCardBorderColor] = React.useState("");
  const [skillCardTextColor, setSkillCardTextColor] = React.useState("");
  const [skillCardBR, setSkillCardBR] = React.useState(12);
  const [skillCardBW, setSkillCardBW] = React.useState(1);
  const dispatch = useDispatch();

  const handleSkillCardBGChange = (e) => {
    setSkillCardBG(e.target.value);
    dispatch(
      setSkillCardBackgroundColor({
        BackgroundColor: e.target.value,
      })
    );
  };

  const handleSkillCardTextColorChange = (e) => {
    setSkillCardTextColor(e.target.value);
    dispatch(
      setSkillCardTextColorThunk({
        TextColor: e.target.value,
        IconColor: e.target.value,
      })
    );
  };

  const handleSkillCardBorderColorChange = (e) => {
    setSkillCardBorderColor(e.target.value);
    dispatch(
      setSkillCardBorderColorThunk({
        BorderColor: e.target.value,
      })
    );
  };

  const handleSkillCardBRChange = (e) => {
    setSkillCardBR(e.target.value);
    dispatch(
      setSkillCardBorderRadious({
        BorderRadious: e.target.value,
      })
    );
  };

  const handleSkillCardBWChange = (e) => {
    setSkillCardBW(e.target.value);
    dispatch(
      setSkillCardBorderWidth({
        BorderWidth: e.target.value,
      })
    );
  };

  return (
    <Paper
      sx={{
        p: 2,
        mt: 2,
      }}
    >
      <Typography>Skills Cards</Typography>
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
            value={skillCardBG}
            onChange={handleSkillCardBGChange}
            type="text"
            style={{ width: "100%" }}
          />
        </Box>

        <Box sx={{ width: "15%" }}>
          <TextField
            name="bgColor"
            size="small"
            value={skillCardBG}
            onChange={handleSkillCardBGChange}
            type="color"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          mt: 1,
        }}
      >
        <Box sx={{ width: "85%" }}>
          <TextField
            label="Border Color"
            size="small"
            value={skillCardBorderColor}
            onChange={handleSkillCardBorderColorChange}
            type="text"
            style={{ width: "100%" }}
          />
        </Box>

        <Box sx={{ width: "15%" }}>
          <TextField
            size="small"
            value={skillCardBorderColor}
            onChange={handleSkillCardBorderColorChange}
            type="color"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 1,
        }}
      >
        <Box sx={{ width: "85%" }}>
          <TextField
            label="Icon and Text Color"
            size="small"
            value={skillCardTextColor}
            onChange={handleSkillCardTextColorChange}
            type="text"
            style={{ width: "100%" }}
          />
        </Box>

        <Box sx={{ width: "15%" }}>
          <TextField
            size="small"
            value={skillCardTextColor}
            onChange={handleSkillCardTextColorChange}
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
                value={skillCardBR}
                onChange={handleSkillCardBRChange}
              />
              <Typography>{skillCardBR}</Typography>
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
                value={skillCardBW}
                onChange={handleSkillCardBWChange}
              />
              <Typography>{skillCardBW}</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Typography>Transparency</Typography>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
          <Slider aria-label="Volume" value={20} />
        </Stack>
      </Box>
    </Paper>
  );
}
