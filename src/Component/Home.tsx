import { Container } from '@mui/material'
// import React from 'react'
import Sliders from './Slider'
import Footer from './Footer'
import OngoingCard from './MovieDash/OngoingCard'
import PastCard from './MovieDash/PastCard'
import RecomendedCard from './MovieDash/RecomendedCard'
import UpcommingCard from './MovieDash/UpcommingCard'

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
