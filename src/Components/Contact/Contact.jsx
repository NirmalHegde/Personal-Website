import React from 'react'

import ContactStyles from './ContactStyles'

const Contact = () => {
	const classes = ContactStyles();
	return (
		<div className={classes.size}>
			<h1>Contact</h1>
		</div>
	)
}

export default Contact;
