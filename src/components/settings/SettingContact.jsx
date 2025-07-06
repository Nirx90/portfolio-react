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
import { resetContact, setContactBackgroundColorThunk, setContactBorderColorThunk, setContactBorderRadiousThunk, setContactBorderWidthThunk, setContactTextColorThunk } from "../../slices/contactSlice";

export default function SettingContact({ open, onClose }) {
  const [contactBG, setContactBG] = React.useState("");
  const [contactBorderColor, setContactBorderColor] = React.useState("");
  const [contactTextColor, setContactTextColor] = React.useState("");
  const [contactBR, setContactBR] = React.useState(12);
  const [contactBW, setContactBW] = React.useState(1);
  const dispatch = useDispatch();

  const handleContactBGChange = (e) => {
    setContactBG(e.target.value);
    dispatch(
      setContactBackgroundColorThunk({
        BackgroundColor: e.target.value,
      })
    );
  };

  const handleContactTextColorChange = (e) => {
    setContactTextColor(e.target.value);
    dispatch(
      setContactTextColorThunk({
        TextColor: e.target.value,
        IconColor: e.target.value,
      })
    );
  };

  const handleContactBorderColorChange = (e) => {
    setContactBorderColor(e.target.value);
    dispatch(
      setContactBorderColorThunk({
        BorderColor: e.target.value,
      })
    );
  };

  const handleContactBRChange = (e) => {
    setContactBR(e.target.value);
    dispatch(
      setContactBorderRadiousThunk({
        BorderRadious: e.target.value,
      })
    );
  };

  const handleContactBWChange = (e) => {
    setContactBW(e.target.value);
    dispatch(
      setContactBorderWidthThunk({
        BorderWidth: e.target.value,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetContact())
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Contact Settings
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
              value={contactBG}
              onChange={handleContactBGChange}
              type="text"
              sx={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              name="bgColor"
              size="small"
              value={contactBG}
              onChange={handleContactBGChange}
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
              value={contactBorderColor}
              onChange={handleContactBorderColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              size="small"
              value={contactBorderColor}
              onChange={handleContactBorderColorChange}
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
              value={contactTextColor}
              onChange={handleContactTextColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              size="small"
              value={contactTextColor}
              onChange={handleContactTextColorChange}
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
                  value={contactBR}
                  onChange={handleContactBRChange}
                />
                <Typography>{contactBR}</Typography>
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
                  value={contactBW}
                  onChange={handleContactBWChange}
                />
                <Typography>{contactBW}</Typography>
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
