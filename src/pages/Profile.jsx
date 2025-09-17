import {
    Box,
    Button,
    Checkbox,
    Container,
    Typography,
    useTheme,
    useMediaQuery,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Select,
    MenuItem
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "../api/endpoints";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getProfileInfo } from "../slices/profileSlice";
import { Autocomplete, TextField } from "@mui/material";
import { useFormik } from "formik";

const Profile = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { token } = useSelector((state) => state.auth);
    const heroCss = useSelector((state) => state.hero);
    const { Themes } = useSelector((state) => state.theme);
    const profileData = useSelector((state) => state.profile);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            profileImages: [{ imageUrl: "" }],
            defaultTheme: false,
            selectedProfileImage: "",
            theme: "",
        },
        onSubmit: async (values) => {
            try {
                const res = await axios.put(endpoints.update_profile, values, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                toast.success(res.data.message)
                dispatch(getProfileInfo())
            } catch (error) {
                console.log("🚀 ~ Profile ~ error:", error)
                toast.error(error.response.data.message || "Failed to update user. please try again later...")
            }
        }
    });

    useEffect(() => {
        formik.setValues({
            profileImages: profileData.profileImages.map((item) => ({
                imageUrl: item.imageUrl
            })) || [],
            defaultTheme: profileData.DefaultTheme || false,
            selectedProfileImage: profileData.selectedProfileImage || "",
            theme: profileData.theme._id || "",
        });
    }, [profileData]);

    return (
        <Container sx={{ my: 12, minHeight: "100vh" }}>
            <Typography variant="h5" gutterBottom>
                Selected Profile Image
            </Typography>

            {/* Selected image preview */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5,
                }}
            >
                <Box
                    sx={{
                        background: heroCss.BackgroundColor,
                        animation: "gradientShift 8s ease infinite",
                        borderRadius: "50%",
                        p: 3,
                    }}
                >
                    <Box
                        component="img"
                        src={formik.values.selectedProfileImage}
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
            </Box>

            {/* Available images with checkboxes */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    mt: 8,
                    gap: 4,
                }}
            >
                {formik.values.profileImages.map((profile, idx) => (
                    <Box key={idx} sx={{ textAlign: "center" }}>
                        <Box
                            sx={{
                                background: heroCss.BackgroundColor,
                                animation: "gradientShift 8s ease infinite",
                                borderRadius: "50%",
                                p: 3,
                                cursor: "pointer",
                                border:
                                    formik.values.selectedProfileImage === profile.imageUrl
                                        ? "3px solid #4cafef"
                                        : "3px solid rgba(255, 255, 255, 0.4)",
                            }}
                        >
                            <Box
                                component="img"
                                src={profile.imageUrl}
                                alt="Profile"
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                }}
                            />
                        </Box>
                        <Checkbox
                            checked={formik.values.selectedProfileImage === profile.imageUrl}
                            onChange={() =>
                                formik.setFieldValue("selectedProfileImage", profile.imageUrl)
                            }
                            sx={{ mt: 1 }}
                        />
                    </Box>
                ))}
            </Box>

            <Box sx={{ mt: 6 }}>
                <FormLabel component="legend">
                    Do you want to use Default Theme?
                </FormLabel>
                <RadioGroup
                    row
                    value={formik.values.defaultTheme}
                    onChange={(e) =>
                        formik.setFieldValue("defaultTheme", e.target.value)
                    }
                >
                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                    <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
            </Box>

            {/* Theme selection autocomplete */}
            <Box sx={{ mt: 3, maxWidth: 300 }}>
                <FormLabel component="legend">Select Default Theme</FormLabel>
                <Autocomplete
                    options={Themes || []}
                    groupBy={(option) => option.type}   // 👈 group by type
                    getOptionLabel={(option) => option.name}
                    value={
                        (Themes || []).find((t) => t._id === formik.values.theme) || null
                    }
                    onChange={(event, newValue) => {
                        formik.setFieldValue("theme", newValue ? newValue._id : "");
                    }}
                    renderOption={(props, option) => (
                        <Box
                            component="li"
                            {...props}
                            sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                            <Box
                                sx={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: "50%",
                                    background: option.color,
                                    border: "1px solid #ccc",
                                }}
                            />
                            {option.name}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Type theme..."
                        />
                    )}
                />

            </Box>

            <Box sx={{ textAlign: "center", mt: 5 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => formik.handleSubmit()}
                >
                    Update
                </Button>
            </Box>
        </Container>
    );
};

export default Profile;
