import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Grid,
  Paper,
  Avatar,
  Chip,
} from "@mui/material";
import {
  Code,
  DesignServices,
  Terminal,
  Storage,
  Language,
  MobileFriendly,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const skill = [
  {
    icon: <Code sx={{ fontSize: 40 }} />,
    title: "Frontend",
    mainColor: "#61DAFB",
    hoverColor: "#282C34",
    technologies: ["React", "Angular", "Vue", "Next.js", "Material-UI"],
  },
  {
    icon: <Terminal sx={{ fontSize: 40 }} />,
    title: "Backend",
    mainColor: "#68A063",
    hoverColor: "#303030",
    technologies: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"],
  },
  {
    icon: <Storage sx={{ fontSize: 40 }} />,
    title: "Databases",
    mainColor: "#589636",
    hoverColor: "#0F3443",
    technologies: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"],
  },
  {
    icon: <MobileFriendly sx={{ fontSize: 40 }} />,
    title: "Mobile",
    mainColor: "#000000",
    hoverColor: "#5856D6",
    technologies: ["React Native", "Flutter", "Ionic", "PWA", "Expo"],
  },
  {
    icon: <DesignServices sx={{ fontSize: 40 }} />,
    title: "UI/UX",
    mainColor: "#FF4081",
    hoverColor: "#2962FF",
    technologies: ["Figma", "Adobe XD", "Material Design", "Framer", "Webflow"],
  },
  {
    icon: <Language sx={{ fontSize: 40 }} />,
    title: "Other",
    mainColor: "#764ABC",
    hoverColor: "#DD0031",
    technologies: ["TypeScript", "Docker", "AWS", "Jest", "Git"],
  },
];

const SkillCard = () => {
  const theme = useTheme();

  return (
    <>
      {skill.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${skill.mainColor} 0%, ${theme.palette.primary.main} 100%)`,
                color: "white",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                "&:hover": {
                  "& .skill-content": {
                    transform: "translateY(-100%)",
                  },
                  "& .tech-list": {
                    opacity: 1,
                  },
                },
              }}
            >
              <motion.div
                className="skill-content"
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                  {skill.title}
                </Typography>
                <Typography variant="body2">
                  Hover to see technologies
                </Typography>
              </motion.div>

              <motion.div
                className="tech-list"
                initial={{ opacity: 0 }}
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Technologies:
                </Typography> */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  {skill?.technologies?.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </>
  );
};

export default SkillCard;
