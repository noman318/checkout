import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import EventsCard from "../EventsCard";
import Carousel from "./Carousel";
export default function UpcommingCard() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4">Upcomming Events</Typography>
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
