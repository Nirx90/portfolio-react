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
  useTheme,
  Switch,
  Input,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { DarkMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { resetNavbar, setNavbarColors } from "../slices/navbarSlice";
import { resetTheme, setThemeColors } from "../slices/themeSlice";
import { IconSettings } from "@tabler/icons-react";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSideDrwer, setOpenSideDrawer] = useState(false);

  const [formData, setFormData] = useState({
    bgColor: "",
    borderRadious: "",
  });

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

  const toggleSideDrawer = () => {
    setOpenSideDrawer(true);
  };
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();

  const { backgroundColor } = useSelector((state) => state.navbar);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleUserMenuClick = (event) => setUserMenuAnchor(event.currentTarget);
  const handleUserMenuClose = () => setUserMenuAnchor(null);

  const handleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);

    if (nextMode) {
      dispatch(
        setNavbarColors({
          backgroundColor: "black",
          textColor: "#ffffff",
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
    } else {
      dispatch(resetNavbar());
      dispatch(resetTheme());
    }
  };

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <Button
        key={item}
        color="inherit"
        sx={{ my: 1, mx: isMobile ? 0 : 1, width: isMobile ? "100%" : "auto" }}
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
          // background:
          //   darkMode ?
          //   "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
          //   : "primary",
          background: backgroundColor,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)", // Safari support
          border: "1px solid rgba(255, 255, 255, 0.1)", // soft frosted border
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)", // deeper shadow for stronger float on dark background
          transition: "all 0.3s ease",
          px: 2,
          // py: 1,
          zIndex: 1100, // ensure it stays above content
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo or Title */}
          <Typography variant="h6" component="div">
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
              <DarkMode />
            </IconButton>
            <Switch
              checked={darkMode}
              onChange={() => handleDarkMode()}
              name="darkMode"
              color="primary"
            />

            {/* User Menu */}
            <IconButton color="inherit" onClick={handleUserMenuClick}>
              <AccountCircle />
            </IconButton>
            <IconSettings onClick={toggleSideDrawer} cursor="pointer" />
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
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openSideDrwer}
        onClose={() => setOpenSideDrawer(false)}
      >
        <Box sx={{ width: 400, p: 2 }}>
          <TextField 
            name="bgColor" type="text" value={formData.bgColor} 
          />
          <TextField
            name="bgColor"
            type="color"
            value={formData.bgColor}
            onChange={handleChange}
          />

          <Button sx={{
            bottom : 0
          }}>Reset</Button>
        </Box>
      </Drawer>

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
