import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import {
  Button,
  Drawer,
  Paper,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { resetTheme, setThemeColors } from "../slices/themeSlice";
import {
  resetserviceCard,
  setserviceCardBackgroundColor,
  setserviceCardBorderRadious,
  setserviceCardBorderWidth,
} from "../slices/serviceCardSlice";
import { resetNavbar } from "../slices/navbarSlice";

export default function SideDrawer({ open, onClose }) {
  const [tab, setTab] = React.useState("custom");
  const [serviceCardBG, setServiceCardBG] = React.useState("");
  const [serviceCardBR, setServiceCardBR] = React.useState(12);
  const [serviceCardBW, setServiceCardBW] = React.useState(1);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    bgColor: "",
    borderRadious: "",
  });

  const handleReset = () => {
    dispatch(resetTheme());
    dispatch(resetNavbar());
    dispatch(resetserviceCard());
    onClose();
  };

  const handleServiceCardBGChange = (e) => {
    setServiceCardBG(e.target.value);
    dispatch(
      setserviceCardBackgroundColor({
        BackgroundColor: e.target.value,
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
    <Drawer anchor="right" open={open} onClose={onClose} >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            aria-label="product or service selection"
          >
            <Tab
              value="theme"
              label="Theme"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
            <Tab
              value="custom"
              label="Custom"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
            <Tab
              value="drawer"
              label="Drawer"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
          </Tabs>
        </Box>

        {tab === "theme" && <Box sx={{ width: 400, p: 2 }}></Box>}
        {tab === "custom" && (
          <Box sx={{ width: 400, p: 2 }}>
            <Paper
              sx={{
                p:2,
                display: "flex",
              }}
            >
              <Box sx={{ width: "85%" }}>
                <Typography
                  sx={{
                    marginBottom: "5px",
                  }}
                >
                  Theme Background Color
                </Typography>
                <TextField
                  name="bgColor"
                  size="small"
                  value={formData.bgColor}
                  onChange={handleChange}
                  type="text"
                  style={{ width: "100%" }}
                />
              </Box>

              <Box sx={{ width: "15%" }}>
                <Typography
                  sx={{
                    marginBottom: "5px",
                  }}
                >
                  Select
                </Typography>
                <TextField
                  name="bgColor"
                  size="small"
                  value={formData.bgColor}
                  onChange={handleChange}
                  type="color"
                  style={{ width: "100%" }}
                />
              </Box>
            </Paper>

            <Paper sx={{
                p:2,
                mt:2
            }}>
              <Typography>Services Cards</Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box sx={{ width: "85%" }}>
                  <Typography
                    sx={{
                      marginBottom: "5px",
                    }}
                  >
                    Background Color
                  </Typography>
                  <TextField
                    name="bgColor"
                    size="small"
                    value={serviceCardBG}
                    onChange={handleServiceCardBGChange}
                    type="text"
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "15%" }}>
                  <Typography
                    sx={{
                      marginBottom: "5px",
                    }}
                  >
                    Select
                  </Typography>
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

              <Box sx={{
                display:'flex',
                gap:5,
                mt:2
              }}>
                <Box>
                  <Typography>Border Radious</Typography>
                  <Box sx={{ width: 200 }}>
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
                    </Stack>
                  </Box>
                </Box>
                <Box>
                  <Typography>Border Width</Typography>
                  <Box sx={{ width: 100 }}>
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
                  <Slider
                    aria-label="Volume"
                    value={20}
                    onChange={handleChange}
                  />
                </Stack>
              </Box>
            </Paper>

            {/* <Paper sx={{
                p:2,
                mt:2
            }}>
              <Typography>Skill Cards</Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box sx={{ width: "85%" }}>
                  <Typography
                    sx={{
                      marginBottom: "5px",
                    }}
                  >
                    Background Color
                  </Typography>
                  <TextField
                    name="bgColor"
                    size="small"
                    value={serviceCardBG}
                    onChange={handleServiceCardBGChange}
                    type="text"
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "15%" }}>
                  <Typography
                    sx={{
                      marginBottom: "5px",
                    }}
                  >
                    Select
                  </Typography>
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

              <Box sx={{
                display:'flex',
                gap:5,
                mt:2
              }}>
                <Box>
                  <Typography>Border Radious</Typography>
                  <Box sx={{ width: 200 }}>
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
                    </Stack>
                  </Box>
                </Box>
                <Box>
                  <Typography>Border Width</Typography>
                  <Box sx={{ width: 100 }}>
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
                  <Slider
                    aria-label="Volume"
                    value={20}
                    onChange={handleChange}
                  />
                </Stack>
              </Box>
            </Paper> */}

            <Box
              sx={{
                // position: "absolute",
                // bottom: 20,
                // right: 20,
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mt:2
              }}
            >
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
              <Button variant="contained" onClick={() => onClose()}>
                Apply
              </Button>
            </Box>
          </Box>
        )}
        {tab === "drawer" && <Box sx={{ width: 400, p: 2 }}>drawer</Box>}
      </Box>
    </Drawer>
  );
}
