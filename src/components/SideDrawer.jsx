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
import { resetSkillCard } from "../slices/skillSlice";
import SettingTheme from "./settings/SettingTheme";
import { resetReview } from "../slices/reviewSlice";
import { resetContact } from "../slices/contactSlice";
import { resetExperience } from "../slices/experienceSlice";
import { resetHero } from "../slices/heroSlice";
import SettingNeumorphism from "./settings/SettingNeumorphism";
import Auth from "./settings/Auth";

export default function SideDrawer({ open, onClose }) {
  const [tab, setTab] = React.useState("theme");
  const dispatch = useDispatch();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleReset = () => {
    dispatch(resetTheme());
    dispatch(resetNavbar());
    dispatch(resetserviceCard());
    dispatch(resetSkillCard());
    dispatch(resetReview());
    dispatch(resetContact());
    dispatch(resetExperience());
    dispatch(resetHero());
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        width={isMobile ? 300 : 450}
        sx={
          {
            // backgroundColor:'black'
          }
        }
      >
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
            {/* <Tab
              value="drawer"
              label="Drawer"
              sx={{ textTransform: "none", minWidth: "unset" }}
            /> */}
            <Tab
              value="neomorphism"
              label="Neomorphism"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
            <Tab
              value="auth"
              label="Auth"
              sx={{ textTransform: "none", minWidth: "unset" }}
            />
          </Tabs>
        </Box>

        {tab === "theme" && <SettingTheme />}
        {tab === "navbar" && <SettingNavBar />}
        {tab === "layout" && <SettingLayout />}
        {tab === "neomorphism" && <SettingNeumorphism />}
        {tab === "auth" && <Auth />}

        <Box
          sx={{
            position: "relative",
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
