/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
function Copyright() {
  return (
    <Typography variant="body2" color="primary">
      {"Copyright © "}
      <Link color="primary" href="https://www.soware.in/">
        Soware Invonation Pvt Limited
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "26vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          background: "black",
          color: "white",
        }}
      >
        <Box>
          <img src="https://www.soware.in/images/logo.png" />
        </Box>
        <Container
          maxWidth="xs"
          style={{ paddingRight: "100px", float: "right" }}
        >
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
