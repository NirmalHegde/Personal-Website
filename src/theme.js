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
      main: "#ffffff", //dark grey
    },
    secondary: {
      main: "#ffffff", //yellow
    }
  },

  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#1f1f1f"
      }
    },
    MuiTab: {
      root: {
          textTransform: "none",
      }
    },
  }
});

export default theme;