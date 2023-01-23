import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import eventServices from '../Services/eventServices'
import EventData from '../Screens/eventInterface';
export default function EventsCard():JSX.Element {
  const [event,setevent]=React.useState<Array<EventData>>([]);
   React.useEffect(()=>{
    eventServices.getAll()
    .then((res:any)=>setevent(res))
    .catch((e:Error)=>{
      console.log(e)
    })
   },[])
   console.log(event[1]);
  return (
    <>
    {/* {event && event.map(({myevent,index}:any)=> */}
    <Card sx={{Width: 120,mx:'30px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://picsum.photos/200/300"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {/* {myevent.name} */}
            Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {myevent.description} */}
            cat
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></>
  );
}