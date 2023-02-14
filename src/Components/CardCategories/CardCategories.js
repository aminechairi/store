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
            src='https://almali.store/wp-content/uploads/2021/09/530309-Product-1-I-637675024349392442_800x800-600x600.jpg' alt='' />
          <CardContent>
            <Typography style={{textAlign: "center",}} gutterBottom variant="h5" component="div">
              Categorie Name
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
  );
}