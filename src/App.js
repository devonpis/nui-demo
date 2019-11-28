import React from 'react';
import { Button, Grid, Typography, Paper, AppBar, ToolBar, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from 'clui-ui';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => createStyles({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: theme.spacing(2)
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
}));

function App(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <header>
        <AppBar position="static">
            <ToolBar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                This is a demo Nui embed app
                </Typography>
                <Button color="inherit">Login</Button>
            </ToolBar>
        </AppBar>
      </header>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 1</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open dialog
              </Button>
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
                  <Button onClick={handleClose} color="primary">
                      Disagree
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                      Agree
                  </Button>
                  </DialogActions>
              </Dialog>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 2</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button 
                variant="contained"
                color="primary"
                size="medium"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 3</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button 
                variant="contained"
                color="primary"
                size="medium"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 4</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button 
                variant="contained"
                color="primary"
                size="medium"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 5</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button 
                variant="contained"
                color="primary"
                size="medium"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 6</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button 
                variant="contained"
                color="primary"
                size="medium"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 7</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button 
                variant="contained"
                color="primary"
                size="medium"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Box pb={2}>
                <Typography variant="h5" component="h3">Item 8</Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="body1" component="p">os ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</Typography>
              </Box>
              <Button 
                variant="contained"
                color="primary"
                size="medium"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
