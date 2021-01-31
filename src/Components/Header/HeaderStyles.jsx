//Styling for header content
import { makeStyles } from '@material-ui/styles';

const HeaderStyles = makeStyles((theme) => ({
    root: {
        background: "#327da8",
    },
    initials: {
        fontFamily: "Squada One",
        fontSize: "300%",
        fontWeight: "400"
    },
    space:  {
        flexGrow: 1
    },
    tabs: {
        fontFamily: "Squada One",
        fontSize: "140%",
        color: "#FFFFFF",
        '&:hover': {
            background: "#2f7196"
        }
    },
})) 

export default HeaderStyles;