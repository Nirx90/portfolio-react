import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function ContactSection() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          //   color: DarkMode ? "whitesmoke" : "black",
          color: "black",
          mb: 10,
        }}
      >
        Contact Me
      </Typography>
      <Box
        sx={{
          p: 3,
          minHeight: 190,
          borderRadius: 5,
          background: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: `1px solid rgba(255, 255, 255, 0.3)`,
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
          transition: "transform 0.3s ease",
        }}
      >
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: isMobile ? "row" : "column",
                gap: 3,
              }}
            >
              <IconBrandGithub size={35} color="#1876D2" />
              <IconBrandLinkedin size={35} color="#1876D2" />
              <IconBrandInstagram size={35} color="#1876D2" />
              <IconBrandWhatsapp size={35} color="#1876D2" />
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  name="mobile"
                  label="Mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={12}>
                <TextField
                  fullWidth
                  required
                  name="description"
                  label="Description"
                  multiline
                  minRows={4}
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item size={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-end",
                    width: "100%",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
