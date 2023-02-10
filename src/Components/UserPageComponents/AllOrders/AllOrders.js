import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

export default function AllOrders() {

  return (
    <Container fixed>
      <Typography variant="h5" gutterBottom noWrap
        sx={{
          fontWeight: "700",
          margin: "20px 0px",
        }}
      >
        All Orders
      </Typography>
      
      {
        Array.from(Array(6)).map((_, index) => {
          return (
            <div key={index + 1 }>
              <Card sx={{ marginBottom: "20px", }}>
                <Typography noWrap variant="subtitle1" gutterBottom
                  sx={{
                    padding: '10px 16px',
                    margin: "0px",
                  }}
                >
                  Request No. #{ index + 24 }
                </Typography>
                <Card sx={{
                  display: { sx: "block", sm: "flex", } ,
                  alignItems: "center",
                  boxShadow: 'none',
                }}>
                  <CardMedia
                    component="img"
                    image={"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg"}
                    alt="green iguana"
                    sx={{
                      maxWidth: "160px",
                      margin: "0 auto",
                      padding: "16px",
                    }}
                  />
                  <Stack sx={{ 
                      flexGrow: 1,
                      padding: "16px",
                    }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography sx={{
                      width: { md: 400, },
                    }} variant="subtitle1" gutterBottom>
                      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                      blanditiis tenetur &nbsp; 
                      <span style={{ 
                      color: "#faaf00",
                      fontWeight: "600",
                      }}>1.5</span>
                    </Typography>
                    <CircleIcon
                      sx={{
                        marginBottom: "7px",
                      }}
                    />
                    <div>
                      <div>
                        <div className=" xl:w-96 flex items-center space-x-2">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block text-gray-700"
                          >
                            Quantity
                          </label>
                          <input
                          style={{
                            width: "100%",
                          }}
                            disabled
                            type="number"
                            className="
                                  form-control
                                  block
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                            id="exampleFormControlInput1"
                            placeholder=""
                            defaultValue={1}
                          />
                        </div>
                      </div>
                    </div>
                  </Stack>
                </Card>
                <Grid container spacing={0} sx={{ justifyContent: "space-between",}}>
                  <Typography noWrap variant="subtitle1" gutterBottom
                    sx={{
                      padding: '0px 16px 10px',
                      margin: "0px",
                    }}
                  >
                    <span style={{
                      fontWeight: "700",
                    }}>
                      Status:
                    </span>
                    &nbsp;in progress
                  </Typography>
                  <Typography noWrap variant="subtitle1" gutterBottom
                    sx={{
                      padding: '0px 16px 10px',
                      margin: "0px",
                    }}
                  >
                    400 $
                  </Typography>
                </Grid>
              </Card>
            </div>
          );
        })
      }
    </Container>
  );
};