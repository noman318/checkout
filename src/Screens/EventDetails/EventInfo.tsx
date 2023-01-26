import { Grid, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import { IEventData } from '../Home/Interface'
type eventPage={
  data:IEventData[]
}
export const EventInfo = (props:eventPage) => {
  // console.log({props.data.})
  return (
    <Grid sx={{p:'20px',marginTop:'30px'}}>
      <Typography sx={{color:'red',fontSize:'180%'}}><b>Pathaan</b></Typography>
      <Stack direction={'row'} spacing={2}>
        <Button variant='contained' color='success' size='small'>2D, IMAX, 3D</Button>
        <Button variant='contained' color='success' size='small'>Hindi, Tamil, Telugu, Telugu</Button>
      </Stack>
      <Typography>Movie details</Typography>
      <Button variant='contained' color='error' sx={{
        padding:'0.2% 12% ',
        fontSize:'20px',
        backgroundColor:'rgb(248, 68, 100)'
      }}>Book Tickets</Button>
    </Grid>
  )
}
