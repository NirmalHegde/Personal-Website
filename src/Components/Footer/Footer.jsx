// dependancy/file imports
import React from 'react'
import FooterStyles from './FooterStyles'

const Footer = () => {
	// css import
	const classes = FooterStyles();

	return (
		<div className={classes.footer}>
			<div className={classes.textContainer}>
				<span>Reach for the ✨</span>
			</div>
		</div>
	)
}

export default Footer
