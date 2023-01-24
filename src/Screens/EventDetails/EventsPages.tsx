import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import iron from '../../assets/iron-man.jpg'


export const EventsPages=()=> {

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
        //   xs={12}
        //   sm={4}
        //   md={7}
          sx={{
            backgroundImage: 'linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%), url(https://stat4.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-01.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            width:'100%',
            height: '80vh',
            display: 'flex'
          }}
        >
            {/* <Box component={'img'}
             sx={{
                
                  height:'85%',
                  width:'25%',
                  margin:'50px 0 0 25px',
                  borderRadius:'2%',
                }} src={iron}  alt="my_booking" />
            <Grid item spacing={2}
                xs={12}
                sm={4}
                md={7}
            sx={{
                  marginTop:'5%',
                  padding:'2%',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                  <Grid item xs>
                    <Typography sx={{color:'white',fontSize:'180%'}}><b>Pathaan</b></Typography>
                      <Button sx={{margin:'1%'}} variant='contained' color='success' size='small'>2D, IMAX, 3D</Button>
                      <Button variant='contained' color='success' size='small'>Hindi, Tamil, Telugu, Telugu</Button>
                    <Typography>Movie details</Typography>
                    <Button variant='contained' color='error' sx={{
                      margin:'120px 0 0 20px',
                      padding:'0.2% 10% ',
                      fontSize:'20px'
                    }}>Book Tickets</Button>
                  </Grid>
            </Grid> */}
        <Grid xs={12} sm={8} md={5} component={'main'}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar> */}
            <Box>
            <Box component={'img'}
             sx={{ 
                  height:'85%',
                  width:'25%',
                  margin:'50px 0 0 25px',
                  borderRadius:'2%',
                }} src={iron}  alt="my_booking" />
            <Grid spacing={2} item xs sx={{
                  marginTop:'10%',
                  padding:'2%',
                }}>
                  <Grid item xs>
                    <Typography sx={{color:'white',fontSize:'180%'}}><b>Pathaan</b></Typography>
                      <Button sx={{margin:'1%'}} variant='contained' color='success' size='small'>2D, IMAX, 3D</Button>
                      <Button variant='contained' color='success' size='small'>Hindi, Tamil, Telugu, Telugu</Button>
                    <Typography>Movie details</Typography>
                    <Button variant='contained' color='error' sx={{
                      margin:'20px 0 0 20px',
                      padding:'0.2% 10% ',
                      fontSize:'20px'
                    }}>Book Tickets</Button>
                  </Grid>
            </Grid>
            </Box>
          </Box>
        </Grid>
        </Grid>
      </Grid>
  );
}