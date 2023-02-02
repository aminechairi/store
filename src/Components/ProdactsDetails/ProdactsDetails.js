import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { Container, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Prodacts from "../../Components/Prodacts/Prodacts";

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
    </Menu>
  );


  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
          <Button 
            variant="contained" 
            startIcon={<MenuIcon />}
            onClick={handleMobileMenuOpen} 
            style={{
              backgroundColor: "#272727",
              whiteSpace: "nowrap",
              minWidth: "119.75px",
            }}>
            sort by
          </Button>
        </Stack>
        {renderMobileMenu}
        {renderMenu}      
      </Stack>

      <React.Fragment>
        <Button  onClick={handleClickOpen}
          variant="contained" 
          startIcon={<MenuIcon />}
          style={{
            backgroundColor: "#272727",
            whiteSpace: "nowrap",
            minWidth: "119.75px",
          }}>
          Filtration
        </Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Optional sizes</DialogTitle>
          <DialogContent>

            <div className='fleters'>

              <div>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{
                      margin: "0 auto 0 0",
                      fontWeight: "600",
                    }}
                  >
                    categores
                </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>

              </div>

              <div>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{
                      margin: "0 auto 0 0",
                      fontWeight: "600",
                    }}
                  >
                    categores
                </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>

              </div>

              <div>
                
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{
                      margin: "0 auto 0 0",
                      fontWeight: "600",
                    }}
                  >
                    categores
                </Typography>
                <div>
                  <div className="mb-3 xl:w-96">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Example label
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
                      placeholder="Example label"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3 xl:w-96">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Example label
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
                      placeholder="Example label"
                    />
                  </div>
                </div>

              </div>

            </div>

          </DialogContent>
          <DialogActions>
            <Button
              variant="contained" 
              style={{
                backgroundColor: "#272727",
              }}
            onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Prodacts 
        nameTitle="..."
        bottonTitleStatue={ false }
        displayNumber={ 8 }
        pagination={ true } />

    </Container>
  );
};