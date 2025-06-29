import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Slider, Stack, TextField, Typography } from "@mui/material";
import {
  setserviceCardBackgroundColor,
  setserviceCardBorderColor,
  setserviceCardBorderRadious,
  setserviceCardBorderWidth,
} from "../../slices/serviceCardSlice";

export default function SettingService() {
  const [serviceCardBG, setServiceCardBG] = React.useState("");
  const [serviceCardBorderColor, setServiceCardBorderColor] = React.useState("");
  const [serviceCardBR, setServiceCardBR] = React.useState(12);
  const [serviceCardBW, setServiceCardBW] = React.useState(1);
  const dispatch = useDispatch();

  const handleServiceCardBGChange = (e) => {
    setServiceCardBG(e.target.value);
    dispatch(
      setserviceCardBackgroundColor({
        BackgroundColor: e.target.value,
      })
    );
  };

  const handleServiceCardBorderColorChange = (e) => {
    setServiceCardBorderColor(e.target.value);
    dispatch(
      setserviceCardBorderColor({
        BorderColor: e.target.value,
      })
    );
  };

  const handleServiceCardBRChange = (e) => {
    setServiceCardBR(e.target.value);
    dispatch(
      setserviceCardBorderRadious({
        BorderRadious: e.target.value,
      })
    );
  };

  const handleServiceCardBWChange = (e) => {
    setServiceCardBW(e.target.value);
    dispatch(
      setserviceCardBorderWidth({
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
      <Typography>Services Cards</Typography>
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
            value={serviceCardBG}
            onChange={handleServiceCardBGChange}
            type="text"
            style={{ width: "100%" }}
          />
        </Box>

        <Box sx={{ width: "15%" }}>
          <TextField
            name="bgColor"
            size="small"
            value={serviceCardBG}
            onChange={handleServiceCardBGChange}
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
            value={serviceCardBorderColor}
            onChange={handleServiceCardBorderColorChange}
            type="text"
            style={{ width: "100%" }}
          />
        </Box>

        <Box sx={{ width: "15%" }}>
          <TextField
            size="small"
            value={serviceCardBorderColor}
            onChange={handleServiceCardBorderColorChange}
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
                value={serviceCardBR}
                onChange={handleServiceCardBRChange}
              />
              <Typography>{serviceCardBR}</Typography>
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
                value={serviceCardBW}
                onChange={handleServiceCardBWChange}
              />
              <Typography>{serviceCardBW}</Typography>
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
