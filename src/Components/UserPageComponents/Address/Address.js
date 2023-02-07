import { Container } from "@mui/system";
import { Card, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function Address() {

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <MenuItem
        onClick={() => {
          handleClickOpen();
          setStatusRequest("edite");
        }}
      >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge>
            <EditIcon />
          </Badge>
        </IconButton>
        <p>Edit</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClickOpen();
          setStatusRequest("delete");
        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge>
            <DeleteIcon />
          </Badge>
        </IconButton>
        <p>Delete</p>
      </MenuItem>
    </Menu>
  );



  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [statusRequest,  setStatusRequest] = React.useState(null);

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
        Address book
      </Typography>
      {
        Array.from( Array( 2 ) ).map((_, i) => {
          return (
            <Card 
              key={i + 1}
              sx={{
                padding: '10px',
                marginBottom: "20px",
              }}
            >
              <Grid container
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid item>
                  <Typography sx={{
                    margin: '10px 0px',
                  }} gutterBottom variant="h5" component="div">
                    the home
                  </Typography>                  
                </Grid>
                <Grid item>
                    <Button variant="outlined" startIcon={<EditIcon />}
                      sx={{
                        marginRight: "10px",
                        textTransform: "none",
                        display: { xs: "none", md: "inline", },
                      }}
                      onClick={ 
                        () => {
                          handleClickOpen();
                          setStatusRequest("edit");
                        }
                      }
                    >
                      Edite
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />}
                      sx={{
                        textTransform: "none",
                        display: { xs: "none", md: "inline", },
                      }}
                      onClick={() => {
                        handleClickOpen();
                        setStatusRequest("delete");
                      }}
                    >
                      Delete
                    </Button>
                    <IconButton
                      sx={{
                        display: { xs: "bloxk", md: "none", },
                      }}
                      size="small"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                    {renderMobileMenu}
                </Grid>
              </Grid>
              <Typography sx={{
                margin: '10px 0px',
              }} variant="subtitle1" gutterBottom>
                Cairo, Nasr City, 90th Street, Building 14
              </Typography>
              <Typography sx={{
                margin: '10px 0px',
              }} variant="subtitle1" gutterBottom>
                <span style={{
                  fontWeight: "700",
                }}>
                  Phone Number:&nbsp;
                </span> 
                0021313432423
              </Typography>
            </Card>
          )
        })
      }
      <Stack 
        sx={{
          marginBottom: "20px",
        }}
      >
        <Button variant="contained" style={{
            margin: "0 auto",
          }}
          onClick={() => {
            handleClickOpen();
            setStatusRequest("add");
          }}
        >
          Add a new address
        </Button>
        {
          statusRequest === "delete" ?
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Add a new address"}
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
        :
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Add a new address"}
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Naming the address, for example (home - work)"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Detailed address"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Phone number"
                type="number"
                fullWidth
                variant="standard"
              />
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
        }
      </Stack>
    </Container>
  );
};