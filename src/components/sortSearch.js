import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import useStyles from "./useStyles"

const classes = useStyles;

function sortSearch(props) {

    return (
        <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item xs={12} sm={6}>
                    <Button fullWidth variant="outlined" placeholder="Sort By..."
                    onClick={props.sortingHat}>Sort by Name
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className={classes.search}>
                      <TextField fullWidth variant="outlined"
                        placeholder="Search by Employee Name"
                        onChange={props.handleChange}
                        value={props.value}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
    )
}

export default sortSearch;