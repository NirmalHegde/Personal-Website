import { makeStyles } from '@material-ui/styles';

const ContactStyles = makeStyles((theme) => ({
	size: {
		height: "90vh"
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	formContainer: {
		height: "76.5vh",
		position: "relative"
	},
	form: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	}
})) 

export default ContactStyles;