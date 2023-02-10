import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardProdacts from "../CardProdacts/CardProdacts";
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';

export default function Prodacts( props ) {

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
        <div className='ab' style={ {margin: "0px 0px 40px",} }>
        {
          props.bottonTitleStatue === true ?
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
            <Link to='/prodacts' onClick={() => {
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
          : null
        }
        <Box sx={{ flexGrow: 1, margin: "40px 0px 40px", }}>
          <Grid container 
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12, }}>
            {Array.from(Array(props.displayNumber)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CardProdacts />
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
};