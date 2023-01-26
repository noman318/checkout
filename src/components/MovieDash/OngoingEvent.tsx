import * as React from "react";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { EventsCard } from "../EventsCard";
import { getAll } from"../../Services/eventServices";
import { useState, useEffect } from "react";
import { IEventData } from "../../Screens/Home/Interface";

export default function OngoingCard() {
  const settings = {
    dots: false,
    infinite: true,
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [event, setEvent] = useState<Array<IEventData>>([]);

  useEffect(() => {
    getAll()
      .then((res: any) => {
        console.log(res.data)
        setEvent(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4">Ongoing Events</Typography>
        <br />
        <Slider {...settings}>
          {event.slice(0, 6).map((data1, index) => (
            <EventsCard key={index} data={data1} />
          ))}
        </Slider>
      </Container>
    </>
  );
}