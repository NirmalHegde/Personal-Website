import { makeStyles } from '@material-ui/styles';

const ProjectsCardStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		height: 410
	},
	linkContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	linkSpacing: {
		display: "inline-block",
		textAlign: "center"
	},
	linkText: {
		fontSize: "0.85rem",
		color: "#000000",
		"&:hover": {
			transition: "0.3s",
			color: "#b5befa",
			fontSize: "1rem",
		}
	}
}))

export default ProjectsCardStyles;