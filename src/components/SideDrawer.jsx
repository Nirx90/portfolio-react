import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { Button, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { resetTheme } from "../slices/themeSlice";
import { resetserviceCard } from "../slices/serviceCardSlice";
import { resetNavbar } from "../slices/navbarSlice";
import SettingNavBar from "./settings/SettingNavBar";
import SettingLayout from "./settings/SettingLayout";

export default function SideDrawer({ open, onClose }) {
  const [tab, setTab] = React.useState("navbar");
  const dispatch = useDispatch();

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleReset = () => {
    dispatch(resetTheme());
    dispatch(resetNavbar());
    dispatch(resetserviceCard());
    setServiceCardBR(12);
    setServiceCardBW(1);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width={isMobile ? 300 : 450}>
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
              value="navbar"
              label="Nav Bar"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
            <Tab
              value="layout"
              label="Layout"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
            <Tab
              value="drawer"
              label="Drawer"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
            <Tab
              value="neomorphism"
              label="Neomorphism"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
          </Tabs>
        </Box>

        {tab === "theme" && <Box sx={{ p: 2 }}></Box>}
        {tab === "navbar" && <SettingNavBar />}
        {tab === "layout" && <SettingLayout />}
        {tab === "drawer" && <Box sx={{ p: 2 }}>drawer</Box>}

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
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
      </Box>
    </Drawer>
  );
}
