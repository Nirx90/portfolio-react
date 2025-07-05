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
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconLocation,
  IconMail,
  IconMapPin,
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

  const textFieldCss = {
    // Label color when not focused
    "& label": {
      color: "", // change to your preferred color
    },
    // Label color when focused
    "& label.Mui-focused": {
      color: "#1976d2",
    },
    // Default border color
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "",
      },
      // Border color on hover
      "&:hover fieldset": {
        borderColor: "",
      },
      // Border color when focused
      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
      },
    },
  };

  const centerCss = {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  };

  const customeCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: `1px solid rgba(255, 255, 255, 0.3)`,
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
    p: 1,
    borderRadius: "50%",
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
          p: 5,
          minHeight: 190,
          borderRadius: 5,
          background: "rgba(255, 255, 255, 0)",
          // background: `linear-gradient(135deg, #FF4081 0%, #1976d2 100%)`,
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
                flexDirection: "column",
                gap: 2,
                px: 4,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    ...centerCss,
                    gap: 3,
                  }}
                >
                  <Box sx={{ ...customeCss }}>
                    <IconMail size={35} color="#1876D2" />
                  </Box>
                  <Typography>inirav114@gmail.com</Typography>
                </Box>
                <Box
                  sx={{
                    ...centerCss,
                    gap: 3,
                    mt: 2,
                  }}
                >
                  <Box sx={{ ...customeCss }}>
                    <IconBrandWhatsapp size={35} color="#1876D2" />
                  </Box>
                  <Typography>+91 95868 37258</Typography>
                </Box>
                <Box
                  sx={{
                    ...centerCss,
                    gap: 3,
                    mt: 2,
                  }}
                >
                  <Box sx={{ ...customeCss }}>
                    <IconMapPin size={35} color="#1876D2" />
                  </Box>
                  <Typography>Pune, Maharashtra</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  width: "100%",
                  mt: 1,
                }}
              >
                <Box sx={{ ...customeCss }}>
                  <IconBrandGithub size={35} color="#1876D2" />
                </Box>
                <Box sx={{ ...customeCss }}>
                  <IconBrandLinkedin size={35} color="#1876D2" />
                </Box>
                <Box sx={{ ...customeCss }}>
                  <IconBrandInstagram size={35} color="#1876D2" />
                </Box>
                <Box sx={{ ...customeCss }}>
                  <IconBrandWhatsapp size={35} color="#1876D2" />
                </Box>
              </Box>
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
                  sx={{ ...textFieldCss }}
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
                  sx={{ ...textFieldCss }}
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
                  sx={{ ...textFieldCss }}
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
                  sx={{ ...textFieldCss }}
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
                  sx={{ ...textFieldCss }}
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
