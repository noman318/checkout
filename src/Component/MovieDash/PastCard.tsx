import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Slider from "react-slick";
import Typography from '@mui/material/Typography';
import EventsCard from '../EventsCard';
import NextArrowMovie from './NextArrow';
import PrevArrowMovie from './PrevArrow';
export default function PastCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrowMovie/>,
    prevArrow: <PrevArrowMovie/>,
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
        <Typography variant="h4">Past Events</Typography>
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