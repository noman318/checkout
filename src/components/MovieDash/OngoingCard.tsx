import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EventsCard from '../EventsCard';
import Carousel from './Carousel';

export default function OngoingCard() {
  

  return (
    <>
              <Container maxWidth="lg">
        <Typography variant="h4">Ongoing Events</Typography>
        <br />
       
        {/* <Slider {...settings}> */}
        <Carousel>
        {Array.from(Array(6)).map((_, index) => (
        
            <EventsCard key={index} />
        ))}
          </Carousel>
        {/* </Slider> */}
      </Container>
    </>
  );
}