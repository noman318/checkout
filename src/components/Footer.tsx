/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme ,ThemeProvider } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';

function Copyright() {
    const theme = createTheme({
        palette: {
          primary: {
            main: purple[500],
          },
          secondary: {
            main: grey[900],
          },
        },
      });
  return (
    <ThemeProvider theme={theme}>
    <Typography variant="body2" color="primary">
      {'Copyright © '}
      <Link color="primary" href="https://www.soware.in/">
        Soware Invonation Pvt Limited
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </ThemeProvider>
  );
}

export default function Footer() {
    const theme = createTheme({
        palette: {
          primary: {
            main: purple[500],
          },
          secondary: {
            main: grey[900],
          },
        },
      });
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '26vh'
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          background:'black',
          color:'white'
        }}
      >
        <Box><img src='https://www.soware.in/images/logo.png'/></Box>
        <Container maxWidth="xs" style={{paddingRight:'100px',float:'right'}}>
          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
    </Box>
    </ThemeProvider>
  );
}