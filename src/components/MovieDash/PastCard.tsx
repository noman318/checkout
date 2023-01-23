import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EventsCard from '../EventsCard';
import Carousel from './Carousel';
export default function PastCard() {
  return (
    <>
   <Container maxWidth="lg">
        <Typography variant="h4">Past Events</Typography>
        <br />
       
        <Carousel>
        {Array.from(Array(6)).map((_, index) => (
        
            <EventsCard key={index} />
        
        ))}
          
          </Carousel>
      </Container>
    </>
  );
}