import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { Container, Grid, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CardProdacts from '../CardProdacts/CardProdacts';
import Pagination from '@mui/material/Pagination';

export default function ProdactsDetails() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >     
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem 
        onClick={() => {
          handleClickOpen()
        }}
        sx={{
          display: {
            md: "none",
          },
        }}
      >
        <p>Filteration</p>
      </MenuItem>      
    </Menu>
  );

  // open alert filteration
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // filterations
  const Filter = (
      <div className='fleters'>

        <div style={{
          marginBottom: "10px",
        }}>

          <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                margin: "0 auto 0 0",
                fontWeight: "600",
              }}
            >
              Categores
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Label" />
          </FormGroup>

        </div>

        <div style={{
          marginBottom: "10px",
        }}>

          <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                margin: "0 auto 0 0",
                fontWeight: "600",
              }}
            >
              Categores
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Label" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel control={<Checkbox />} label="Label" />
          </FormGroup>

        </div>

        <div style={{
          marginBottom: "1px",
        }}>
          
          <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                margin: "0 auto 0 0",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              The price
          </Typography>
          <div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Price from
              </label>
              <input
                style={{
                  width: "calc(100% - 10px)",
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
                placeholder="Price from"
              />
            </div>
          </div>
          <div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Price to
              </label>
              <input
                style={{
                  width: "calc(100% - 10px)",
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
                placeholder="Price to"
              />
            </div>
          </div>

        </div>

      </div>
    );

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
        <Stack>
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
                6 products available
            </Typography>
            <MenuIcon 
              onClick={handleMobileMenuOpen}
              sx={{
                width: "fit-content",
                height: "32.02px",
              }}
            />
          </Stack>
          {renderMobileMenu}
          {renderMenu}      
        </Stack>
        <React.Fragment>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>Filteration</DialogTitle>
            <DialogContent>
              {
                Filter
              }
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  color: "#272727",
                }}
                >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      <Grid container>
        <Grid item md={3} lg={2} 
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          {
            Filter
          }
        </Grid>
        <Grid item md={9} lg={10}>
          <Grid 
            container 
            spacing={3} 
          >
            {
              Array.from(Array(8)).map((_, i) => {
                return (
                  <Grid key={i + 1} item xs={12} sm={6} md={6} lg={3}>
                    <CardProdacts />
                  </Grid>
                )
              })
            }
          </Grid>
          <div style={{
              margin: "40px 0px",
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
        </Grid>
      </Grid>
      </Container>
    </Stack>
  );
};