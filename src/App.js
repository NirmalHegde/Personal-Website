//React/Material UI Libraries
import React from 'react'

//File Imports
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Particle from './Components/Particles/Particles'
import Footer from './Components/Footer/Footer'
import AppStyles from "./AppStyles"

//App contains layout of the node website
export default function App() {
  const classes = AppStyles(); //gets styles from AppStyles.jsx

  return (
    <div>
      <Header />
      <Particle />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}