import { createMuiTheme } from '@material-ui/core/styles';

//Theme setup for UI
const theme = createMuiTheme({
  //change primary font to Montserrat for whole website
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
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

  //override tab themes to accomodate Figma UI
  overrides: {
      //format tab indicator (colour is based on secondary colour of colour pallete)
      MuiTabs: {
        indicator: {
            left: 0,
            width: "3px"
        }
      },
      //format tab contents
      MuiTab: {
        root: {
            textTransform: "none", 
            //formats selected tab contents
            '&$selected': {
                backgroundColor: "#F6F6F6",
                color: '#FFBF14',
            },
            //allows for hover functionality
            '&:hover': {
              background: '#F6F6F6'
            }
        }
      },
    }
});

export default theme;