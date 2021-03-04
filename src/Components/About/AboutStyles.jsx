import { makeStyles } from '@material-ui/styles';

const AboutStyles = makeStyles((theme) => ({
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
	picSpacing: {
		height: "100%",
		display: "flex",
		alignItems: "center"
	},
	profilePic: {
		transition: "0.3s",
		width: "80%",
		height: "auto",
		"&:hover": {
			transition: "0.3s",
			boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
		}
	},
	skills: {
		display: "inline-block",
		"&:hover": {
			transition: "0.3s",
			color: "#b5befa"
		}
	},
	button: {
		backgroundColor: "#b5befa",
		borderRadius: 20,
		marginRight: "2%",
		textTransform: "none",
		width: "90%",
		"&:hover": {
			transition: "0.3s",
			color: "#ffffff",
			backgroundColor: theme.palette.secondary.dark,
		}
	},
	buttonSpacing: {
		display: "flex",
		justifyContent: "center"
	}
}))

export default AboutStyles;