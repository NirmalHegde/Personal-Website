import { makeStyles } from '@material-ui/styles';

const ContactStyles = makeStyles((theme) => ({
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	formContainer: {
		height: "78vh",
		position: "relative"
	},
	form: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-100%, -50%)"
	},
	input: {
		width: "200%",
		fontWeight: "600",
		'& label.Mui-focused': {
      color: theme.palette.secondary.dark,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.secondary.dark,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#b5befa',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.dark,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.dark,
      },
    },
	},
	center: {
		display: "flex",
		justifyContent: "center",
		width: "200%"
	},
	button: {
		backgroundColor: "#b5befa",
		borderRadius: 20,
		marginRight: "2%",
		textTransform: "none",
		"&:hover": {
			transition: "0.3s",
			color: "#ffffff",
			backgroundColor: theme.palette.secondary.dark,
		}
	},
	contact: {
		textDecoration: "none",
		color: "#000000",
		"&:hover": {
			transition: "0.3s",
			color: "#b5befa"
		}
	},
	spacing: {
		display: "flex",
		alignItems: "center"
	}
}))

export default ContactStyles;