import { makeStyles } from '@material-ui/styles';

const ContactStyles = makeStyles((theme) => ({
	size: {
		height: "90vh"
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	form: {
		height: "76.5vh",
		display: "flex",
		alignItem: "center"
	},
	align: {
		display: "flex",
		justifyContent: "center"
	},
	formSpacing: {
		height: "20vh"
	}
})) 

export default ContactStyles;