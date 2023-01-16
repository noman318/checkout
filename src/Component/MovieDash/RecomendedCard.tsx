import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EventsCard from '../EventsCard';
export default function RecomendedCard() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      }
    ]
  };
 
  return (
    <>
       <Container maxWidth="lg">
        <Typography variant="h4">Recomended Events</Typography>
        <br />
       
        <Slider {...settings}>
        {Array.from(Array(6)).map((_, index) => (
        
            <EventsCard key={index} />
        
        ))}
          
        </Slider>
      </Container>
    </>
  );
}