import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

export default function PaymentMethods() {
  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1, margin: "40px 0px", }}>
        <Grid
          container 
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12, }}>
            <Grid item xs={4} sm={4} md={2} lg={2}>
              <img
                src={require('../../images/paypal.png')}
                alt=''
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2}>
              <img
                src={require('../../images/mastervisa.png')}
                alt=''
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2}>
              <img
                src={require('../../images/mastercard.jpg')}
                alt=''
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2}>
              <img
                src={require('../../images/vasa.png')}
                alt=''
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2}>
              <img
                src={require('../../images/payoner.png')}
                alt=''
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
};