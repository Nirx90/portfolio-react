import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper, Slider, Stack, TextField, Typography, Dialog, IconButton,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import {
  resetserviceCard,
  setserviceCardBackgroundColor,
  setserviceCardBorderColor,
  setserviceCardBorderRadious,
  setserviceCardBorderWidth,
  setServiceCardTextColorThunk,
} from "../../slices/serviceCardSlice";
import { IconX } from "@tabler/icons-react";

export default function SettingService({ open, onClose }) {
  const [serviceCardBG, setServiceCardBG] = React.useState("");
  const [serviceCardBorderColor, setServiceCardBorderColor] = React.useState("");
  const [serviceCardBR, setServiceCardBR] = React.useState(12);
  const [serviceCardBW, setServiceCardBW] = React.useState(1);
  const [serviceCardTextColor, setServiceCardTextColor] = React.useState("");
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

  const handleServiceCardTextColorChange = (e) => {
    setServiceCardTextColor(e.target.value);
    dispatch(
      setServiceCardTextColorThunk({
        IconColor : e.target.value,
        PrimaryTextColor : e.target.value,
        SecondaryTextColor : e.target.value,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetserviceCard())
    onClose()
  }

  return (

    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Review Settings
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
            mt: 1,
          }}
        >
          <Box sx={{ width: "85%" }}>
            <TextField
              label="Icon and Text Color"
              size="small"
              value={serviceCardTextColor}
              onChange={handleServiceCardTextColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "15%" }}>
            <TextField
              size="small"
              value={serviceCardTextColor}
              onChange={handleServiceCardTextColorChange}
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
    </Dialog >

  );
}
