import { Container } from '@mui/material'
// import React from 'react'
import Sliders from '../components/Slider'
import Footer from '../components/Footer'
import OngoingCard from '../components/MovieDash/OngoingCard'
import PastCard from '../components/MovieDash/PastCard'
import RecomendedCard from '../components/MovieDash/RecomendedCard'
import UpcommingCard from '../components/MovieDash/UpcommingCard'

export default function Home():JSX.Element {
  return (
    <>
    <Sliders/>
    <Container maxWidth="xl" color="primary" style={{minHeight: '50vh'}}>
      <>
      <br/>
      <RecomendedCard/>
      <br/>
      <OngoingCard/>
      <br/>
      <UpcommingCard/>
      <br/>
      <PastCard/>
      </>
    </Container>
    <Footer/>
    </>
  )
}
