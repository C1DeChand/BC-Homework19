import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../components/useStyles"
import { TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";

export default function EmpDir() {
  const classes = useStyles();

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
    cards: []
  })

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://randomuser.me/api/?results=200&nat=u`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((cards) => {
        setAppState({ loading: false, cards: cards.results });
        console.log("cards", cards)
      });

    
  }, [])

  const [sortData, setSortData] = useState("firstName")

  useEffect(() => {
    const sortArray = () => {
    
      const sorted = appState && appState.cards && appState.cards.sort((a, b) => 
        (a.name.first < b.name.first) ? 1 : (a.name.first === b.name.last) ? ((a.name.last > b.name.last) ? 1 : -1) : -1 );
      console.log("Sorted", sorted)
      setSortData(sorted)
    };
  sortArray(sortData);
  }, [appState, sortData]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Employee Directory
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A simple React.JS application using Material-UI that shows a randomly generated directory of employees.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={6}>
                  <Select fullWidth variant="outlined" placeholder="Sort By..."
                  onChange={(e) => setSortData(e.target.value)}>
                    <option value="name">Albums</option>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.search}>
                    <TextField fullWidth variant="outlined"
                      placeholder="Search…"
                      // onChange={appState.cards.results.filter()}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {appState && appState.cards && appState.cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.picture.large}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name.first} {card.name.last}
                    </Typography>
                    <Typography>
                      Email: {card.email}
                    </Typography>
                    <Typography>
                      Phone: {card.phone}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}