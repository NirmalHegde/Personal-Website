import { makeStyles } from '@material-ui/styles';

const ProjectsCardStyles = makeStyles((theme) => ({
	root: {
		width: 300
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
	link: {
		fontSize: "0.85rem"
	}
}))

export default ProjectsCardStyles;