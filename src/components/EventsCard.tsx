import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IEventData } from "../Screens/Home/Interface";
import { useNavigate } from "react-router-dom";
type eventCard = {
  data: IEventData;
};

export const EventsCard = (props: eventCard) => {
  const navigate = useNavigate()
  const getEventDetails =(id:String)=>{
  console.log('Event details')
  navigate(`/eventdetails/${id}`)
  }
  return (
    <Card sx={{ Width: 120, mx: "30px" }} onClick={()=>getEventDetails(props.data._id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={props.data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};