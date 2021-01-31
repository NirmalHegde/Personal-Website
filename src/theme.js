import { createMuiTheme } from '@material-ui/core/styles';

//Theme setup for UI
const theme = createMuiTheme({
  //change primary font to Montserrat for whole website
  typography: {
    fontFamily: "Poppins, Carter One, Arial, sans-serif",
  },

  //set colour pallete
  palette: {
    primary: {
      light: "#757575", //light grey
      main: "#404040", //dark grey
    },
    secondary: {
      main: "#FFBF14", //yellow
    }
  },
});

export default theme;