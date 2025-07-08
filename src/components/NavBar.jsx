import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { resetNavbar, setNavBarDarkMode } from "../slices/navbarSlice";
import { resetTheme, setThemeColors } from "../slices/themeSlice";
import {
  IconMoonFilled,
  IconSettings,
  IconSettingsFilled,
  IconSunFilled,
} from "@tabler/icons-react";
import SideDrawer from "./SideDrawer";
import {
  resetserviceCard,
  setserviceCardDarkMode,
} from "../slices/serviceCardSlice";
import { resetSkillCard, setSkillCardDarkMode } from "../slices/skillSlice";
import { resetReview, setReviewDarkModeThunk } from "../slices/reviewSlice";
import { resetContact, setContactDarkModeThunk } from "../slices/contactSlice";
import { resetExperience, setExperienceDarkModeThunk } from "../slices/experienceSlice";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSideDrwer, setOpenSideDrawer] = useState(false);

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const handleSideDrawerClose = () => {
    setOpenSideDrawer(false);
  };

  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();

  const navBarCss = useSelector((state) => state.navbar);
  const {DarkMode} = useSelector((state) => state.theme);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleUserMenuClick = (event) => setUserMenuAnchor(event.currentTarget);
  const handleUserMenuClose = () => setUserMenuAnchor(null);

  const handleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);

    if (nextMode) {
      dispatch(
        setNavBarDarkMode({
          BackgroundColor: "black",
          TextColor: "#ffffff",
        })
      );
      dispatch(
        setThemeColors({
          BackgroundColor: "black",
          PrimaryTextColor: "whitesmoke",
          SecondaryTextColor: "whitesmoke",
          BoxShadow: "none",
          DarkMode : true
        })
      );
      dispatch(
        setserviceCardDarkMode({
          BackgroundColor: "black",
          PrimaryTextColor: "whitesmoke",
          SecondaryTextColor: "whitesmoke",
          BoxShadow: "none",
        })
      );
      dispatch(
        setSkillCardDarkMode({
          TextColor: "whitesmoke",
          // BorderColor : "#FFFFFF4D"
        })
      );
      dispatch(
        setReviewDarkModeThunk({
          TextColor: "whitesmoke",
        })
      );
      dispatch(
        setContactDarkModeThunk({
          TextColor: "whitesmoke",
        })
      );
      dispatch(
        setExperienceDarkModeThunk({
          TextColor: "whitesmoke",
        })
      );
    } else {
      dispatch(resetNavbar());
      dispatch(resetTheme());
      dispatch(resetserviceCard());
      dispatch(resetSkillCard());
      dispatch(resetReview());
      dispatch(resetContact())
      dispatch(resetExperience())
    }
  };

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <Button
        key={item}
        // color="inherit"
        sx={{
          my: 1,
          mx: isMobile ? 0 : 1,
          width: isMobile ? "100%" : "auto",
          color: navBarCss.TextColor,
        }}
        href={`#${item.toLowerCase()}`}
      >
        {item}
      </Button>
    ));

  return (
    <>
      <AppBar
        // position="sticky"
        sx={{
          // background: "rgba(255, 255, 255, 0.02)", // subtle tint, almost transparent
          // background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
          background: navBarCss.BackgroundColor,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)", // Safari support
          border: "1px solid rgba(255, 255, 255, 0.1)", // soft frosted border
          borderBottomRightRadius: navBarCss.BorderRadious,
          borderBottomLeftRadius: navBarCss.BorderRadious,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)", // deeper shadow for stronger float on dark background
          transition: "all 0.3s ease",
          px: isMobile ? 0 : navBarCss.Padding,
          // py: 1,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo or Title */}
          <Typography variant="h6" component="div" color={navBarCss.TextColor}>
            Nirav Chaudhari
          </Typography>

          {/* Nav Links (desktop only) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {renderNavLinks()}
          </Box>

          {/* Right Side Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Theme Menu */}

            {DarkMode ? (
              <IconSunFilled
                color={navBarCss.TextColor}
                name="darkMode"
                onClick={() => handleDarkMode()}
                cursor="pointer"
                />
              ) : (
                <IconMoonFilled
                color={navBarCss.TextColor}
                name="darkMode"
                onClick={() => handleDarkMode()}
                cursor="pointer"
              />
            )}

            {/* <Switch
              checked={darkMode}
              onChange={() => handleDarkMode()}
              name="darkMode"
              sx={{
                color: navBarCss.TextColor,
              }}
            /> */}

            {/* User Menu */}
            <IconButton color="inherit" onClick={handleUserMenuClick}>
              <AccountCircle
                sx={{
                  color: navBarCss.TextColor,
                }}
              />
            </IconButton>
            <IconSettingsFilled
              onClick={() => setOpenSideDrawer(true)}
              cursor="pointer"
              color={navBarCss.TextColor}
            />
            <Menu
              anchorEl={userMenuAnchor}
              open={Boolean(userMenuAnchor)}
              onClose={handleUserMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleUserMenuClose}>Login</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
            </Menu>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              sx={{ display: { md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon color={navBarCss.TextColor} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <SideDrawer open={openSideDrwer} onClose={handleSideDrawerClose} />

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                component="a"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
