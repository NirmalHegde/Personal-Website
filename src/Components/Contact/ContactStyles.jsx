import { makeStyles } from '@material-ui/styles';

const ContactStyles = makeStyles((theme) => ({
	size: {
		height: "90vh"
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	}
})) 

export default ContactStyles;