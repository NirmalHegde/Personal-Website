// dependancy/file imports
import React from 'react'
import FooterStyles from './FooterStyles'

const Footer = () => {
	// css import
	const classes = FooterStyles();
	
	return (
		<div className={classes.footer}>
			<span>Created by&nbsp;</span>
			<span style={{color: "#b5befa"}}>Nirmal &nbsp;</span>
			<span>|&nbsp; Reach for the ✨</span>
		</div>
	)
}

export default Footer
