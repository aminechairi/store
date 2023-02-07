import { Container } from "@mui/system";
import { Card, Grid, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
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
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function UserProfile() {

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
        Personal Page
      </Typography>
        <Card 
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
                  Personal data
              </Typography>                  
            </Grid>
            <Grid item>
              <IconButton
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
              textAlign: "center",
            }} 
            variant="subtitle1" 
            gutterBottom
            noWrap
          >
            <span style={{
                fontWeight: "700",
              }}
            >
              User Name:&nbsp;
            </span> 
              Amine Chairi
          </Typography>
          <Typography sx={{
              margin: '10px 0px',
              textAlign: "center",
            }} 
            variant="subtitle1" 
            gutterBottom
            noWrap
          >
            <span style={{
                fontWeight: "700",
              }}
            >
              Email:&nbsp;
            </span> 
              Aminechairi2000@gmail.com
          </Typography>
          <Typography sx={{
              margin: '10px 0px',
              textAlign: "center",
            }} 
            variant="subtitle1" 
            gutterBottom
            noWrap
          >
            <span style={{
                fontWeight: "700",
              }}
            >
              Phone Number:&nbsp;
            </span> 
              0021313432423
          </Typography>
        </Card>
      <Stack 
        sx={{
          marginBottom: "20px",
        }}
      >
        <Button variant="contained" style={{
            margin: "0 auto",
            textTransform: "none",
          }}
          onClick={() => {
            handleClickOpen();
            setStatusRequest("changePassword");
          }}
        >
          Change Password
        </Button>
        {
          statusRequest === "edite" ?
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Edit Personel Data"}
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="User name"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Adress email"
                type="email"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Nuber phone"
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
        :
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Change Password"}
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Enter the old password"
                type="password"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Enter the new password"
                type="password"
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