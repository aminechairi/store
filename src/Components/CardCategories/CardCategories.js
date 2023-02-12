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
            src='https://cdn1.productnation.co/stg/sites/1/5e267c2f8d8b9.jpeg' alt='' />
          <CardContent>
            <Typography style={{textAlign: "center",}} gutterBottom variant="h5" component="div">
              Name Categorie
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
  );
}