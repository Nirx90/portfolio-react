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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [themeMenuAnchor, setThemeMenuAnchor] = useState(null);

  const theme = useTheme();

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleUserMenuClick = (event) => setUserMenuAnchor(event.currentTarget);
  const handleUserMenuClose = () => setUserMenuAnchor(null);

  const handleThemeMenuClick = (event) =>
    setThemeMenuAnchor(event.currentTarget);
  const handleThemeMenuClose = () => setThemeMenuAnchor(null);

  const handleThemeChange = (theme) => {
    console.log(`Theme changed to: ${theme}`); // You can wire this into actual theme logic
    handleThemeMenuClose();
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
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: theme.palette.primary.main }}
        >
          Nirav Chaudhari
        </Typography>
        <Box>
          <Button color="primary" sx={{ mr: 2 }}>
            Work
          </Button>
          <Button color="primary" sx={{ mr: 2 }}>
            About
          </Button>
          <Button variant="contained" color="primary">
            Contact
          </Button>
        </Box>
      </Box> */}
      <AppBar position="sticky" color="primary">
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Theme Menu */}
            <IconButton color="inherit" onClick={handleThemeMenuClick}>
              <WbSunnyIcon />
            </IconButton>
            <Menu
              anchorEl={themeMenuAnchor}
              open={Boolean(themeMenuAnchor)}
              onClose={handleThemeMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {["Light", "Dark", "Neomorphism"].map((theme) => (
                <MenuItem key={theme} onClick={() => handleThemeChange(theme)}>
                  {theme}
                </MenuItem>
              ))}
            </Menu>

            {/* User Menu */}
            <IconButton color="inherit" onClick={handleUserMenuClick}>
              <AccountCircle />
            </IconButton>
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
