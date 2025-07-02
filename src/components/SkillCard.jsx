// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   useTheme,
//   useMediaQuery,
//   Grid,
//   Paper,
//   Avatar,
//   Chip,
// } from "@mui/material";
// import {
//   Code,
//   DesignServices,
//   Terminal,
//   Storage,
//   Language,
//   MobileFriendly,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";

// const skill = [
//   {
//     icon: <Code sx={{ fontSize: 40 }} />,
//     title: "Frontend",
//     mainColor: "#61DAFB",
//     hoverColor: "#282C34",
//     technologies: ["React", "Angular", "Vue", "Next.js", "Material-UI"],
//   },
//   {
//     icon: <Terminal sx={{ fontSize: 40 }} />,
//     title: "Backend",
//     mainColor: "#68A063",
//     hoverColor: "#303030",
//     technologies: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"],
//   },
//   {
//     icon: <Storage sx={{ fontSize: 40 }} />,
//     title: "Databases",
//     mainColor: "#589636",
//     hoverColor: "#0F3443",
//     technologies: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"],
//   },
//   {
//     icon: <MobileFriendly sx={{ fontSize: 40 }} />,
//     title: "Mobile",
//     mainColor: "#000000",
//     hoverColor: "#5856D6",
//     technologies: ["React Native", "Flutter", "Ionic", "PWA", "Expo"],
//   },
//   {
//     icon: <DesignServices sx={{ fontSize: 40 }} />,
//     title: "UI/UX",
//     mainColor: "#FF4081",
//     hoverColor: "#2962FF",
//     technologies: ["Figma", "Adobe XD", "Material Design", "Framer", "Webflow"],
//   },
//   {
//     icon: <Language sx={{ fontSize: 40 }} />,
//     title: "Other",
//     mainColor: "#764ABC",
//     hoverColor: "#DD0031",
//     technologies: ["TypeScript", "Docker", "AWS", "Jest", "Git"],
//   },
// ];

// const SkillCard = () => {
//   const theme = useTheme();

//   return (
//     <>
//       {skill.map((skill, index) => (
//         <motion.div
//           whileHover="hover"
//           initial="rest"
//           animate="rest"
//           variants={{
//             rest: { scale: 1 },
//             hover: { scale: 1.05 },
//           }}
//         >
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               height: "80%",
//               borderRadius: "16px",
//               minWidth:180,
//               background: `linear-gradient(135deg, ${skill.mainColor} 0%, ${theme.palette.primary.main} 100%)`,
//               color: "white",
//               position: "relative",
//               overflow: "hidden",
//               cursor: "pointer",
//               "&:hover": {
//                 "& .skill-content": {
//                   transform: "translateY(-100%)",
//                 },
//                 "& .tech-list": {
//                   opacity: 1,
//                 },
//               },
//             }}
//           >
//             <motion.div
//               className="skill-content"
//               variants={{
//                 rest: { opacity: 1 },
//                 hover: { opacity: 0 },
//               }}
//               transition={{ duration: 0.3 }}
//               style={{
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 transition: "all 0.3s ease",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 60,
//                   height: 60,
//                   borderRadius: "50%",
//                   background: "rgba(255,255,255,0.2)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   mb: 2,
//                 }}
//               >
//                 {skill.icon}
//               </Box>
//               <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
//                 {skill.title}
//               </Typography>
//               <Typography variant="body2">Hover to see technologies</Typography>
//             </motion.div>

//             <motion.div
//               className="tech-list"
//               initial={{ opacity: 0 }}
//               variants={{
//                 rest: { opacity: 0 },
//                 hover: { opacity: 1 },
//               }}
//               transition={{ duration: 0.3, delay: 0.2 }}
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 padding: "24px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               {/* <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
//                   Technologies:
//                 </Typography> */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: 1,
//                   justifyContent: "center",
//                 }}
//               >
//                 {skill?.technologies?.map((tech, index) => (
//                   <Chip
//                     key={index}
//                     label={tech}
//                     sx={{
//                       backgroundColor: "rgba(255,255,255,0.9)",
//                       color: theme.palette.text.primary,
//                       fontWeight: 500,
//                       "&:hover": {
//                         backgroundColor: "white",
//                       },
//                     }}
//                   />
//                 ))}
//               </Box>
//             </motion.div>
//           </Paper>
//         </motion.div>
//       ))}
//     </>
//   );
// };

// export default SkillCard;

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
  IconBrandNexo,
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
import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./SkillCard.css";

const SkillCard = () => {
  const { DarkMode } = useSelector((state) => state.theme);
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
    // {
    //   name: "Express",
    //   icon: <IconBrandNexo size={40} />,
    //   level: 85,
    //   color: "#000000",
    //   category: "Backend",
    // },
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
        gap:5
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: DarkMode ? "whitesmoke" : "black",
        }}
      >
        My Tech Stack
      </Typography>
      <Box className="category-tabs">
        {Categoris.map((category) => (
          <button
            key={category.category}
            onClick={() => setSelectedCategory(category.name)}
            className={`category-tab ${
              selectedCategory === category.name ? "active" : ""
            }`}
          >
            {category.icon}
            {category.name}
          </button>
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
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: `${skillCardCss.BorderWidth}px solid ${skillCardCss.BorderColor || '#FFFFFF4D'}`,
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    borderColor: skillCardCss.BorderColor || skill.color,
                    boxShadow: `0 8px 24px ${skillCardCss.BorderColor || skill.color}50`,
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
                  <Box style={{ color: skillCardCss.IconColor || skill.color }}>{skill.icon}</Box>
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
                    backgroundColor: `${skillCardCss.IconColor || skill.color}33`,
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
