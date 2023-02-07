import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from "../../Components/NavBar/NavBar";
import { Stack } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function UserPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {
              open === true ?
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>              
              :
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>              
            }
          </DrawerHeader>
          <Divider />
            <List>
              {[
                {
                  Text: 'Manage orders',
                  Icon: <ManageAccountsIcon />,
                  Path: "/user",
                },
                {
                  Text: 'Favorite list',
                  Icon: <BookmarksIcon />,
                  Path: "favorite",
                },
                {
                  Text: 'Personal address',
                  Icon: <ContactMailIcon />,
                  Path: "address",
                },
                {
                  Text: 'Profile personly',
                  Icon: <AccountCircleIcon />,
                  Path: "/",
                },
                ].map((items, index) => (
                
                <Link to={items.Path} key={items.Text}>
                  <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        {
                          items.Icon
                        }
                      </ListItemIcon>
                      <ListItemText primary={items.Text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>                
                </Link>
              ))}
            </List>
          <Divider />
        </Drawer>
        <Stack sx={{
          backgroundColor: open === true ?  "#00000075" : "#00000000",
          width: "100%",
          height: "100vh",
          position: "fixed",
          transition: "all 0.1s",
          zIndex: open === true ? "1" : "-1",
        }}
        onClick={handleDrawerClose}
        >
        </Stack>
      </Box>
      <Stack sx={{
        position: "absolute",
        top: "0",
        left: "56px",
        width: "calc( 100% - 56px )",
        backgroundColor: "#fff",
      }}>
        <NavBar />
        <Outlet />
      </Stack>
    </>
  );
};