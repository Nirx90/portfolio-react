import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { IconX } from "@tabler/icons-react";
import { resetExperience, setExperienceBackgroundColorThunk, setExperienceBorderColorThunk, setExperienceBorderRadiousThunk, setExperienceBorderWidthThunk, setExperienceTextColorThunk } from "../../slices/experienceSlice";

export default function SettingExperience({ open, onClose }) {
  const [experienceBG, setExperienceBG] = React.useState("");
  const [experienceBorderColor, setExperienceBorderColor] = React.useState("");
  const [experienceTextColor, setExperienceTextColor] = React.useState("");
  const [experienceBR, setExperienceBR] = React.useState(12);
  const [experienceBW, setExperienceBW] = React.useState(1);
  const dispatch = useDispatch();

  const handleExperienceBGChange = (e) => {
    setExperienceBG(e.target.value);
    dispatch(
      setExperienceBackgroundColorThunk({
        BackgroundColor: e.target.value,
      })
    );
  };

  const handleExperienceTextColorChange = (e) => {
    setExperienceTextColor(e.target.value);
    dispatch(
      setExperienceTextColorThunk({
        TextColor: e.target.value,
        IconColor: e.target.value,
      })
    );
  };

  const handleExperienceBorderColorChange = (e) => {
    setExperienceBorderColor(e.target.value);
    dispatch(
      setExperienceBorderColorThunk({
        BorderColor: e.target.value,
      })
    );
  };

  const handleExperienceBRChange = (e) => {
    setExperienceBR(e.target.value);
    dispatch(
      setExperienceBorderRadiousThunk({
        BorderRadious: e.target.value,
      })
    );
  };

  const handleExperienceBWChange = (e) => {
    setExperienceBW(e.target.value);
    dispatch(
      setExperienceBorderWidthThunk({
        BorderWidth: e.target.value,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetExperience())
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Experience Settings
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IconX />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box
          sx={{
            display: "flex",
            mt: 1,
          }}
        >
          <Box sx={{ width: "90%" }}>
            <TextField
              label="Background Color"
              name="bgColor"
              size="small"
              value={experienceBG}
              onChange={handleExperienceBGChange}
              type="text"
              sx={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              name="bgColor"
              size="small"
              value={experienceBG}
              onChange={handleExperienceBGChange}
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
          <Box sx={{ width: "90%" }}>
            <TextField
              label="Border Color"
              size="small"
              value={experienceBorderColor}
              onChange={handleExperienceBorderColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              size="small"
              value={experienceBorderColor}
              onChange={handleExperienceBorderColorChange}
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
          <Box sx={{ width: "90%" }}>
            <TextField
              label="Icon and Text Color"
              size="small"
              value={experienceTextColor}
              onChange={handleExperienceTextColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              size="small"
              value={experienceTextColor}
              onChange={handleExperienceTextColorChange}
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
                  value={experienceBR}
                  onChange={handleExperienceBRChange}
                />
                <Typography>{experienceBR}</Typography>
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
                  value={experienceBW}
                  onChange={handleExperienceBWChange}
                />
                <Typography>{experienceBW}</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Typography>Transparency</Typography>
        <Box sx={{ width: 200 }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", mb: 1 }}
          >
            <Slider aria-label="Volume" value={20} />
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 2,
          }}
        >
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" onClick={() => onClose()}>
            Apply
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
