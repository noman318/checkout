import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EventsCard from '../EventsCard';
import Carousel from "./Carousel";
export default function RecomendedCard() {

 
  return (
    <>
       <Container maxWidth="lg">
        <Typography variant="h4">Recomended Events</Typography>
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