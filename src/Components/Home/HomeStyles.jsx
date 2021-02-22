import { makeStyles } from '@material-ui/styles';

const HomeStyles = makeStyles((theme) => ({
	size: {
		height: "100vh"
	},
	title: {
		display: "flex",
		alignItems: "center",
		height: "100vh"
	},
	titleText: {
		color: theme.palette.primary.main
	},
	inline: {
		display: "flex"
	}
})) 

export default HomeStyles;