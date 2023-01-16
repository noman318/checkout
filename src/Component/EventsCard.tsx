import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EventsCard() {
  return (
    <Card sx={{Width: 120,mx:'30px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://picsum.photos/seed/picsum/200/300
          "
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Events Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}