import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardTheMostFamousBrands from "../CardTheMostFamousBrands/CardTheMostFamousBrands";


export default function TheMostFamousBrands() {

  return (
    <Container fixed>
      <Stack spacing={2} direction="row" 
      style={{
        margin: "20px 0px",
      }}
      >
        <Typography
            variant="h5"
            noWrap
            component="div"
            style={{
              margin: "0 auto 0 0",
              fontWeight: "600",
            }}
          >
            The Most Famous Brands
        </Typography>
        <Button variant="contained" style={{
          backgroundColor: "#272727",
        }}>
          More
        </Button>
      </Stack>
      <Box sx={{ flexGrow: 1, margin: "40px 0px", }}>
        <Grid container 
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}>
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <CardTheMostFamousBrands />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}