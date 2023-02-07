import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return ( 
      <Card>
        <CardActionArea>
            <img
            style={{
              margin: "0px auto",              
            }}
            src='https://th.bing.com/th/id/R.ffb66335dcc6e51ab5a96d15b0618ca7?rik=k1cmzKYYoFbjqA&pid=ImgRaw&r=0' alt='' />
          <CardContent>
            <Typography style={{textAlign: "center",}} gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
  );
}