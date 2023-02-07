import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "0px auto", }}>
      <CardActionArea>
        <img
          src='https://download.logo.wine/logo/Samsung_India_Software_Centre/Samsung_India_Software_Centre-Logo.wine.png'
          style={{
            width: "100%",
          }}
          alt=''
        />
      </CardActionArea>
    </Card>
  );
}