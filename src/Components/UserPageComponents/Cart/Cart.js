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
        Cart
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <div className="block pb-6 rounded-lg bg-white">
            <form>
              <div className="form-group mb-6">
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
                  placeholder="Name"
                />
              </div>
              <button
                type="submit"
                className="
                  w-full
                  px-6
                  py-2.5
                  bg-blue-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  mb-5"
              >
                Subscribe
              </button>
              <button
                type="submit"
                className="
                  w-full
                  px-6
                  py-2.5
                  bg-blue-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          {
            Array.from(Array(6)).map((_, index) => {
              return (
                <div key={index + 1 }>
                  <Card sx={{ marginBottom: "20px", }}>
                    <Grid container spacing={0} sx={{ 
                        justifyContent: "space-between",
                        padding: "20px 20px 0px",
                      }}
                      >
                      <Typography noWrap variant="subtitle1" gutterBottom
                        sx={{
                          margin: "0px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Electronec
                      </Typography>
                      <Button 
                        startIcon={<DeleteIcon />}
                        size="small"
                        sx={{
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={handleClickOpen}
                      >
                        Delete
                      </Button>
                    </Grid>
                    <Card sx={{
                      display: { sx: "block", sm: "flex", } ,
                      alignItems: "center",
                      boxShadow: 'none',
                    }}>
                      <CardMedia
                        component="img"
                        image={"https://th.bing.com/th/id/R.dd7075bb4cc050d83fa5101b50fdd33b?rik=%2fjU0I60Jji1VMQ&riu=http%3a%2f%2fwww.inta-audio.com%2fimages%2fproducts%2fzoom%2f1362571171-53718100.jpg&ehk=3B0%2fq9URcfOby5vN0ihIC2C2eS0Pw3%2bJuBmSlVLWGvs%3d&risl=&pid=ImgRaw&r=0"}
                        alt="green iguana"
                        sx={{
                          maxWidth: "160px",
                          margin: "0 auto",
                          padding: "20px",
                        }}
                      />
                      <Stack sx={{ 
                          flexGrow: 1,
                          padding: "20px",
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
                        <div>
                          <div>
                            <div className="mb-3 xl:w-96 flex items-center space-x-2">
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
                                placeholder="Example label"
                              />
                            </div>
                          </div>
                        </div>
                      </Stack>
                    </Card>
                    <Grid container spacing={0} sx={{ justifyContent: "flex-end",}}>
                      <Typography noWrap variant="subtitle1" gutterBottom
                        sx={{
                          padding: '0px 20px 10px',
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
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};