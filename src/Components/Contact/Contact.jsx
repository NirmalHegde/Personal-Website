import React from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'

import ContactStyles from './ContactStyles'

const Contact = () => {
	const classes = ContactStyles();
	return (
		<div id="contact" className={classes.size}>
			<Grid container>
				<Grid className={classes.title} item xs={12}>
					<br />
					<Typography variant="h2">Contact Me</Typography>
					<Typography variant="h4">~ Can't Wait to Connect! ~</Typography>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={5}>

				</Grid>
				<Grid item xs={5}>
					<div className={classes.formContainer}>
						<div className={classes.form}>
							<TextField className={classes.input} label="Name" variant="outlined" />
							<br /><br />
							<TextField className={classes.input} label="Email" variant="outlined" />
							<br /><br />
							<TextField
								className={classes.input}
								label="Message"
								multiline
								rows={10}
								variant="outlined"
							/>
							<br /><br />
							<div className={classes.center}>
							<Button variant="contained" size="large" className={classes.button}>
								Submit
      				</Button>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
		</div>
	)
}

export default Contact;
