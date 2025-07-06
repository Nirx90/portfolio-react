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
import {
  resetReview,
  setReviewBackgroundColorThunk,
  setReviewBorderColorThunk,
  setReviewBorderRadiousThunk,
  setReviewBorderWidthThunk,
  setReviewTextColorThunk,
} from "../../slices/reviewSlice";
import { IconX } from "@tabler/icons-react";

export default function SettingReview({ open, onClose }) {
  const [reviewBG, setReviewBG] = React.useState("");
  const [reviewBorderColor, setReviewBorderColor] = React.useState("");
  const [reviewTextColor, setReviewTextColor] = React.useState("");
  const [reviewBR, setReviewBR] = React.useState(12);
  const [reviewBW, setReviewBW] = React.useState(1);
  const dispatch = useDispatch();

  const handleReviewBGChange = (e) => {
    setReviewBG(e.target.value);
    dispatch(
      setReviewBackgroundColorThunk({
        BackgroundColor: e.target.value,
      })
    );
  };

  const handleReviewTextColorChange = (e) => {
    setReviewTextColor(e.target.value);
    dispatch(
      setReviewTextColorThunk({
        TextColor: e.target.value,
        IconColor: e.target.value,
      })
    );
  };

  const handleReviewBorderColorChange = (e) => {
    setReviewBorderColor(e.target.value);
    dispatch(
      setReviewBorderColorThunk({
        BorderColor: e.target.value,
      })
    );
  };

  const handleReviewBRChange = (e) => {
    setReviewBR(e.target.value);
    dispatch(
      setReviewBorderRadiousThunk({
        BorderRadious: e.target.value,
      })
    );
  };

  const handleReviewBWChange = (e) => {
    setReviewBW(e.target.value);
    dispatch(
      setReviewBorderWidthThunk({
        BorderWidth: e.target.value,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetReview())
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
          <Box sx={{ width: "90%" }}>
            <TextField
              label="Background Color"
              name="bgColor"
              size="small"
              value={reviewBG}
              onChange={handleReviewBGChange}
              type="text"
              sx={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              name="bgColor"
              size="small"
              value={reviewBG}
              onChange={handleReviewBGChange}
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
              value={reviewBorderColor}
              onChange={handleReviewBorderColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              size="small"
              value={reviewBorderColor}
              onChange={handleReviewBorderColorChange}
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
              value={reviewTextColor}
              onChange={handleReviewTextColorChange}
              type="text"
              style={{ width: "100%" }}
            />
          </Box>

          <Box sx={{ width: "10%" }}>
            <TextField
              size="small"
              value={reviewTextColor}
              onChange={handleReviewTextColorChange}
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
                  value={reviewBR}
                  onChange={handleReviewBRChange}
                />
                <Typography>{reviewBR}</Typography>
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
                  value={reviewBW}
                  onChange={handleReviewBWChange}
                />
                <Typography>{reviewBW}</Typography>
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
