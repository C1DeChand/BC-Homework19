import React, {Component} from "react";
import API from "../utils/API"
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./useStyles"
import GridCards from "./gridCards"
import SortSearch from "./sortSearch"

const classes = useStyles;

class EmpDir extends Component {
    state = {
      employees: [],
      search: "",
      filtered: [],
      alphabetDirection: ""
    }
  
    componentDidMount() {
      API.getUsers().then(res => this.setState({
        employees: res.data.results,
        filtered: res.data.results
      })).catch(error1 => console.log(error1))
    }

    handleChange = event => {
      const employees = this.state.employees
      const input = event.target.value
      const filtered = employees.filter(employee => employee.name.first.toLowerCase().indexOf(input.toLowerCase()) > -1)
      this.setState({filtered})
    }
  
    sortingHat = () => {
      const filteredEmps = this.state.filtered
      if (this.state.alphabetDirection === "aToZ") {
        const sortPeeps = filteredEmps.sort((a, b) => (a.name.first < b.name.first) ? 1 : (a.name.first === b.name.last) ? ((a.name.last > b.name.last) ? 1 : -1) : -1 );
        console.log("aToZ", sortPeeps)
        this.setState({
          filtered: sortPeeps,
          alphabetDirection: "zToA"
        })
      } else {
        const sortPeeps = filteredEmps.sort((a, b) => (a.name.first < b.name.first) ? -1 : (a.name.first === b.name.last) ? ((a.name.last > b.name.last) ? -1 : 1) : 1 );
        console.log("zToA", sortPeeps)
        this.setState({
          filtered: sortPeeps,
          alphabetDirection: "aToZ"
        })
      }
    }
  
  render() {
  
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
              <SortSearch sortingHat={this.sortingHat} handleChange={this.handleChange} />
            </Container>
          </div>
          <GridCards results={this.state.filtered}/>
        </main>
      </React.Fragment>
    );
  }
}

export default EmpDir;