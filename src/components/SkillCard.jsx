import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconApps,
  IconBrandAngular,
  IconBrandDjango,
  IconBrandDocker,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconCode,
  IconDatabase,
  IconLanguage,
  IconServer,
} from "@tabler/icons-react";
import {
  Box, Button, LinearProgress, Paper, Typography, useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

const SkillCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { DarkMode, Animation, HeaderColor, Type } = useSelector((state) => state.theme);
  const skillCardCss = useSelector((state) => state.skillCard);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const Categoris = [
    { name: "All", icon: <IconApps size={24} /> },
    { name: "Frontend", icon: <IconCode size={24} /> },
    { name: "Backend", icon: <IconServer size={24} /> },
    { name: "Language", icon: <IconLanguage size={24} /> },
    { name: "Database", icon: <IconDatabase size={24} /> },
  ];

  const skills = [
    {
      name: "React",
      icon: <IconBrandReact size={40} />,
      level: 90,
      color: "#61DAFB",
      category: "Frontend",
    },
    {
      name: "Angular",
      icon: <IconBrandAngular size={40} />,
      level: 85,
      color: "#DD0031",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <IconBrandNextjs size={40} />,
      level: 88,
      color: "#F7DF1E",
      category: "Frontend",
    },
    {
      name: "Django",
      icon: <IconBrandDjango size={40} />,
      level: 85,
      color: "#47A248",
      category: "Frontend",
    },
    {
      name: "Python",
      icon: <IconBrandPython size={40} />,
      level: 85,
      color: "#3178C6",
      category: "Language",
    },
    {
      name: "TypeScript",
      icon: <IconBrandTypescript size={40} />,
      level: 85,
      color: "#3178C6",
      category: "Language",
    },
    {
      name: "JavaScript",
      icon: <IconBrandJavascript size={40} />,
      level: 92,
      color: "#F7DF1E",
      category: "Language",
    },
    {
      name: "Node.js",
      icon: <IconBrandNodejs size={40} />,
      level: 88,
      color: "#339933",
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <IconBrandMongodb size={40} />,
      level: 80,
      color: "#47A248",
      category: "Database",
    },
    {
      name: "MySQL",
      icon: <IconBrandMysql size={40} />,
      level: 75,
      color: "#336791",
      category: "Database",
    },
    {
      name: "Git",
      icon: <IconBrandGit size={40} />,
      level: 85,
      color: "#F05032",
      category: "Server",
    },
    {
      name: "Docker",
      icon: <IconBrandDocker size={40} />,
      level: 70,
      color: "#2496ED",
      category: "Server",
    },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: HeaderColor,
        }}
      >
        My Tech Stack
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? 1 : 2,
        mb: 2,
        flexWrap: 'wrap'
      }}
      >
        {Categoris.map((category) => (
          <Button
            key={category.name}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: "50px",
              cursor: 'pointer',
              fontWeight: 600,
              padding: '10px 15px',
              transition: 'all 0.3s ease',
              // border: selectedCategory === category.name ? `2px solid ${skillCardCss.BorderColor || "#1976d2"}` : 'none',
              // border: selectedCategory === category.name ? `2px solid ${skillCardCss.TextColor || "#1976d2"}` : 'none',
              border: (Type?.startsWith("Neu") || Type === "Standard" || Type === "") &&
                  selectedCategory === category.name
                  ? `2px solid ${skillCardCss.TextColor || "#1976d2"}`
                  : "none",

              boxShadow: skillCardCss.BoxShadow,
              // background: selectedCategory === category.name ? skillCardCss.BackgroundColor : "white",
              background: Type?.startsWith("Neu") ? skillCardCss.BackgroundColor
                : selectedCategory === category.name
                  ? skillCardCss.BackgroundColor
                  : "white",

              color: Type?.startsWith("Neu") ? skillCardCss.TextColor : selectedCategory === category.name ? `${skillCardCss.TextColor}` : "black",
              ":hover": {
                transform: 'translateY(-3px)',
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)"
              }
            }}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </Box>
      <AnimatePresence mode="wait">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Paper
                sx={{
                  p: 3,
                  minWidth: 150,
                  borderRadius: skillCardCss.BorderRadious,

                  background: skillCardCss.BackgroundColor,
                  backgroundSize: Animation ? "400% 400%" : "100%",
                  animation: "gradientShift 8s ease infinite",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: `${skillCardCss.BorderWidth}px solid ${skillCardCss.BorderColor || "#FFFFFF4D"
                    }`,
                  boxShadow: skillCardCss.BoxShadow,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    borderColor: skillCardCss.BorderColor || skill.color,
                    boxShadow: `0 8px 24px ${skillCardCss.BorderColor || skill.color
                      }50`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Box style={{ color: skillCardCss.IconColor || skill.color }}>
                    {skill.icon}
                  </Box>
                  <Typography
                    sx={{
                      color: skillCardCss.TextColor || "black",
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: skillCardCss.TextColor || "black",
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    borderRadius: 5,
                    height: 10,
                    backgroundColor: `${skillCardCss.IconColor || skill.color
                      }33`,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: skillCardCss.IconColor || skill.color,
                      borderRadius: 5,
                    },
                  }}
                />
              </Paper>
            </motion.div>
          ))}
        </Box>
      </AnimatePresence>
    </Box>
  );
};

export default SkillCard;
