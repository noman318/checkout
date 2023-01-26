import React ,{useState,useEffect} from 'react'
import iron from '../../assets/iron-man.jpg'
import { EventInfo } from './EventInfo';
import { Container,Typography,Grid, Box } from '@mui/material';
import Data from '../../data/events'
import { useParams } from 'react-router-dom';
import { getById } from '../../Services/eventServices';
import { IEventData } from "../../Screens/Home/Interface";
export const EventPage=()=> {
  const params = useParams()
  const singleParams = params.id;
  const [event, setEvent] = useState<Array<IEventData>>([]);
  useEffect(() => {
    getById(singleParams)
      .then((res: any) => {

        setEvent(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);
  return (
          <Grid container component="main">
            <Grid item 
            xs={false}
            sm={12}
            md={12}
            lg={12}
            sx={{
                backgroundImage:'linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%), url(https://stat4.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-01.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                width:'100%',
                minHeight: '30rem',
                display:'flex',
                flexBasis:'50%',
                minWidth:'50%'
              }} direction={'row'}>
                <Box component={'img'} sx={{
                  display:'flex',
                  flexGrow:{
                    xs: 1,
                    sm: 1,
                    md: 0,
                    lg:0
                  },
                  height:'75%',
                  width:'30%',
                  margin:'35px 35px 0 35px',
                  borderRadius:'2%',
                }} src={iron}  alt="my_booking" />
                <Box item 
                component={Grid}
                xs={12}
                md={6}
                lg={3}
                display={{xs: "none",md:'block', lg: "block"}}
                sx={{
                  padding:'2%',
                }}>
                  { <EventInfo data={event}/>}
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3} display={{ md:'none',lg:'none'}}>
              <EventInfo data={event}/>
            </Grid>
            <Container sx={{margin:'1.5rem'}}>
              <Box>
              <Typography variant='h4' gutterBottom><b>About Movie</b></Typography>
                <Typography variant='h6'>Pathaan</Typography>
                <Typography variant='subtitle1' gutterBottom>Make. Some. Noise! PATHAAN is here! The high-octane spy thriller 'PATHAAN' starring Shah Rukh Khan, Deepika Padukone and John Abraham, directed by Siddharth Anand is set to release on January 25, 2023. The action spectacle will be released in Hindi, Tamil and Telugu. Celebrate Pathaan with YRF50 only at a big screen near you.</Typography>
              </Box>
              <Box>
                <Typography variant='h4'>Cast</Typography>
                <Grid sx={{display:'flex'}}>
                {
                  Data.map((cast: any) =>(
                    <Box component={'section'} sx={{
                      margin:'10px',
                    }} key={cast.id}>
                      <Grid item xs >
                      <Box component={'img'} sx={{ borderRadius: '50%', height: '100px', width: '100px', margin: '1%' }} alt='cast' src={cast.image} />
                      <Typography variant='h6'>{cast.name}</Typography>
                      </Grid>
                    </Box>
                  ))
                }
                </Grid>
              </Box>
            </Container>
          </Grid>
        );
}



