import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Grid, Paper } from "@mui/material";
import { Code, DesignServices, Terminal } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const ServiceCards = () => {
  const serviceCardCss = useSelector((state) => state.serviceCard);

  const { DarkMode, Animation, HeaderColor } = useSelector((state) => state.theme);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ mt: 10 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: 700,
            color: HeaderColor,
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
                  sx={{
                    p: 3,
                    minHeight: 190,
                    borderRadius: serviceCardCss.BorderRadious,
                    
                    background: serviceCardCss.BackgroundColor,
                    backgroundSize: Animation ? "400% 400%" : "100%",
                    animation: "gradientShift 8s ease infinite",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: `${serviceCardCss.BorderWidth}px solid ${serviceCardCss.BorderColor}`,
                    boxShadow: serviceCardCss.BoxShadow,
                    // boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      // background: "linear-gradient(45deg, #1976d2, #4dabf5)",
                      border: `2px solid ${serviceCardCss.IconColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      color: serviceCardCss.IconColor,
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: serviceCardCss.PrimaryTextColor,
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: serviceCardCss.SecondaryTextColor,
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
    </Box>
  );
};

export default ServiceCards;
