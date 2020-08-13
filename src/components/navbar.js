import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/AccountBox';
import useStyles from './useStyles'

const classes = useStyles;

function Navbar() {

    return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Employee Directory
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
  
  export default Navbar;