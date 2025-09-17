import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { resetNavbar, setNavBarDarkMode } from "../slices/navbarSlice";
import { resetTheme, setThemeColors } from "../slices/themeSlice";
import {
  IconMenu2,
  IconMoonFilled,
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
import {
  resetExperience,
  setExperienceDarkModeThunk,
} from "../slices/experienceSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { resetHero } from "../slices/heroSlice";

const navItems = [
  { label: "Home", type: "page", path: "/", id: "home", auth: false },
  { label: "Service", type: "section", id: "service", auth: false },
  { label: "Contact", type: "section", id: "contact", auth: false },
  { label: "Profile", type: "page", path: "/profile", auth: true },
  { label: "Theme", type: "page", path: "/theme", auth: true },
  { label: "Inquiry", type: "page", path: "/inquiry", auth: true },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSideDrwer, setOpenSideDrawer] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSideDrawerClose = () => {
    setOpenSideDrawer(false);
  };

  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    if (item.type === "page") {
      navigate(item.path);
    } else if (item.type === "section") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.id } });
      } else {
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navBarCss = useSelector((state) => state.navbar);
  const { DarkMode, Animation } = useSelector((state) => state.theme);
  const profileData = useSelector((state) => state.profile);
  // const { token } = useSelector((state) => state.auth);
  const  token  = localStorage.getItem("token");
  const toggleDrawer = (open) => () => setDrawerOpen(open);

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
          DarkMode: true,
          HeaderColor: "whitesmoke",
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
      dispatch(resetContact());
      dispatch(resetExperience());
      dispatch(resetHero());
    }
  };

  return (
    <>
      <AppBar
        // position="sticky"
        sx={{
          // background: "rgba(255, 255, 255, 0.02)", // subtle tint, almost transparent
          // background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
          background: navBarCss.BackgroundColor,
          backgroundSize: Animation ? "400% 400%" : "100%",
          animation: "gradientShift 8s ease infinite",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)", // Safari support
          border: "1px solid rgba(255, 255, 255, 0.1)", // soft frosted border
          borderBottomRightRadius: navBarCss.BorderRadious,
          borderBottomLeftRadius: navBarCss.BorderRadious,
          // boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)", // deeper shadow for stronger float on dark background
          boxShadow: navBarCss.BoxShadow, // deeper shadow for stronger float on dark background
          transition: "all 0.3s ease",
          px: isMobile ? 0 : navBarCss.Padding,
          // py: 1,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo or Title */}

          <Typography variant="h4" component="div" color={navBarCss.TextColor}>
            {/* || छावा || */}
            {profileData.headerText}
          </Typography>

          {/* Nav Links (desktop only) */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {navItems
                .filter(it => token ? true : !it.auth)
                .map((item) => (
                  <Button
                    key={item.label}
                    sx={{
                      my: 1,
                      mx: isMobile ? 0 : 1,
                      width: isMobile ? "100%" : "auto",
                      color: navBarCss.TextColor,
                    }}
                    onClick={() => handleClick(item)}
                  >
                    {item.label}
                  </Button>
                ))}
            </Box>
          )}

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

            <IconSettingsFilled
              onClick={() => setOpenSideDrawer(true)}
              cursor="pointer"
              color={navBarCss.TextColor}
            />

            {isMobile && (
              <IconMenu2
                color={navBarCss.TextColor}
                onClick={toggleDrawer(true)}
              />
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <SideDrawer open={openSideDrwer} onClose={handleSideDrawerClose} />

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200, p: 2 }}>
          <List>
            {navItems.filter(it => token ? true : !it.auth).map((item) => (
              <ListItem
                button
                component="a"
                key={item.label}
                onClick={() => handleClick(item)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
