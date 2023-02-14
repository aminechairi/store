import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { CardActionArea } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Avatar from '@mui/material/Avatar';
import CircleIcon from '@mui/icons-material/Circle';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Snackbar from '@mui/material/Snackbar';
import BeenhereIcon from '@mui/icons-material/Beenhere';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function ProdactId() {

  // alert add to card
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  // reviews
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);



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
      <Box sx={{ flexGrow: 1, margin: "20px 0px 20px", }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} 
            sx={{
              backgroundColor: "#ffff",
            }}
          >
            <div
              id="carouselExampleControls"
              className="carousel slide relative shadow-lg p-4 carousel-dark"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <div style={{
                    width: "100%",
                    height: "500px",
                    backgroundImage: `url(${"https://th.bing.com/th/id/R.70ca5877e62bee713dbd467baa13e25f?rik=6JoHbmM0XJ5m8A&riu=http%3a%2f%2fprevexmarketing.com%2fwp-content%2fuploads%2f2021%2f06%2f8D174B5A-B870-4048-9A4F-D559DF737DCA-800x948.jpeg&ehk=c%2bjuUtQjMXr%2fGXUc%2bdKh7OjQCWdzTypNjozA65kILpc%3d&risl=&pid=ImgRaw&r=0"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <div style={{
                    width: "100%",
                    height: "500px",
                    backgroundImage: `url("https://almali.store/wp-content/uploads/2021/09/530309-Product-1-I-637675024349392442_800x800-600x600.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Stack  sx={{ padding: { xs: '20px 0px 0px', md: '20px' }, }}>
              <Typography variant="h5" gutterBottom>
                Aphone 14
              </Typography>
              <Typography
                variant="subtitle1" 
                gutterBottom
                sx={{
                  marginBottom: "14px",
                }}
              >
                Phone 14, iPhone 14 Plus Get Up to Rs. 43,000 Discount; Available on Limited Time Offer&nbsp; 
                <span 
                  style={{ 
                  color: "#faaf00",
                  fontWeight: "600",
                  }}
                >
                  4.5
                </span>
              </Typography>
              <Grid container>
                <Typography 
                  variant="h6" 
                  gutterBottom
                    sx={{
                      marginBottom: "14px",
                    }}
                  >
                  brand:
                </Typography>
                <Typography 
                  variant="h6" 
                  gutterBottom
                    sx={{
                      marginBottom: "14px",
                    }}
                  >
                  &nbsp;Apople
                </Typography>
              </Grid>
              <Grid container style={
                {
                  marginBottom: "14px",
                }
              }>
                <CircleIcon
                  size="x-larg"
                  sx={{
                    marginRight: "10px",
                    color: "red",
                    cursor: "pointer",
                    fontSize: "28px",
                  }}
                />
                <CircleIcon
                  size="x-larg"
                  sx={{
                    marginRight: "10px",
                    color: "blue",
                    cursor: "pointer",
                    fontSize: "28px",
                  }}
                />
                <CircleIcon
                  size="x-larg"
                  sx={{
                    marginRight: "10px",
                    color: "green",
                    cursor: "pointer",
                    fontSize: "28px",
                  }}
                />
                <CircleIcon
                  size="x-larg"
                  sx={{
                    marginRight: "10px",
                    color: "yellow",
                    cursor: "pointer",
                    fontSize: "28px",
                  }}
                />
              </Grid>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="subtitle1" gutterBottom
                sx={{
                  marginBottom: '14px',
                }}
              >
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur subtitle1.
              </Typography>
              <Typography variant="h6" gutterBottom
                sx={{
                  fontWeight: "700",
                  marginBottom: "14px",
                }}
              >
                3600.00 $
              </Typography>
              <div className=" xl:w-96 flex items-center space-x-2"
                style={{
                  marginBottom: "14px",
                }}
              >
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label inline-block text-gray-700"
                >
                  Quantity
                </label>
                <input
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
              <Grid container>
                <Button variant="contained" style={{
                  marginRight: "10px",
                }}>
                  order now
                </Button>
                <Button variant="contained"
                  startIcon={<LocalGroceryStoreOutlinedIcon />}
                  style={{
                    backgroundColor: "#272727",
                    marginRight: "10px",
                  }}
                  onClick={handleClick}
                >
                  Add to cart
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="Added to cart"
                  action={
                    <BeenhereIcon 
                      sx={{
                        color: "green",
                      }}
                    />
                  }
                />
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack
          sx={ { 
            marginBottom: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom 
            sx={{ 
              display: "flex",
              alignItems: "center",
            }}
          >
            Reviews:
            &nbsp;
            <span style={{ 
              color: "#faaf00",
              fontWeight: "600",
            }}>4.5</span>
            &nbsp;
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            &nbsp;(160 reviews)
          </Typography>
          <Typography variant="h6" gutterBottom 
            sx={{
              alignItems: 'center',
              display: 'flex',
              fontWeight: "700",
            }}
          >
          <Avatar
            alt="Remy Sharp"
            src=""
            sx={{ width: 24, height: 24, marginRight: "6px", }}
          />
          amine messeiyah
          </Typography>
          <Typography variant="h6" gutterBottom 
            sx={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Typography>
          <div>
            <div className="mb-3">
              <textarea style={{ width: "100%", marginBottom: "7px", }}
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
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Your comment"
                defaultValue={""}
              />
            </div>
          </div>          
          <Button variant="contained" style={{
              width: "fit-content",
            }}>
              submit
          </Button>
      </Stack>
      <Stack sx={{
        marginBottom: "20px",
      }}>
          {
            Array.from(Array(6)).map((items, index) => {
              return (
                <CardActionArea key={index + 1} sx={{ padding: "10px", }}>
                  <Typography variant="h6"
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      fontWeight: "700",
                    }}
                  >
                  <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 24, height: 24, marginRight: "6px", }}
                  />
                    amine chairi&nbsp;
                    <span style={{ 
                      color: "#faaf00",
                      fontWeight: "600",
                    }}>4.5</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                  </Typography>
                </CardActionArea>
              )
            })
          }
          <div style={{
              margin: "20px 0px 0px",
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
      </Stack>
    </Container>
  </Stack>
  );
};