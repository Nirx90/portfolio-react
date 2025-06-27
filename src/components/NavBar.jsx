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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { resetNavbar, setNavBarDarkMode } from "../slices/navbarSlice";
import { resetTheme, setThemeColors } from "../slices/themeSlice";
import { IconMoonFilled, IconSettings, IconSettingsFilled } from "@tabler/icons-react";
import SideDrawer from "./SideDrawer";
import {
  resetserviceCard,
  setserviceCardDarkMode,
} from "../slices/serviceCardSlice";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSideDrwer, setOpenSideDrawer] = useState(false);

  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const handleSideDrawerClose = () => {
    setOpenSideDrawer(false);
  };

  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();

  const navBarCss = useSelector((state) => state.navbar);

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
          backgroundColor: "black",
          primaryTextColor: "whitesmoke",
          secondaryTextColor: "whitesmoke",
          BoxShadow: "none",
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
    } else {
      dispatch(resetNavbar());
      dispatch(resetTheme());
      dispatch(resetserviceCard());
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
          px: navBarCss.Padding,
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

            <IconButton color="inherit">
              <IconMoonFilled color={navBarCss.TextColor} />
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={() => handleDarkMode()}
              name="darkMode"
              // color="primary"
              sx={{
                color: navBarCss.TextColor,
              }}
            />

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
