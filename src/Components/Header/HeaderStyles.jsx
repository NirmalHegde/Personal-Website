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
        fontSize: "100%",
        color: "#FFFFFF"
    }
})) 

export default HeaderStyles;