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
            src={require('../../../images/clothe.png')} alt='' />
          <CardContent>
            <Typography style={{textAlign: "center",}} gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
  );
}