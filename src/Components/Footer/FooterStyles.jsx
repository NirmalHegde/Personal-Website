//Styling for header content
import { makeStyles } from '@material-ui/styles';

const FooterStyles = makeStyles((theme) => ({
	footer: {
		display: "flex",
		background: "#232741",
		height: "8vh",
		color: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Poppins",
	},
	textContainer: {
		display: "inline-block",
		textAlign: "center"
	}
}))

export default FooterStyles;