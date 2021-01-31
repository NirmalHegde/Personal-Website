//React/Material UI Libraries
import React from 'react';
import { Grid } from '@material-ui/core'; //formats contents in grid layout

//File Imports
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import AppStyles from "./AppStyles";

//App contains layout of the node website
export default function App() {
  const classes = AppStyles(); //gets styles from AppStyles.jsx

  return (
    <Grid className={classes.root} container direction="column">
      {/*Header section of the website*/}
      <Grid item xs={12}>
        <Header />
      </Grid>
      {/*Home section of the website*/}
      <Grid item xs={12}>
        <Home />
      </Grid>
      {/*Projects section of the website*/}
      <Grid item xs={12}>
        <Projects />
      </Grid>
      <Grid item xs={12}>
        <Resume />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
    </Grid>
  );
}