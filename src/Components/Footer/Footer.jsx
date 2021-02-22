import React from 'react'
import FooterStyles from './FooterStyles'

const Footer = () => {
	const classes = FooterStyles();
	return (
		<div className={classes.footer}>
			<h1>Footer</h1>
		</div>
	)
}

export default Footer
