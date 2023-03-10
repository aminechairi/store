import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardTheMostFamousBrands from "../CardTheMostFamousBrands/CardTheMostFamousBrands";
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';

export default function TheMostFamousBrands( props ) {

  // pagination
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(
      page
    );
  };
  
  return (
    <Stack
    sx={{
      backgroundColor: "#f7f7f7",
    }}
    >
      <Container fixed>
        <div  className='ab' style={ {margin: "0px 0px 40px",} }>
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
                {
                  props.nameTitle
                }
            </Typography>
            <Link to='/allbrands' onClick={() => {
              document.documentElement.scrollTop = 0;
            }}>
              <Button variant="contained" style={{
                backgroundColor: "#272727",
                display: props.bottonStatue === true ? 'block' : 'none',
              }}>
                More
              </Button>            
            </Link>
          </Stack>
          <Box sx={{ flexGrow: 1, margin: "40px 0px", }}>
            <Grid container 
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}>
              {Array.from(Array( props.displayNumber )).map((_, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                  <CardTheMostFamousBrands />
                </Grid>
              ))}
            </Grid>
          </Box>
          {
            props.pagination === true ?
              <div style={{
                  margin: "40px 0px 0px",
                  display: "flex",
                  justifyContent: "center", 
                }}>
                <Pagination 
                count={12} 
                defaultPage={1} 
                siblingCount={0}
                onChange={handleChange} 
                shape="rounded"  
                // variant="outlined" 
                color="primary" 
                />
              </div>
            : null
          }
        </div>
      </Container>
    </Stack>
  );
}