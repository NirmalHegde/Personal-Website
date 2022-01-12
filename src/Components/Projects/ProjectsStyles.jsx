import { makeStyles } from '@material-ui/styles';

const ProjectsStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.primary.dark
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	align: {
		height: "90vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
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
}))

export default ProjectsStyles;