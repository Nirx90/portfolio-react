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
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconLocation,
  IconMail,
  IconMapPin,
  IconSettings,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";
import SettingContact from "./settings/SettingContact";
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { endpoints } from "../api/endpoints";
import toast from "react-hot-toast";

export default function ContactSection() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { DarkMode, Animation, HeaderColor } = useSelector((state) => state.theme);
  const contactCss = useSelector((state) => state.contact);

  const [settingDialog, setSettingDialog] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      description: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(endpoints.create_inquiry, values);
        toast.success(res.data.message)
        formik.resetForm()
      } catch (error) { 
        toast.error("Failed to submit quey. please try again later...")
      }
    }
  });

  const textFieldCss = {
    // Label color when not focused
    "& label": {
      color: contactCss.TextColor, // change to your preferred color
    },
    // Label color when focused
    "& label.Mui-focused": {
      color: contactCss.TextColor,
    },
    // Default border color
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: contactCss.TextColor,
      },
      // Border color on hover
      "&:hover fieldset": {
        borderColor: contactCss.TextColor,
      },
      // Border color when focused
      "&.Mui-focused fieldset": {
        borderColor: contactCss.TextColor,
      },
    },
    // Input text color
    "& .MuiInputBase-input": {
      color: contactCss.TextColor, // change to your preferred input text color
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
    border: `2px solid ${contactCss.BorderColor}`,
    boxShadow: contactCss.BoxShadow,
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
          color: HeaderColor,
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
          background: contactCss.BackgroundColor,
          // background: `linear-gradient(135deg, #FF4081 0%, #1976d2 100%)`,
          backgroundSize: Animation ? "400% 400%" : "100%",
          animation: "gradientShift 8s ease infinite",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: `1px solid ${contactCss.BorderColor}`,
          boxShadow: contactCss.BoxShadow,
          transition: "transform 0.3s ease",
          "&:hover .settings-popup": {
            opacity: 1,
            color: contactCss.TextColor,
          },
        }}
      >
        <Box
          className="settings-popup"
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            opacity: 0,
          }}
        >
          <IconSettings
            onClick={() => setSettingDialog(true)}
            cursor="pointer"
          />
        </Box>
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
                  <Box sx={{ ...customeCss, color: contactCss.IconColor }}>
                    <IconMail size={35} />
                  </Box>
                  <Typography sx={{ color: contactCss.TextColor }}>
                    inirav114@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    ...centerCss,
                    gap: 3,
                    mt: 2,
                  }}
                >
                  <Box sx={{ ...customeCss, color: contactCss.IconColor }}>
                    <IconBrandWhatsapp size={35} />
                  </Box>
                  <Typography sx={{ color: contactCss.TextColor }}>
                    +91 95868 37258
                  </Typography>
                </Box>
                <Box
                  sx={{
                    ...centerCss,
                    gap: 3,
                    mt: 2,
                  }}
                >
                  <Box sx={{ ...customeCss, color: contactCss.IconColor }}>
                    <IconMapPin
                      size={35}
                      sx={{ color: contactCss.IconColor }}
                    />
                  </Box>
                  <Typography sx={{ color: contactCss.TextColor }}>
                    Pune, Maharashtra
                  </Typography>
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
                <Box sx={{ ...customeCss, color: contactCss.IconColor }}>
                  <IconBrandGithub
                    size={35}
                    sx={{ color: contactCss.IconColor }}
                  />
                </Box>
                <Box sx={{ ...customeCss, color: contactCss.IconColor }}>
                  <IconBrandLinkedin
                    size={35}
                    sx={{ color: contactCss.IconColor }}
                  />
                </Box>
                <Box sx={{ ...customeCss, color: contactCss.IconColor }}>
                  <IconBrandInstagram
                    size={35}
                    sx={{ color: contactCss.IconColor }}
                  />
                </Box>
                <Box sx={{ ...customeCss, color: contactCss.IconColor }}>
                  <IconBrandTwitter
                    size={35}
                    sx={{ color: contactCss.IconColor }}
                  />
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  sx={{ ...textFieldCss }}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  name="email"
                  label="Email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  sx={{ ...textFieldCss }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  name="mobile"
                  label="Mobile"
                  type="tel"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  sx={{ ...textFieldCss }}
                />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  name="subject"
                  label="Subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  sx={{ ...textFieldCss }}
                  error={formik.touched.subject && Boolean(formik.errors.subject)}
                  helperText={formik.touched.subject && formik.errors.subject}
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
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  sx={{ ...textFieldCss }}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
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
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2, color: contactCss.TextColor, border: `1px solid ${contactCss.TextColor}` }}
                    onClick={() => formik.handleSubmit()}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <SettingContact
          open={settingDialog}
          onClose={() => setSettingDialog(false)}
        />
      </Box>
    </>
  );
}
