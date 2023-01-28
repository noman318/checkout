import React from "react";
import {
  Typography,
  Grid,
  CssBaseline,
  Box,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from "react-router-dom";
import checkOut from "../../assets/check.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const theme = createTheme();

export const CheckOut = () => {

  return (
      <Grid container component="main" sx={{ height: "70vh",padding:'20px' }}>
        <CssBaseline />
        <Grid
          item
          xs={true}
          sx={{
            padding: "10px",
            // margin: "auto",
          }}
        >
          <img
            src={checkOut}
            alt="bg_image"
            height={"90%"}
            width={"100%"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={2}
          sx={{ margin: "5px 5px 5px 5px",borderRadius:'10px' }}
        >
          <Box
            sx={{
              padding: "10px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h3" variant="h5">
            <b>BOOKING SUMMARY</b>  
            </Typography>
            <Box
              component="section"
              sx={{ mt: 1 }}
            >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="body1" gutterBottom sx={{fontSize:'18px'}}><b>Event Name (2 Tickets)</b></Typography>
                    <Typography variant="body1" gutterBottom sx={{fontSize:'18px'}}><b>Rs 500.00</b></Typography>
                </Stack>
                <Stack direction={'row'} spacing={1}>
                    <Typography variant="body1" gutterBottom>Language -</Typography>
                    <Typography variant="body1" gutterBottom>English</Typography>
                </Stack>
                <hr />

                <Stack direction={'row'} sx={{mt:'5%'}}justifyContent={'space-between'}>
                    <Typography variant="body2" gutterBottom>Subtotal</Typography>
                    <Typography variant="body2" gutterBottom>Rs 500.00</Typography>
                </Stack>

                <Stack direction={'row'} sx={{mt:'20%'}} justifyContent={'space-between'}>
                    <Typography variant="h6" gutterBottom>Amount Payable</Typography>
                    <Typography variant="h6" gutterBottom>Rs 500.00</Typography>
                </Stack>
                    <Typography variant="body2">By prooceding, I  Express my consent to complete the transaction</Typography>
              <Button
                type="submit"
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 10, mb: 2 , borderRadius:'20px'}}
              >
                CHECKOT TO PROCEED
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
};
