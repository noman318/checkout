import React from "react";
import {
  Typography,
  Grid,
  CssBaseline,
  Box,
  Paper,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import gifLogo from "../../assets/SOWAREvent.gif";
import loginServices from "../../Services/loginServices";



export const ForgotPassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginServices
      .forgetpassword({ email: data.get("email") })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log({
      email: data.get("email"),
    });
  };

  return (
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={true}
          sx={{
            padding: "20px",
            margin: "auto",
          }}
        >
          <img src={gifLogo} alt="bg_image" height={"90%"} width={"100%"} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ margin: "5% 5% 5% 5%" }}
        >
          <Box
            sx={{
              padding: "20px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Mail
              </Button>
              <Link to="/login">Back to Login</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
};
