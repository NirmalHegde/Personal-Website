//Styling for header content
import { Palette, PlayCircleFilledTwoTone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const HeaderStyles = makeStyles((theme) => ({
    navbarSolid: {
        transition: "0.5s",
        background: "#1F1F1F",
    },
    navbarTransparent: {
        transition: "0.5s",
        background: "transparent",
    },
    initials: {
        fontFamily: "Poppins",
        color: theme.palette.primary.main,
        fontSize: "300%",
        fontWeight: "400"
    },
    space:  {
        flexGrow: 1
    },
    tabs: {
        fontFamily: "Poppins",
        fontSize: "110%",
        fontWeight: "500",
        color: theme.palette.primary.main,
        '&:hover': {
            transition: "0.5s",
            color: "#a0eb72"
        }
    },
    icon: {
        color: "#FFFFFF",
        fontSize: "115%"
    }
}))

export default HeaderStyles;