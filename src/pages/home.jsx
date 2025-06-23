import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Grid,
  Paper,
  Avatar,
  Divider,
  IconButton,
  Container,
} from "@mui/material";
import {
  ArrowRightAlt,
  Code,
  DesignServices,
  Terminal,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import NavBar from "../components/NavBar";

const PortfolioHomepage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [darkMode, setDarkMode] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <NavBar darkMode={darkMode} handleToggleTheme={handleToggleTheme}/>
      <Box
        sx={{
          minHeight: "100vh",
          // background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          // background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
          // background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
          background:
            darkMode
              ? "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
              : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          p: isMobile ? 2 : 4,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-30%",
            left: "-20%",
            width: "150%",
            height: "150%",
            background:
              "radial-gradient(circle, rgba(25,118,210,0.08) 0%, transparent 70%)",
            zIndex: 0,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(25,118,210,0.1) 0%, transparent 80%)",
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          {/* Header */}

          <Container>
            {/* Hero Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  mt: isMobile ? 2 : 8,
                }}
              >
                <Box
                  sx={{
                    width: isMobile ? "100%" : "50%",
                  }}
                >
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant={isMobile ? "h3" : "h2"}
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        background:
                          "linear-gradient(45deg, #1976d2 20%, #4dabf5 80%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Crafting Digital Experiences
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h5"
                      sx={{ mb: 3, 
                        color: darkMode ? "whitesmoke" : theme.palette.text.main,
                      }}
                    >
                      Hi, I'm{" "}
                      <span style={{ color: theme.palette.primary.main }}>
                        Nirav
                      </span>{" "}
                      - Web Developer & UI Specialist
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="body1"
                      sx={{ mb: 4, fontSize: "1.1rem",
                        color: darkMode ? "whitesmoke" : theme.palette.text.secondary,
                       }}
                    >
                      I build performant, accessible, and beautiful web
                      applications with modern technologies and user-focused
                      design.
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowRightAlt />}
                        sx={{ borderRadius: "50px", px: 4, py: 1 }}
                      >
                        View Projects
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{ borderRadius: "50px", px: 4, py: 1 }}
                      >
                        Download CV
                      </Button>
                    </Box>
                  </motion.div>
                </Box>

                <Box item xs={12} md={6}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        p: 2,
                        borderRadius: "20px",
                        background: "rgba(255, 255, 255, 0.05)", // transparent white
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        boxShadow: darkMode ? "none" : "0 8px 32px rgba(31, 38, 135, 0.2)",
                      }}
                    >
                      <Box
                        sx={{
                          background: 
                            darkMode ? "none" :
                            "linear-gradient(45deg, #1976d2, #4dabf5)",
                          borderRadius: "12px",
                          p: 3,
                          color: "white",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            opacity: 0.1,
                          }}
                        >
                          <Code sx={{ fontSize: 150 }} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ mb: 1, fontWeight: 600 }}
                        >
                          Current Project
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{ mb: 2, fontWeight: 700 }}
                        >
                          E-commerce Dashboard
                        </Typography>
                        <Typography sx={{ mb: 3 }}>
                          React, Node.js, MongoDB, MUI
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            color: darkMode ? "primary" : "white",
                            borderColor: darkMode ? "primary" : "white",
                            borderRadius:"15px"
                          }}
                        >
                          View Case Study
                        </Button>
                      </Box>
                    </Paper>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>

            {/* Skills Section */}
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", mb: 4, fontWeight: 700,
                  color: darkMode ? "whitesmoke" : theme.palette.text.primary,
                }}
              >
                What I Do
              </Typography>

              <Grid
                container
                spacing={3}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                }}
              >
                {[
                  {
                    icon: <Code sx={{ fontSize: 40 }} />,
                    title: "Web Development",
                    description:
                      "Building responsive, accessible web applications with React, Next.js, and modern JavaScript.",
                  },
                  {
                    icon: <DesignServices sx={{ fontSize: 40 }} />,
                    title: "UI/UX Design",
                    description:
                      "Creating intuitive user interfaces with Figma, Adobe XD, and Material Design principles.",
                  },
                  {
                    icon: <Terminal sx={{ fontSize: 40 }} />,
                    title: "Backend Solutions",
                    description:
                      "Developing robust APIs and server-side logic with Node.js, Express, and databases.",
                  },
                ].map((skill, index) => (
                  <Grid item xs={12} md={4} sm={6} key={index}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Paper
                        elevation={3}
                        // sx={{
                        //   p: 3,
                        //   minHeight: 190,
                        //   borderRadius: "12px",
                        //   background: "rgba(255, 255, 255, 0.7)",
                        //   backdropFilter: "blur(5px)",
                        //   border: "1px solid rgba(255, 255, 255, 0.2)",
                        // }}
                        sx={{
                          p: 3,
                          minHeight: 220,
                          borderRadius: "20px",
                          // background: "rgba(255, 255, 255, 0.15)",
                          // background: "rgba(255, 255, 255, 0.05)",

                          background: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)", // For Safari
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          boxShadow: darkMode ? "none" : "0 8px 32px rgba(31, 38, 135, 0.2)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(45deg, #1976d2, #4dabf5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                            color: "white",
                          }}
                        >
                          {skill.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{ mb: 1, 
                            fontWeight: 600 ,
                            color: darkMode ? "whitesmoke" : theme.palette.text.primary,
                          }}
                        >
                          {skill.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            // color: theme.palette.text.secondary,
                            color: darkMode ? "whitesmoke" : theme.palette.text.secondary,
                            textAlign: "justify",
                          }}
                        >
                          {skill.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box sx={{ mt: 10, mb: 6 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", mb: 4, fontWeight: 700 ,
                  color: darkMode ? "whitesmoke" : theme.palette.text.primary,
                }}
              >
                My Tech Stack
              </Typography>

              <Box
                spacing={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  flexWrap: "wrap",
                }}
              >
                <SkillCard />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default PortfolioHomepage;
