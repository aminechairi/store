import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "0px auto", }}>
      <CardActionArea>
        <img
          src='https://th.bing.com/th/id/OIP.T_qFe9Gyr778Q6MvfcbF2gHaEK?pid=ImgDet&rs=1'
          style={{
            width: "100%",
          }}
          alt=''
        />
      </CardActionArea>
    </Card>
  );
}