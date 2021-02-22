import React from 'react'
import FooterStyles from './FooterStyles'

const Footer = () => {
	const classes = FooterStyles();
	return (
		<div className={classes.footer}>
			<span>Created by&nbsp;</span>
			<span className={classes.footerName}>Nirmal &nbsp;</span>
			<span>|&nbsp; Reach for the ✨&nbsp; | &nbsp;&#169; 2021 All rights reserved</span>
		</div>
	)
}

export default Footer
