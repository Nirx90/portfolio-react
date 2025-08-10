import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Button, Paper, Switch, TextField, Typography } from "@mui/material";
import { setNavBarThemeThunk } from "../../slices/navbarSlice";
import { setThemeColors } from "../../slices/themeSlice";
import { setserviceCardThemeThunk } from "../../slices/serviceCardSlice";
import { setSkillCardThemeThunk } from "../../slices/skillSlice";
import { setReviewThemeThunk } from "../../slices/reviewSlice";
import { setContactThemeThunk } from "../../slices/contactSlice";
import { setExperienceThemeThunk } from "../../slices/experienceSlice";
import { setHeroThemeThunk } from "../../slices/heroSlice";

export default function SettingNeumorphism() {
  const dispatch = useDispatch();
  const [useInset, setUseInset] = React.useState(false);

  const themes = [
    {
      name: "1",
      color: "#e0e5ec",
      BoxShadow: "8px 8px 16px #b8bcc1, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #b8bcc1, inset -4px -4px 8px #ffffff",
      IconColor: "black",
      TextColor: "black",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "2",
      color: "#1d222b",
      BoxShadow: "8px 8px 16px #161a21, -8px -8px 16px #262c36",
      InsetBoxShadow: "inset 4px 4px 8px #161a21, inset -4px -4px 8px #262c36",
      IconColor: "whitesmoke",
      TextColor: "whitesmoke",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "3",
      color: "#f0f0f3",
      BoxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff",
      IconColor: "#333333",
      TextColor: "#333333",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "4",
      color: "#e8edf1",
      BoxShadow: "10px 10px 20px #c5cacf, -10px -10px 20px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #c5cacf, inset -4px -4px 8px #ffffff",
      IconColor: "#222831",
      TextColor: "#222831",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "5",
      color: "#f8d7da",
      BoxShadow: "8px 8px 16px #d1b5b7, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d1b5b7, inset -4px -4px 8px #ffffff",
      IconColor: "#721c24",
      TextColor: "#721c24",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "6",
      color: "#d0e7ff",
      BoxShadow: "8px 8px 16px #a3b9cc, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #a3b9cc, inset -4px -4px 8px #ffffff",
      IconColor: "#0d47a1",
      TextColor: "#0d47a1",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "7",
      color: "#e2f0e4",
      BoxShadow: "8px 8px 16px #c0cec2, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #c0cec2, inset -4px -4px 8px #ffffff",
      IconColor: "#2e7d32",
      TextColor: "#2e7d32",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "8",
      color: "#2f2f3a",
      BoxShadow: "8px 8px 16px #262630, -8px -8px 16px #383848",
      InsetBoxShadow: "inset 4px 4px 8px #262630, inset -4px -4px 8px #383848",
      IconColor: "#e0e0e0",
      TextColor: "#e0e0e0",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "9",
      color: "#1e3a5f",
      BoxShadow: "6px 6px 12px #162c47, -6px -6px 12px #264a77",
      InsetBoxShadow: "inset 4px 4px 8px #162c47, inset -4px -4px 8px #264a77",
      IconColor: "#cfd8dc",
      TextColor: "#cfd8dc",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "10",
      color: "#5a3e36",
      BoxShadow: "6px 6px 12px #472f28, -6px -6px 12px #6d4d43",
      InsetBoxShadow: "inset 4px 4px 8px #472f28, inset -4px -4px 8px #6d4d43",
      IconColor: "#fce4ec",
      TextColor: "#fce4ec",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "11",
      color: "#3b3b3b",
      BoxShadow: "10px 10px 20px #2e2e2e, -10px -10px 20px #484848",
      InsetBoxShadow: "inset 4px 4px 8px #2e2e2e, inset -4px -4px 8px #484848",
      IconColor: "#fafafa",
      TextColor: "#fafafa",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "12",
      color: "#f3e5f5",
      BoxShadow: "8px 8px 16px #d1c2d3, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d1c2d3, inset -4px -4px 8px #ffffff",
      IconColor: "#6a1b9a",
      TextColor: "#6a1b9a",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "13",
      color: "#e0f2f1",
      BoxShadow: "8px 8px 16px #b3c2c1, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #b3c2c1, inset -4px -4px 8px #ffffff",
      IconColor: "#004d40",
      TextColor: "#004d40",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "14",
      color: "#fff3e0",
      BoxShadow: "8px 8px 16px #d8c3a8, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #d8c3a8, inset -4px -4px 8px #ffffff",
      IconColor: "#ef6c00",
      TextColor: "#ef6c00",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "15",
      color: "#fde0dc",
      BoxShadow: "8px 8px 16px #dcb8b5, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #dcb8b5, inset -4px -4px 8px #ffffff",
      IconColor: "#c2185b",
      TextColor: "#c2185b",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "16",
      color: "#4a5568",
      BoxShadow: "8px 8px 16px #3b4354, -8px -8px 16px #596179",
      InsetBoxShadow: "inset 4px 4px 8px #3b4354, inset -4px -4px 8px #596179",
      IconColor: "#f7fafc",
      TextColor: "#f7fafc",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "17",
      color: "#1f2937",
      BoxShadow: "10px 10px 20px #141a23, -10px -10px 20px #2a374b",
      InsetBoxShadow: "inset 4px 4px 8px #141a23, inset -4px -4px 8px #2a374b",
      IconColor: "#e2e8f0",
      TextColor: "#e2e8f0",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "18",
      color: "#37474f",
      BoxShadow: "6px 6px 12px #2c383e, -6px -6px 12px #43545e",
      InsetBoxShadow: "inset 4px 4px 8px #2c383e, inset -4px -4px 8px #43545e",
      IconColor: "#cfd8dc",
      TextColor: "#cfd8dc",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "19",
      color: "#fdf6e3",
      BoxShadow: "8px 8px 16px #dcd3be, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #dcd3be, inset -4px -4px 8px #ffffff",
      IconColor: "#8d6e63",
      TextColor: "#8d6e63",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "20",
      color: "#f1f8e9",
      BoxShadow: "8px 8px 16px #cdd6c5, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #cdd6c5, inset -4px -4px 8px #ffffff",
      IconColor: "#558b2f",
      TextColor: "#558b2f",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "21",
      color: "#7b1b1b",
      BoxShadow: "8px 8px 16px #5a1212, -8px -8px 16px #9c2222",
      InsetBoxShadow: "inset 4px 4px 8px #5a1212, inset -4px -4px 8px #9c2222",
      IconColor: "#fddede",
      TextColor: "#fddede",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "22",
      color: "#1b5e20",
      BoxShadow: "8px 8px 16px #133f16, -8px -8px 16px #237f2a",
      InsetBoxShadow: "inset 4px 4px 8px #133f16, inset -4px -4px 8px #237f2a",
      IconColor: "#c8e6c9",
      TextColor: "#c8e6c9",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "23",
      color: "#fffde7",
      BoxShadow: "8px 8px 16px #dcdac4, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #dcdac4, inset -4px -4px 8px #ffffff",
      IconColor: "#a1887f",
      TextColor: "#a1887f",
      DarkMode: false,
      type: "classic",
    },
    {
      name: "24",
      color: "#2c2c2c",
      BoxShadow: "8px 8px 16px #1e1e1e, -8px -8px 16px #3a3a3a",
      InsetBoxShadow: "inset 4px 4px 8px #1e1e1e, inset -4px -4px 8px #3a3a3a",
      IconColor: "#e0e0e0",
      TextColor: "#e0e0e0",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "25",
      color: "#1c2331",
      BoxShadow: "8px 8px 16px #11161f, -8px -8px 16px #273047",
      InsetBoxShadow: "inset 4px 4px 8px #11161f, inset -4px -4px 8px #273047",
      IconColor: "#90caf9",
      TextColor: "#90caf9",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "26",
      color: "#3b1f2b",
      BoxShadow: "8px 8px 16px #2a1620, -8px -8px 16px #4c2836",
      InsetBoxShadow: "inset 4px 4px 8px #2a1620, inset -4px -4px 8px #4c2836",
      IconColor: "#f8bbd0",
      TextColor: "#f8bbd0",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "27",
      color: "#1a3a2d",
      BoxShadow: "8px 8px 16px #10251d, -8px -8px 16px #245041",
      InsetBoxShadow: "inset 4px 4px 8px #10251d, inset -4px -4px 8px #245041",
      IconColor: "#a5d6a7",
      TextColor: "#a5d6a7",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "28",
      color: "#352f1b",
      BoxShadow: "8px 8px 16px #242011, -8px -8px 16px #463e25",
      InsetBoxShadow:
        "inset 8px 8px 16px #242011, inset -8px -8px 16px #463e25",
      IconColor: "#ffecb3",
      TextColor: "#ffecb3",
      DarkMode: true,
      type: "classic",
    },

    {
      name: "29",
      color: "#4a1f2d", // Dark Pink
      BoxShadow: "8px 8px 16px #321420, -8px -8px 16px #622a3a",
      InsetBoxShadow: "inset 4px 4px 8px #321420, inset -4px -4px 8px #622a3a",
      IconColor: "#f48fb1",
      TextColor: "#f48fb1",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "30",
      color: "#4d3a10", // Dark Yellow/Gold
      BoxShadow: "8px 8px 16px #312506, -8px -8px 16px #674e1a",
      InsetBoxShadow: "inset 4px 4px 8px #312506, inset -4px -4px 8px #674e1a",
      IconColor: "#ffd54f",
      TextColor: "#ffd54f",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "31",
      color: "#5b3c0a", // Dark Saffron / Burnt Orange
      BoxShadow: "8px 8px 16px #3e2906, -8px -8px 16px #784f0e",
      InsetBoxShadow: "inset 4px 4px 8px #3e2906, inset -4px -4px 8px #784f0e",
      IconColor: "#ffb74d",
      TextColor: "#ffb74d",
      DarkMode: true,
      type: "classic",
    },
    {
      name: "32",
      color: "#5a1e2e", // Rose Red / Deep Rose
      BoxShadow: "8px 8px 16px #3d1420, -8px -8px 16px #772a3e",
      InsetBoxShadow: "inset 4px 4px 8px #3d1420, inset -4px -4px 8px #772a3e",
      IconColor: "#ec407a",
      TextColor: "#ec407a",
      DarkMode: true,
      type: "classic",
    },

    //gradient
    {
      name: "1",
      color: "linear-gradient(135deg, #f8e1e7, #ffffff)",
      BoxShadow: "8px 8px 16px #dcb8c5, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #dcb8c5, inset -4px -4px 8px #ffffff",
      IconColor: "#8c4b5a",
      TextColor: "#4a2c31",
      DarkMode: false,
      type: "gradient",
    },
    {
      name: "2",
      color: "linear-gradient(135deg, #dbeafe, #f0f4f8)",
      BoxShadow: "8px 8px 16px #b2c2d6, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #b2c2d6, inset -4px -4px 8px #ffffff",
      IconColor: "#3b82f6",
      TextColor: "#1e3a8a",
      DarkMode: false,
      type: "gradient",
    },
    {
      name: "3",
      color: "linear-gradient(145deg, #fdf2e9, #ffffff)",
      BoxShadow: "8px 8px 16px #e0d1c8, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #e0d1c8, inset -4px -4px 8px #ffffff",
      IconColor: "#d97706",
      TextColor: "#92400e",
      DarkMode: false,
      type: "gradient",
    },
    {
      name: "4",
      color: "linear-gradient(135deg, #d9f8f2, #ffffff)",
      BoxShadow: "8px 8px 16px #b2d8cf, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #b2d8cf, inset -4px -4px 8px #ffffff",
      IconColor: "#10b981",
      TextColor: "#065f46",
      DarkMode: false,
      type: "gradient",
    },

    {
      name: "5",
      color: "linear-gradient(145deg, #2a2a40, #1e1e30)",
      BoxShadow: "8px 8px 16px #1a1a2a, -8px -8px 16px #343454",
      InsetBoxShadow: "inset 4px 4px 8px #1a1a2a, inset -4px -4px 8px #343454",
      IconColor: "#9ba0f2",
      TextColor: "#f0f0f3",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "6",
      color: "linear-gradient(135deg, #3d2d2d, #2a1f1f)",
      BoxShadow: "8px 8px 16px #1a1414, -8px -8px 16px #503838",
      InsetBoxShadow: "inset 4px 4px 8px #1a1414, inset -4px -4px 8px #503838",
      IconColor: "#f28b82",
      TextColor: "#fce8e6",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "7",
      color: "linear-gradient(145deg, #233d3d, #1a2e2e)",
      BoxShadow: "8px 8px 16px #0f1f1f, -8px -8px 16px #335050",
      InsetBoxShadow: "inset 4px 4px 8px #0f1f1f, inset -4px -4px 8px #335050",
      IconColor: "#67e8f9",
      TextColor: "#d1fafc",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "8",
      color: "linear-gradient(135deg, #4a2c4c, #351f37)",
      BoxShadow: "8px 8px 16px #1d1020, -8px -8px 16px #5c3a5f",
      InsetBoxShadow: "inset 4px 4px 8px #1d1020, inset -4px -4px 8px #5c3a5f",
      IconColor: "#e879f9",
      TextColor: "#fbe4fb",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "9",
      color: "linear-gradient(135deg, #3d3d29, #2a2a1f)",
      BoxShadow: "8px 8px 16px #1a1a10, -8px -8px 16px #505038",
      InsetBoxShadow: "inset 4px 4px 8px #1a1a10, inset -4px -4px 8px #505038",
      IconColor: "#facc15",
      TextColor: "#fef9c3",
      DarkMode: true,
      type: "gradient",
    },

    {
      name: "10",
      color: "linear-gradient(135deg, #4b1e2f, #2a1420)",
      BoxShadow: "8px 8px 16px #1a0c12, -8px -8px 16px #662a42",
      InsetBoxShadow: "inset 4px 4px 8px #1a0c12, inset -4px -4px 8px #662a42",
      IconColor: "#f472b6",
      TextColor: "#fce7f3",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "11",
      color: "linear-gradient(145deg, #3c1e4f, #271235)",
      BoxShadow: "8px 8px 16px #14081c, -8px -8px 16px #532868",
      InsetBoxShadow: "inset 4px 4px 8px #14081c, inset -4px -4px 8px #532868",
      IconColor: "#d8b4fe",
      TextColor: "#f3e8ff",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "12",
      color: "linear-gradient(135deg, #4a1c3a, #311227)",
      BoxShadow: "8px 8px 16px #180912, -8px -8px 16px #692650",
      InsetBoxShadow: "inset 4px 4px 8px #180912, inset -4px -4px 8px #692650",
      IconColor: "#fb7185",
      TextColor: "#ffe4e6",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "13",
      color: "linear-gradient(135deg, #45224a, #2e1633)",
      BoxShadow: "8px 8px 16px #140a18, -8px -8px 16px #5f2c67",
      InsetBoxShadow: "inset 4px 4px 8px #140a18, inset -4px -4px 8px #5f2c67",
      IconColor: "#f0abfc",
      TextColor: "#fae8ff",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "14",
      color: "linear-gradient(135deg, #551a36, #341122)",
      BoxShadow: "8px 8px 16px #1a0a12, -8px -8px 16px #70294d",
      InsetBoxShadow: "inset 4px 4px 8px #1a0a12, inset -4px -4px 8px #70294d",
      IconColor: "#f472b6",
      TextColor: "#fce7f3",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "15",
      color: "linear-gradient(135deg, #006466, #2c5866, #4d194d, #006466)",
      BoxShadow: "8px 8px 16px #1a0a12, -8px -8px 16px #70294d",
      InsetBoxShadow: "inset 4px 4px 8px #1a0a12, inset -4px -4px 8px #70294d",
      IconColor: "#f472b6",
      TextColor: "#fce7f3",
      DarkMode: true,
      type: "gradient",
    },

    {
      name: "16",
      color: "linear-gradient(135deg, #fef9d7, #d299c2, #fbc2eb, #fef9d7)",
      BoxShadow: "8px 8px 16px #c8cad1, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #c8cad1, inset -4px -4px 8px #ffffff",
      IconColor: "#9d174d",
      TextColor: "#312e81",
      DarkMode: false,
      gradient: true,
      animation: true,
      type: "gradient",
    },

    {
      name: "17",
      color: "linear-gradient(135deg, #232526, #414345)",
      BoxShadow: "8px 8px 16px #1a1a1a, -8px -8px 16px #5a5a5a",
      InsetBoxShadow: "inset 4px 4px 8px #1a1a1a, inset -4px -4px 8px #5a5a5a",
      IconColor: "#cbd5e1",
      TextColor: "#f1f5f9",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },

    {
      name: "18",
      color: "linear-gradient(135deg, #d3cce3, #e9e4f0)",
      BoxShadow: "8px 8px 16px #b6b6c1, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #b6b6c1, inset -4px -4px 8px #ffffff",
      IconColor: "#6b21a8",
      TextColor: "#1e1b4b",
      DarkMode: false,
      gradient: true,
      animation: false,
      type: "gradient",
    },

    {
      name: "19",
      color: "linear-gradient(135deg, #3f0d12, #a71d31)",
      BoxShadow: "8px 8px 16px #22070a, -8px -8px 16px #c63f52",
      InsetBoxShadow: "inset 4px 4px 8px #22070a, inset -4px -4px 8px #c63f52",
      IconColor: "#fda4af",
      TextColor: "#fee2e2",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },

    {
      name: "20",
      color: "rgba(30, 41, 59, 0.4)",
      BoxShadow: "0 8px 32px rgba(15, 23, 42, 0.6)",
      InsetBoxShadow:
        "inset 4px 4px 8px rgba(255,255,255,0.05), inset -4px -4px 8px rgba(0,0,0,0.3)",
      IconColor: "#38bdf8",
      TextColor: "#e0f2fe",
      DarkMode: true,
      gradient: false,
      animation: false,
      type: "glassmorphism",
    },

    {
      name: "21",
      color: "linear-gradient(135deg, #1b4332, #2d6a4f)",
      BoxShadow: "8px 8px 16px #0d251a, -8px -8px 16px #3d8968",
      InsetBoxShadow: "inset 4px 4px 8px #0d251a, inset -4px -4px 8px #3d8968",
      IconColor: "#bbf7d0",
      TextColor: "#dcfce7",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },

    {
      name: "22",
      color: "linear-gradient(135deg, #ffe4e6, #fbcfe8)",
      BoxShadow: "8px 8px 16px #e5bfc7, -8px -8px 16px #ffffff",
      InsetBoxShadow: "inset 4px 4px 8px #e5bfc7, inset -4px -4px 8px #ffffff",
      IconColor: "#e11d48",
      TextColor: "#881337",
      DarkMode: false,
      gradient: true,
      animation: false,
      type: "gradient",
    },

    {
      name: "23",
      color: "linear-gradient(135deg, #2c003e, #3c0753)",
      BoxShadow: "8px 8px 16px #1a0121, -8px -8px 16px #54097a",
      InsetBoxShadow: "inset 4px 4px 8px #1a0121, inset -4px -4px 8px #54097a",
      IconColor: "#f0abfc",
      TextColor: "#fdf4ff",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },

    {
      name: "24",
      color: "rgba(49, 46, 129, 0.35)",
      BoxShadow: "0 8px 32px rgba(30, 27, 75, 0.6)",
      InsetBoxShadow:
        "inset 4px 4px 8px rgba(255,255,255,0.05), inset -4px -4px 8px rgba(0,0,0,0.3)",
      IconColor: "#a5b4fc",
      TextColor: "#e0e7ff",
      DarkMode: true,
      gradient: false,
      animation: false,
      type: "glassmorphism",
    },

    {
      name: "25",
      color: "rgba(244, 63, 94, 0.35)",
      BoxShadow: "0 8px 32px rgba(136, 19, 55, 0.4)",
      InsetBoxShadow:
        "inset 4px 4px 8px rgba(255,255,255,0.1), inset -4px -4px 8px rgba(0,0,0,0.2)",
      IconColor: "#ffffff",
      TextColor: "#ffe4e6",
      DarkMode: true,
      gradient: false,
      animation: false,
      type: "glassmorphism",
    },

    {
      name: "26",
      color: "rgba(96, 165, 250, 0.3)",
      BoxShadow: "0 8px 32px rgba(37, 99, 235, 0.5)",
      InsetBoxShadow:
        "inset 4px 4px 8px rgba(255,255,255,0.1), inset -4px -4px 8px rgba(0,0,0,0.2)",
      IconColor: "#60a5fa",
      TextColor: "#eff6ff",
      DarkMode: true,
      gradient: false,
      animation: false,
      type: "glassmorphism",
    },

    {
      name: "27",
      color: "linear-gradient(135deg, #4b1035, #9d174d)",
      BoxShadow: "8px 8px 16px #26081a, -8px -8px 16px #b83365",
      InsetBoxShadow: "inset 4px 4px 8px #26081a, inset -4px -4px 8px #b83365",
      IconColor: "#f472b6",
      TextColor: "#fce7f3",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      name: "28",
      color: "linear-gradient(135deg, #5f3d00, #ff9933)",
      BoxShadow: "8px 8px 16px #2e1f00, -8px -8px 16px #ffaa4d",
      InsetBoxShadow: "inset 4px 4px 8px #2e1f00, inset -4px -4px 8px #ffaa4d",
      IconColor: "#fde68a",
      TextColor: "#fff7ed",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      name: "29",
      color: "linear-gradient(135deg, #00332c, #00695c)",
      BoxShadow: "8px 8px 16px #001512, -8px -8px 16px #009688",
      InsetBoxShadow: "inset 4px 4px 8px #001512, inset -4px -4px 8px #009688",
      IconColor: "#5eead4",
      TextColor: "#ccfbf1",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      name: "30",
      color: "linear-gradient(135deg, #2a0e37, #5d1a64)",
      BoxShadow: "8px 8px 16px #14071c, -8px -8px 16px #7e22ce",
      InsetBoxShadow: "inset 4px 4px 8px #14071c, inset -4px -4px 8px #7e22ce",
      IconColor: "#d8b4fe",
      TextColor: "#f3e8ff",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },
    {
      name: "31",
      color: "linear-gradient(135deg, #3b2f00, #b45309)",
      BoxShadow: "8px 8px 16px #1a1400, -8px -8px 16px #f59e0b",
      InsetBoxShadow: "inset 4px 4px 8px #1a1400, inset -4px -4px 8px #f59e0b",
      IconColor: "#fcd34d",
      TextColor: "#fffbeb",
      DarkMode: true,
      gradient: true,
      animation: false,
      type: "gradient",
    },

    {
      name: "32",
      color: "linear-gradient(135deg, #1e3c72, #2a5298, #1e3c72)",
      BoxShadow: "8px 8px 16px #101d3a, -8px -8px 16px #3b5ba5",
      InsetBoxShadow: "inset 4px 4px 8px #101d3a, inset -4px -4px 8px #3b5ba5",
      IconColor: "#93c5fd",
      TextColor: "#dbeafe",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "33",
      color: "linear-gradient(135deg, #2f2f54, #512c62, #2f2f54)",
      BoxShadow: "8px 8px 16px #1a1a30, -8px -8px 16px #70357c",
      InsetBoxShadow: "inset 4px 4px 8px #1a1a30, inset -4px -4px 8px #70357c",
      IconColor: "#c4b5fd",
      TextColor: "#ede9fe",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "34",
      color: "linear-gradient(135deg, #004d4d, #007373, #004d4d)",
      BoxShadow: "8px 8px 16px #002626, -8px -8px 16px #009999",
      InsetBoxShadow: "inset 4px 4px 8px #002626, inset -4px -4px 8px #009999",
      IconColor: "#5eead4",
      TextColor: "#ccfbf1",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "35",
      color: "linear-gradient(135deg, #4e0329, #6a0572, #4e0329)",
      BoxShadow: "8px 8px 16px #1f0112, -8px -8px 16px #8e1793",
      InsetBoxShadow: "inset 4px 4px 8px #1f0112, inset -4px -4px 8px #8e1793",
      IconColor: "#f9a8d4",
      TextColor: "#fce7f3",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "36",
      color: "linear-gradient(135deg, #3b0a45, #5c164e, #3b0a45)",
      BoxShadow: "8px 8px 16px #1a051f, -8px -8px 16px #7b1e65",
      InsetBoxShadow: "inset 4px 4px 8px #1a051f, inset -4px -4px 8px #7b1e65",
      IconColor: "#f472b6",
      TextColor: "#fce7f3",
      DarkMode: true,
      type: "gradient",
    },

    {
      name: "37",
      color: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      BoxShadow: "8px 8px 16px #091419, -8px -8px 16px #3b5c73",
      InsetBoxShadow: "inset 4px 4px 8px #091419, inset -4px -4px 8px #3b5c73",
      IconColor: "#7dd3fc",
      TextColor: "#e0f2fe",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "38",
      color: "linear-gradient(135deg, #1c1c1c, #3a3a3a, #1c1c1c)",
      BoxShadow: "8px 8px 16px #0d0d0d, -8px -8px 16px #505050",
      InsetBoxShadow: "inset 4px 4px 8px #0d0d0d, inset -4px -4px 8px #505050",
      IconColor: "#facc15",
      TextColor: "#fef9c3",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "39",
      color: "linear-gradient(135deg, #1b1f3b, #3d2b56, #1b1f3b)",
      BoxShadow: "8px 8px 16px #0d0f1e, -8px -8px 16px #503c6c",
      InsetBoxShadow: "inset 4px 4px 8px #0d0f1e, inset -4px -4px 8px #503c6c",
      IconColor: "#a5b4fc",
      TextColor: "#e0e7ff",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "40",
      color: "linear-gradient(135deg, #3a0ca3, #7209b7, #f72585)",
      BoxShadow: "8px 8px 16px #1c0552, -8px -8px 16px #fa649d",
      InsetBoxShadow: "inset 4px 4px 8px #1c0552, inset -4px -4px 8px #fa649d",
      IconColor: "#fbcfe8",
      TextColor: "#ffe4e6",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "41",
      color: "linear-gradient(135deg, #16222a, #3a6073, #16222a)",
      BoxShadow: "8px 8px 16px #0b1115, -8px -8px 16px #4c7c95",
      InsetBoxShadow: "inset 4px 4px 8px #0b1115, inset -4px -4px 8px #4c7c95",
      IconColor: "#7dd3fc",
      TextColor: "#e0f2fe",
      DarkMode: true,
      type: "gradient",
    },

    {
      name: "42",
      color: "linear-gradient(135deg, #240046, #5a189a, #9d4edd)",
      BoxShadow: "8px 8px 16px #100022, -8px -8px 16px #bb6efb",
      InsetBoxShadow: "inset 4px 4px 8px #100022, inset -4px -4px 8px #bb6efb",
      IconColor: "#e9d5ff",
      TextColor: "#f3e8ff",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "43",
      color: "linear-gradient(135deg, #ff6ec7, #d63384, #7209b7)",
      BoxShadow: "8px 8px 16px #6b0f45, -8px -8px 16px #ff91e6",
      InsetBoxShadow: "inset 4px 4px 8px #6b0f45, inset -4px -4px 8px #ff91e6",
      IconColor: "#fda4af",
      TextColor: "#ffe4f2",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "44",
      color: "linear-gradient(135deg, #03045e, #023e8a, #0077b6)",
      BoxShadow: "8px 8px 16px #001233, -8px -8px 16px #00b4d8",
      InsetBoxShadow: "inset 4px 4px 8px #001233, inset -4px -4px 8px #00b4d8",
      IconColor: "#7dd3fc",
      TextColor: "#e0f2fe",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "45",
      color: "linear-gradient(135deg, #ff4d6d, #c9184a, #800f2f)",
      BoxShadow: "8px 8px 16px #470a1b, -8px -8px 16px #ff6b81",
      InsetBoxShadow: "inset 4px 4px 8px #470a1b, inset -4px -4px 8px #ff6b81",
      IconColor: "#fecdd3",
      TextColor: "#ffe4e6",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "46",
      color: "linear-gradient(135deg, #22223b, #4a4e69, #9a8c98)",
      BoxShadow: "8px 8px 16px #1a1b2b, -8px -8px 16px #bcb4c4",
      InsetBoxShadow: "inset 4px 4px 8px #1a1b2b, inset -4px -4px 8px #bcb4c4",
      IconColor: "#e0e0ff",
      TextColor: "#f4efff",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "47",
      color: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      BoxShadow: "8px 8px 16px #0a1418, -8px -8px 16px #3a5d70",
      InsetBoxShadow: "inset 4px 4px 8px #0a1418, inset -4px -4px 8px #3a5d70",
      IconColor: "#93c5fd",
      TextColor: "#dbeafe",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "48",
      color: "linear-gradient(135deg, #ff6a00, #ff8c42, #ffd60a)",
      BoxShadow: "8px 8px 16px #662d00, -8px -8px 16px #ffe066",
      InsetBoxShadow: "inset 4px 4px 8px #662d00, inset -4px -4px 8px #ffe066",
      IconColor: "#fef3c7",
      TextColor: "#fff7ed",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "49",
      color: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #533483)",
      BoxShadow: "8px 8px 16px #0b0b17, -8px -8px 16px #5e4792",
      InsetBoxShadow: "inset 4px 4px 8px #0b0b17, inset -4px -4px 8px #5e4792",
      IconColor: "#c7d2fe",
      TextColor: "#e0e7ff",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "50",
      color: "linear-gradient(135deg, #00203f, #003f5c, #2f4b7c, #665191)",
      BoxShadow: "8px 8px 16px #00101f, -8px -8px 16px #70639b",
      InsetBoxShadow: "inset 4px 4px 8px #00101f, inset -4px -4px 8px #70639b",
      IconColor: "#bae6fd",
      TextColor: "#e0f2fe",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "51",
      color: "linear-gradient(135deg, #4b0000, #8b0000, #b22222, #ff4500)",
      BoxShadow: "8px 8px 16px #250000, -8px -8px 16px #ff6347",
      InsetBoxShadow: "inset 4px 4px 8px #250000, inset -4px -4px 8px #ff6347",
      IconColor: "#fecaca",
      TextColor: "#fff1f2",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "53",
      color: "linear-gradient(200deg, #8E51FF, #FF2056, #7CCF35)",
      BoxShadow: "8px 8px 16px #1d0a3a, -8px -8px 16px #9fe27f",
      InsetBoxShadow: "inset 4px 4px 8px #1d0a3a, inset -4px -4px 8px #9fe27f",
      IconColor: "#fef3c7",
      TextColor: "#fafafa",
      DarkMode: true,
      type: "gradient",
    },
    {
      name: "55",
      color: "linear-gradient(145deg, #FF2056, #8E51FF, #7CCF35)",
      BoxShadow: "8px 8px 16px #3a0a22, -8px -8px 16px #99db66",
      InsetBoxShadow: "inset 4px 4px 8px #3a0a22, inset -4px -4px 8px #99db66",
      IconColor: "#ffe4e6",
      TextColor: "#fef2f2",
      DarkMode: true,
      type: "gradient",
    },

    // Red + Blue
    {
      name: "RB2",
      color: "linear-gradient(150deg, #f72585, #4361ee)",
      BoxShadow: "8px 8px 16px #1a093f, -8px -8px 16px #647eff",
      InsetBoxShadow: "inset 4px 4px 8px #1a093f, inset -4px -4px 8px #647eff",
      IconColor: "#e0f2fe",
      TextColor: "#fff1f2",
      DarkMode: true,
      type: "gradient",
    },

    // Green + Black
    {
      name: "GB2",
      color: "linear-gradient(110deg, #4ade80, #0a0a0a)",
      BoxShadow: "8px 8px 16px #031306, -8px -8px 16px #6ee7b7",
      InsetBoxShadow: "inset 4px 4px 8px #031306, inset -4px -4px 8px #6ee7b7",
      IconColor: "#bbf7d0",
      TextColor: "#ecfdf5",
      DarkMode: true,
      type: "gradient",
    },

    // Orange + Black
    {
      name: "OB1",
      color: "linear-gradient(140deg, #ff6b00, #000000)",
      BoxShadow: "8px 8px 16px #1a0a00, -8px -8px 16px #ff924d",
      InsetBoxShadow: "inset 4px 4px 8px #1a0a00, inset -4px -4px 8px #ff924d",
      IconColor: "#ffedd5",
      TextColor: "#fff7ed",
      DarkMode: true,
      type: "gradient",
    },
  ];

  const classicTheme = themes.filter((th) => th.type === "classic");
  const gradientTheme = themes.filter((th) => th.type === "gradient");
  const glassmorphismTheme = themes.filter((th) => th.type === "glassmorphism");

  const setTheme = (theme) => {
    const color = theme.color;

    dispatch(
      setNavBarThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setThemeColors({
        BackgroundColor: color,
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        DarkMode: theme.DarkMode,
        Animation: false,
        HeaderColor: theme.TextColor,
      })
    );

    dispatch(
      setserviceCardThemeThunk({
        BackgroundColor: color,
        PrimaryTextColor: theme.TextColor,
        SecondaryTextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: "none",
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );
    dispatch(
      setExperienceThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setSkillCardThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setReviewThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setContactThemeThunk({
        BackgroundColor: color,
        TextColor: theme.TextColor,
        IconColor: theme.IconColor,
        BorderColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
      })
    );

    dispatch(
      setHeroThemeThunk({
        BackgroundColor: color,
        BoxShadow: useInset ? theme.InsetBoxShadow : theme.BoxShadow,
        TextColor: theme.TextColor,
      })
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Select Theme</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Use Inset</Typography>
              <Switch onClick={() => setUseInset(!useInset)} value={useInset} />
            </Box>
          </Box>

          <Box>
            <Typography>Classic</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 1,
              }}
            >
              {classicTheme.map((th) => (
                <Box>
                  <Box
                    key={th.color}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      // border: `2px solid ${th.color}`,
                      borderRadius: 1,
                      background: th.color,
                    }}
                  >
                    <Box
                      onClick={() => setTheme(th)}
                      sx={{
                        background: th.color,
                        width: 30,
                        height: 30,
                        borderRadius: 2,
                        cursor: "pointer",
                        boxShadow: useInset ? th?.InsetBoxShadow : th.BoxShadow,
                      }}
                    ></Box>
                  </Box>
                  <Typography textAlign="center">{th.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>Gradient</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 1,
              }}
            >
              {gradientTheme.map((th) => (
                <Box>
                  <Box
                    key={th.color}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      // border: `2px solid ${th.color}`,
                      borderRadius: 1,
                      background: th.color,
                    }}
                  >
                    <Box
                      onClick={() => setTheme(th)}
                      sx={{
                        background: th.color,
                        width: 30,
                        height: 30,
                        borderRadius: 2,
                        cursor: "pointer",
                        boxShadow: useInset ? th?.InsetBoxShadow : th.BoxShadow,
                      }}
                    ></Box>
                  </Box>
                  <Typography textAlign="center">{th.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>Glassmorphism</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 1,
              }}
            >
              {glassmorphismTheme.map((th) => (
                <Box
                  key={th.color}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    // border: `2px solid ${th.color}`,
                    borderRadius: 1,
                    background: th.color,
                  }}
                >
                  <Box
                    onClick={() => setTheme(th)}
                    sx={{
                      background: th.color,
                      width: 30,
                      height: 30,
                      borderRadius: 2,
                      cursor: "pointer",
                      boxShadow: useInset ? th?.InsetBoxShadow : th.BoxShadow,
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
