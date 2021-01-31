import { createMuiTheme } from '@material-ui/core/styles';

//Theme setup for UI
const theme = createMuiTheme({
  //change primary font to Montserrat for whole website
  typography: {
    fontFamily: "Poppins, Squada One, Arial, sans-serif",
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

  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#327da8"
      }
    },
    MuiTab: {
      root: {
          textTransform: "none", 
          //allows for hover functionality
          '&:hover': {
            background: '#2f7196'
          }
      }
    },
  }
});

export default theme;