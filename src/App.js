import React from 'react';
import {withCookies} from 'react-cookie';
import { Button, Grid, Typography, Paper, AppBar, Toolbar, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from 'clui-ui';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon  from '@material-ui/icons/Inbox';
import MailIcon   from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => createStyles({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function App(props) {
  const {cookies} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const mainMenuItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];
  const secondaryMenuItems = ['All mail', 'Trash', 'Spam', ];
  const mainItems = ['All mail', 'Trash', 'Spam', 'Inbox', 'Starred', 'Send email', 'Drafts', 'new item'];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {mainMenuItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryMenuItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <React.Fragment>
      <header>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                This is a demo Nui embed app
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
      </header>
      <div className={classes.root}>
        <Box pb={4}>
          <Typography variant="body1" component="p">Global variable: <b>{window.globalVar || "-"}</b></Typography>
          <Typography variant="body1" component="p">Local storage variable: <b>{window.localStorage.getItem('localStorageVar') || "-"}</b></Typography>
          <Typography variant="body1" component="p">Cookie variable: <b>{cookies.get('cookieVar') || "-"}</b></Typography>
          <Typography variant="body1" component="p">clientId: <b>{props.config.clientId}</b></Typography>
        </Box>
        <Grid container spacing={4}>
          {mainItems.map((text, index) => (
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Box pb={2}>
                  <Typography variant="h5" component="h3">{text}</Typography>
                </Box>
                <Box pb={2}>
                  <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
                </Box>
                <Button variant="contained" color="primary" size="medium" onClick={handleClickOpen}>
                  Open dialog
                </Button>
              </Paper>
            </Grid>
          ))}          
        </Grid>
      </div>
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">{"This is a sample dialog(modal)"}</DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
              Agree
          </Button>
          <Button onClick={handleClose} variant="outlined" color="primary">
              Disagree
          </Button>
          </DialogActions>
      </Dialog>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </React.Fragment>
  );
}

export default withCookies(App);
