import { Container } from "@mui/material";
// import React from 'react'
import Sliders from "../../components/Slider";
import Footer from "../../components/Footer";
import OngoingCard from "../../components/MovieDash/OngoingEvent";
import PastCard from "../../components/MovieDash/PastEvent";
import RecomendedCard from "../../components/MovieDash/RecomendedEvent";
import UpcommingCard from "../../components/MovieDash/UpcommingEvent";

export default function Home(): JSX.Element {
  return (
    <>
      <Sliders />
      <Container maxWidth="xl" color="primary" style={{ minHeight: "50vh" }}>
        <>
          <br />
          <RecomendedCard />
          <br />
          <OngoingCard />
          <br />
          <UpcommingCard />
          <br />
          <PastCard />
        </>
      </Container>
      <Footer />
    </>
  );
}
