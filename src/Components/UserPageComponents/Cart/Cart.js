import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

export default function Cart() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container fixed>
      <Typography variant="h5" gutterBottom noWrap
        sx={{
          fontWeight: "700",
          margin: "20px 0px",
        }}
      >
        Shoping Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <div className="block rounded-lg">
            <form>
              <Typography variant="subtitle1" gutterBottom
                sx={{
                  marginBottom: "10px",
                }}
              >
                450.00 $
              </Typography>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control block
                    w-full
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput90"
                  placeholder="Code Promo"
                />
              </div>
              <button
                style={{
                  backgroundColor: "#272727",
                }}
                type="submit"
                className="
                  w-full
                  px-6
                  py-2.5
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  transition
                  duration-150
                  ease-in-out"
              >
                Order now
              </button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          {
            Array.from(Array(6)).map((_, index) => {
              return (
                  <div key={index + 1 }                  >
                    <Card sx={{ marginBottom: "20px", }}>
                      <Grid container spacing={0} sx={{ 
                          justifyContent: "space-between",
                          padding: "16px 16px 0px",
                        }}
                        >
                        <Typography noWrap variant="subtitle1" gutterBottom
                          sx={{
                            margin: "0px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          Categorie
                        </Typography>
                        <DeleteIcon
                          sx={{
                            color: "red",
                            cursor: "pointer",
                            height: "28px",
                          }}
                          onClick={handleClickOpen}
                        />
                      </Grid>
                      <Card sx={{
                        display: { sx: "block", sm: "flex", } ,
                        alignItems: "center",
                        boxShadow: 'none',
                      }}>
                      <Link 
                          to="/prodact/1" 
                          onClick={() => {
                            document.documentElement.scrollTop = 0;
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={"https://th.bing.com/th/id/R.70ca5877e62bee713dbd467baa13e25f?rik=6JoHbmM0XJ5m8A&riu=http%3a%2f%2fprevexmarketing.com%2fwp-content%2fuploads%2f2021%2f06%2f8D174B5A-B870-4048-9A4F-D559DF737DCA-800x948.jpeg&ehk=c%2bjuUtQjMXr%2fGXUc%2bdKh7OjQCWdzTypNjozA65kILpc%3d&risl=&pid=ImgRaw&r=0"}
                            alt="green iguana"
                            sx={{
                              maxWidth: "160px",
                              margin: "0 auto",
                              padding: "16px",
                            }}
                          />
                        </Link>
                        <Stack sx={{ 
                            flexGrow: 1,
                            padding: "16px",
                          }}>
                          <Typography gutterBottom variant="h5" component="div">
                            Aphone 14
                          </Typography>
                          <Typography sx={{
                            width: { lg: 600, },
                          }} variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
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
                      <Grid container spacing={0} sx={{ justifyContent: "flex-end",}}>
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
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete this product from the cart ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "#272727",
            }}
            autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            sx={{
              color: "#272727",
            }}
          onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};