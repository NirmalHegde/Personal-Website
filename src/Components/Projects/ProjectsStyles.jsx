import { makeStyles } from '@material-ui/styles';

const ResumeStyles = makeStyles((theme) => ({
	size: {
		height: "90vh",
		background: theme.palette.primary.dark
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	align: {
		height: "76.5vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
})) 

export default ResumeStyles;