import React from 'react';
import { Button, Container, Grid, Typography, Paper, Card, ThemeProvider, globalTheme } from 'clui-ui';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import myTheme from './globalTheme';

const useStyles = makeStyles(theme => createStyles({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

function App(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={globalTheme}>
      <ThemeProvider theme={theme => myTheme(theme, props.config.theme)}>
        <div className={classes.root}>
            <Box pb={4}>
              <Typography variant="h4" component="h1">This is a demo Nui embed app</Typography>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Box pb={2}>
                    <Typography variant="h5" component="h3">Item 1</Typography>
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
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
