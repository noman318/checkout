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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import gifLogo from "../../assets/SOWAREvent.gif";
import gifLightLogo from "../../assets/lightversion.gif";
import loginServices from "../../Services/loginServices";

const theme = createTheme();

export const LoginPage = () => {
  // This function is called when the form is submitted
  // it prevents the default form submission behavior
  // and instead logs the entered email and password to the console
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginServices.login({
      email: data.get("email"),
      password: data.get("password"),
    }).then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
          <img
            src={gifLightLogo}
            alt="bg_image"
            height={"90%"}
            width={"100%"}
          />
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
              Sign in
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forgotpassword">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to="/">{"Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
