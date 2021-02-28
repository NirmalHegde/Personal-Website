import { makeStyles } from '@material-ui/styles';

const AboutStyles = makeStyles((theme) => ({
	size: {
		height: "90vh"
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	subTitle: {
    fontWeight: "600"
	},
	subTitleSmall: {
		fontWeight: "600"
	},
	button: {
		backgroundColor: "#b5befa",
		borderRadius: 20,
		marginRight: "2%",
		textTransform: "none",
		"&:hover": {
			transition: "0.3s",
			color: "#ffffff",
			backgroundColor: theme.palette.secondary.dark,
		}
	}
}))

export default AboutStyles;