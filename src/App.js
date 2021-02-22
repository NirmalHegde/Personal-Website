//React/Material UI Libraries
import React from 'react';
import { Grid } from '@material-ui/core'; //formats contents in grid layout

//File Imports
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Particle from './Components/Particles/Particles';
import AppStyles from "./AppStyles";

//App contains layout of the node website
export default function App() {
  const classes = AppStyles(); //gets styles from AppStyles.jsx

  return (
    <div>
      <Header />
      <Particle />
      <Home />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}