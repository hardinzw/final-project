
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Movie and TV Streaming Finder
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit"href="/tv">TV</Button>
          <Button color="inherit" href="/movies">Movies</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}