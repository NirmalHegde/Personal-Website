import React from 'react'
import { Grid, Typography, TextField, Button, useMediaQuery } from '@material-ui/core'
import { db } from "../../firebaseConfig";

import ContactStyles from './ContactStyles'

const Contact = () => {
	const classes = ContactStyles();

	const lg = useMediaQuery('(min-width: 960px)');

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
			db.collection('contacts').add({
				name: name,
				email: email,
				message: message
			})
				.then(() => {
					alert('Message has been submitted 🚀');
				})
				.catch((err) => {
					alert(err.message);
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
			<Grid item xs={10} md={5}>
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
			{lg && <Grid item xs={5}></Grid>}
			<Grid item xs={1}></Grid>
		</Grid>
	)
}

export default Contact;
