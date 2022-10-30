import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Typography, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { getFormattedDateString } from './utils';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useUserName} from './StateStore'

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  color: 'black',
  // paddingTop: '2vh',
  backgroundColor: 'white',
  boxShadow: 'unset',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AppBase(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const userName = useUserName();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Grid container>
            <Grid item xs={12} sm={8} sx={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography variant="h6" noWrap component="span" >
                  Good Morning, {userName.userName}
                </Typography>
                <Typography variant="subtitle1" noWrap component="span" >
                  {getFormattedDateString()}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ my: 3 }}
                >
                  + Add Project
                </Button>
                <Avatar variant="rounded" alt="Remy Sharp" src="profilePic.jpg" sx={{ width: 48, height: 48, margin: '12px' }}>
                </Avatar>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Typography variant="subtitle2" noWrap component="span" >
                    {userName.userName}
                  </Typography>
                  <Typography variant="caption" noWrap component="span" >
                    Project Manager
                  </Typography>
                </Box>
                <ArrowDropDownIcon  color="secondary" />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            border: 'unset'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {[
            { page: 'Home', icon: <HomeIcon color="secondary" /> },
            { page: 'Projects', icon: <AssignmentIcon color="secondary" /> },
            { page: 'Dashboard', icon: <DashboardIcon color="secondary" /> },
            { page: 'Messages', icon: <QuestionAnswerIcon color="secondary" /> },
            { page: 'Documents', icon: <DocumentScannerIcon color="secondary" /> },
            { page: 'Organizations', icon: <CorporateFareIcon color="secondary" /> },
            { page: 'Settings', icon: <SettingsIcon color="secondary" /> }
          ].map((obj) => (
            <ListItem key={obj.page} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="subtitle1">{obj.page}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{
          position: 'absolute',
          bottom: 0
        }}>
          {[
            { page: 'Logout', icon: <LogoutIcon color="secondary" /> }
          ].map((obj) => (
            <ListItem key={obj.page} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="subtitle1">{obj.page}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Toolbar />
        {props.children}
      </Main>
    </Box>
  );
}
