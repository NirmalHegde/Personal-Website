import { makeStyles } from '@material-ui/styles';

const HomeStyles = makeStyles((theme) => ({
	size: {
		height: "100vh"
	},
	title: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		height: "100vh"
	},
	titleText: {
		color: theme.palette.primary.main,
	},
	inline: {
		color: theme.palette.primary.main,
		fontFamily: "Poppins",
		fontSize: "1.6rem"
	}
}))

export default HomeStyles;