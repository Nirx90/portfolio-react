import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Paper,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { endpoints } from "../../api/endpoints";
import axios from "axios";
import { loginThunk } from "../../slices/authSlice";

export default function Auth() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        dispatch(loginThunk(values))
      } catch (error) {
      }
    },
  });

  return (
    <Paper
      sx={{
        p: 2,
        mt: 2,
      }}
    >
      <Typography>Login</Typography>
      <Box
        sx={{
          display: "flex",
          mt: 1,
        }}
      >
        <Box>
          <TextField
            label="Email"
            name="email"
            size="small"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="text"
            style={{ width: "100%" }}
          />
          <TextField
            label="Password"
            name="password"
            size="small"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="text"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>

      <Box sx={{ width: 200 }}>
        <Button variant="contained" onClick={() => formik.handleSubmit()}>
          Login
        </Button>
      </Box>
    </Paper>
  );
}
