import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Slider from "react-slick";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EventsCard from '../EventsCard';
import NextArrowMovie from './NextArrow';
import PrevArrowMovie from './PrevArrow';

export default function OngoingCard() {
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
        <Typography variant="h4">Ongoing Events</Typography>
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