import React from 'react'
import { Grid, Typography, TextField, Button, useMediaQuery } from '@material-ui/core'
import { db } from "../../firebaseConfig";
import emailjs from 'emailjs-com'
import ContactStyles from './ContactStyles'

const Contact = () => {
	const classes = ContactStyles();

	const lg = useMediaQuery('(min-width: 1100px)');

	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [errorName, setErrorName] = React.useState(false);
	const [errorEmail, setErrorEmail] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState(false);

	const submitHander = (e) => {
		e.preventDefault();
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setErrorName(false);
		setErrorEmail(false);
		setErrorMessage(false);
		console.log(process.env);

		if (name === "" || !emailRegex.test(email) || message === "") {
			if (name === "") {
				setErrorName(true);
			}

			if (!emailRegex.test(email)) {
				setErrorEmail(true);
			}

			if (message === "") {
				setErrorMessage(true);
			}
		} else {
			const emailObject = {
				name: name,
				email: email,
				message: message
			}
			
			db.collection('contacts').add(emailObject)
				.then(() => {
					console.log('submitted to Firebase');
				})
				.catch((err) => {
					console.log(err.message);
				});

			emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, emailObject, process.env.REACT_APP_USER_ID)
				.then((result) => {
					console.log(result.text);
					alert('Message has been submitted 🚀');
				}, (err) => {
					console.log(err.text);
				});
			
			setName('');
			setEmail('');
			setMessage('');
			setErrorName(false);
			setErrorEmail(false);
			setErrorMessage(false);
		}
	}

	return (
		<Grid container id="contact" direction="row-reverse">
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">Contact Me</Typography>
				<Typography variant="h4">~ Can't Wait to Connect! ~</Typography>
			</Grid>
			<Grid item xs={1}></Grid>
			<Grid item xs={10} md={4}>
				<div className={classes.formContainer}>
					<form onSubmit={submitHander} className={classes.form}>
						<TextField
							className={classes.input}
							value={name}
							onChange={(e) => setName(e.target.value)}
							label="Name"
							variant="outlined"
							error={errorName}
							helperText={errorName ? "Please enter a name." : ""}
						/>
						<br /><br />
						<TextField
							className={classes.input}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							label="Email"
							variant="outlined"
							error={errorEmail}
							helperText={errorEmail ? "Please enter a correct email." : ""}
						/>
						<br /><br />
						<TextField
							className={classes.input}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							label="Message"
							multiline
							rows={10}
							variant="outlined"
							error={errorMessage}
							helperText={errorMessage ? "Please enter a message." : ""}
						/>
						<br /><br />
						<div className={classes.center}>
							<Button type="submit" variant="contained" size="large" className={classes.button}>
								Submit
      				</Button>
						</div>
					</form>
				</div>
			</Grid>
			{lg && <Grid item xs={6}></Grid>}
			<Grid item xs={1}></Grid>
		</Grid>
	)
}

export default Contact;
