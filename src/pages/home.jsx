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
import { useDispatch, useSelector } from "react-redux";
import ServiceCards from "../components/ServiceCards";
import WorkExperience from "../components/WorkExperience";
import ContactSection from "../components/Contact";
import ReviewsSection from "../components/Reviews";
import Footer from "../components/Footer";

const PortfolioHomepage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  const {
    BackgroundColor,
    PrimaryTextColor,
    SecondaryTextColor,
    BoxShadow,
    DarkMode,
    Animation,
  } = useSelector((state) => state.theme);
  const heroCss = useSelector((state) => state.hero);

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
    <>
      <NavBar />
      <Box
        sx={{
          background: BackgroundColor,
          py: isMobile ? 2 : 10,
        }}
      >
        <Box>
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
                  justifyContent: "space-between",
                  flexDirection: isMobile ? "column" : "row",
                  flexWrap: "wrap",
                  mt: 8,
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
                        background: heroCss.BackgroundColor,
                        backgroundSize: Animation ? "400% 400%" : "100%",
                        animation: "gradientShift 8s ease infinite",
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
                      sx={{
                        mb: 3,
                        color: PrimaryTextColor,
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
                      sx={{
                        mb: 4,
                        fontSize: "1.1rem",
                        color: SecondaryTextColor,
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
                        sx={{
                          borderRadius: "50px",
                          px: 4,
                          py: 1,
                          background: heroCss.BackgroundColor,
                          backgroundSize: Animation ? "400% 400%" : "100%",
                          animation: "gradientShift 8s ease infinite",
                        }}
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

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: isMobile ? "100%" : "50%",
                    mt: 5,
                  }}
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        mt: isMobile ? 8 : 0,
                        p: 2,
                        background: "rgba(255, 255, 255, 0.05)", // transparent white
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
                        borderRadius: "50%",
                      }}
                    >
                      <Box
                        sx={{
                          background: heroCss.BackgroundColor,
                          // "linear-gradient(45deg, #1976d2, #4dabf5)",
                          backgroundSize: Animation ? "400% 400%" : "100%",
                          animation: "gradientShift 8s ease infinite",
                          borderRadius: "50%",
                          p: 3,
                        }}
                      >
                        <Box
                          component="img"
                          src="https://digitalks-crm-bucket.s3.ap-south-1.amazonaws.com/CRM-ONE/staff/profileImage/profileImage-1750330132699-570439323.jpg"
                          alt="Profile"
                          sx={{
                            width: 250,
                            height: 250,
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "3px solid rgba(255, 255, 255, 0.4)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                          }}
                        />
                      </Box>
                    </Paper>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>

            <ServiceCards />

            <Box mt={10}>
              <WorkExperience />
            </Box>

            <Box sx={{ mt: 10 }}>
              <SkillCard />
            </Box>

            {/* <Box sx={{
              background:'#2196f3',
              p:5,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'column',
              gap:3,
              mt:10
            }}>
              <Typography variant="h5" color="white">Do you have any project?</Typography>
              <Typography variant="h4" color="white">I'm Available for Freelancing Project</Typography>
              <Button sx={{
                color:'white',
                border:'1px solid white'
              }}
              variant="outlined"
              >
                Hire Me
              </Button>
            </Box> */}

            <Box sx={{ mt: 10 }}>
              <ReviewsSection />
            </Box>

            <Box sx={{ mt: 10 }}>
              <ContactSection />
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PortfolioHomepage;
