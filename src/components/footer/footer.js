import React from "react";
import useStyles from '../useStyles'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://c1dechand.github.io/Personal_Portfolio/">
          Personal Portfolio
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Footer() {
    const classes = useStyles();
    return (

    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Employee Directory
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          UW Coding Bootcamp Homework 20
        </Typography>
        <Copyright />
      </footer>

    );
}

export default Footer;