import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThemesThunk } from "../slices/themeSlice";
import { Add, PlusOne } from "@mui/icons-material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Theme = () => {

    const [useInset, setUseInset] = useState(false);
    const [standardThemes, setStandardThemes] = useState([]);
    const [gradientThemes, setGradientThemes] = useState([]);
    const [animatedThemes, setAnimatedThemes] = useState([]);

    const { Themes } = useSelector((state) => state.theme)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllThemesThunk())
    }, [])

    useEffect(() => {
        const standard = Themes.filter((th) => th.type === "Standard")
        const gradient = Themes.filter((th) => th.type === "Gradient")
        const animated = Themes.filter((th) => th.type === "Animated")
        setStandardThemes(standard)
        setGradientThemes(gradient)
        setAnimatedThemes(animated)
    }, [Themes])

    return (
        <Container sx={{ mt: 12 }}>
            <Box sx={{ display: 'flex', float: 'right' }}>
                <Button variant="contained" startIcon={<Add />}>
                    Add
                </Button>
            </Box>
            <Box mt={5}>
                <Typography>Standard</Typography>
                <Box
                    sx={{

                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: 1,
                    }}
                >
                    {standardThemes.length > 0 && standardThemes.map((th) => (
                        <Box>

                            <Box
                                onClick={() => setTheme(th)}
                                sx={{
                                    background: th.color,
                                    width: 50,
                                    height: 50,
                                    borderRadius: 2,
                                    cursor: "pointer",
                                }}
                            ></Box>

                            <Typography textAlign="center" fontSize={9}>
                                {th.name}{" "}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box mt={5}>
                <Typography>Gradient</Typography>
                <Box
                    sx={{

                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: 1,
                    }}
                >
                    {gradientThemes.length > 0 && gradientThemes.map((th) => (
                        <Box>

                            <Box
                                onClick={() => setTheme(th)}
                                sx={{
                                    background: th.color,
                                    width: 50,
                                    height: 50,
                                    borderRadius: 2,
                                    cursor: "pointer",
                                }}
                            ></Box>

                            <Typography textAlign="center" fontSize={9}>
                                {th.name}{" "}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box mt={5}>
                <Typography>Animated</Typography>
                <Box
                    sx={{

                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: 1,
                    }}
                >
                    {animatedThemes.length > 0 && animatedThemes.map((th) => (
                        <Box>

                            <Box
                                onClick={() => setTheme(th)}
                                sx={{
                                    background: th.color,
                                    width: 50,
                                    height: 50,
                                    borderRadius: 2,
                                    cursor: "pointer",
                                }}
                            ></Box>

                            <Typography textAlign="center" fontSize={9}>
                                {th.name}{" "}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box mt={5}>
                <Typography>All</Typography>
                <Box
                    sx={{

                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mt: 1,
                    }}
                >
                    {Themes.length > 0 && Themes.map((th) => (
                        <Box>
                            <Box
                                key={th.color}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 60,
                                    height: 60,
                                    // border: `2px solid ${th.color}`,
                                    borderRadius: 2,
                                    background: th.color,
                                }}
                            >
                                <Box
                                    onClick={() => setTheme(th)}
                                    sx={{
                                        background: th.color,
                                        width: 40,
                                        height: 40,
                                        borderRadius: 2,
                                        cursor: "pointer",
                                        boxShadow: useInset ? th?.InsetBoxShadow : th.BoxShadow,
                                    }}
                                ></Box>
                            </Box>
                            <Typography textAlign="center" fontSize={9}>
                                {th.name}{" "}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <Box id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Theme;
