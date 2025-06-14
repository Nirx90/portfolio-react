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
  Divider,
  IconButton,
} from "@mui/material";
import {
  ArrowRightAlt,
  Code,
  DesignServices,
  Terminal,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

const PortfolioHomepage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        p: isMobile ? 2 : 4,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(25,118,210,0.1) 0%, transparent 70%)",
          transform: "rotate(30deg)",
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box
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
            devFolio
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
        </Box>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Grid
            container
            spacing={4}
            sx={{ alignItems: "center", mt: isMobile ? 2 : 8 }}
          >
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background:
                      "linear-gradient(45deg, #1976d2 30%, #4dabf5 90%)",
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
                  sx={{ mb: 3, color: theme.palette.text.secondary }}
                >
                  Hi, I'm{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Alex
                  </span>{" "}
                  - Web Developer & UI Specialist
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem" }}>
                  I build performant, accessible, and beautiful web applications
                  with modern technologies and user-focused design.
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
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: 2,
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(45deg, #1976d2, #4dabf5)",
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
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      Current Project
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                      E-commerce Dashboard
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                      React, Node.js, MongoDB, MUI
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "white",
                        borderColor: "white",
                        "&:hover": {
                          borderColor: "white",
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      View Case Study
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Skills Section */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4, fontWeight: 700 }}
          >
            What I Do
          </Typography>

          <Grid container spacing={3}>
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
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(5px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, #1976d2, #4dabf5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                        color: "white",
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                      {skill.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary }}
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
            sx={{ textAlign: "center", mb: 4, fontWeight: 700 }}
          >
            My Tech Stack
          </Typography>

          <Grid container spacing={3}>
            <SkillCard />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioHomepage;
