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
import { loginThunk } from "../../slices/authSlice";
import toast from "react-hot-toast";

export default function Auth() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await dispatch(loginThunk(values))
        if (res.type === "user/login/rejected") {
          toast.error(res.payload);
        }
        
        if (res.type === "user/login/fulfilled") {
          toast.success(res.payload.message)
          formik.resetForm()
        }
      } catch (error) {
        console.log("🚀 ~ Auth ~ error:", error)
      }
    },
  });

  return (
    <Paper
      sx={{
        p: 2,
        m: 2,
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
            style={{ width: "100%", marginTop: 10 }}
          />
        </Box>
      </Box>

      <Box sx={{ width: 200, mt: 2 }}>
        <Button variant="contained" onClick={() => formik.handleSubmit()}>
          Login
        </Button>
      </Box>
    </Paper>
  );
}
