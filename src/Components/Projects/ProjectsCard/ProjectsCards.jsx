import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import ProjectsCardStyles from './ProjectsCardsStyles'

const ProjectsCards = (props) => {
	const { header, title, details, source, website } = props;

	const classes = ProjectsCardStyles()

	return (
		<Card className={classes.root}>
			<CardMedia
				component="img"
				alt="Image"
				height="190"
				image={header}
				title="Image"
			/>
			<CardContent>
				<Typography variant="h4">
					<b>{title}</b><br /><br />
				</Typography>
				<Typography variant="body2" component="p">
					{details}<br /><br />
				</Typography>

				<div className={classes.linkContainer}>
					<div className={classes.linkSpacing}>
						{source && <>
							<Typography className={classes.link} display="inline">See Source Code</Typography>
						</>}
						{(source && website) && <>
							<Typography className={classes.link} display="inline">&nbsp;|&nbsp;</Typography>
						</>}
						{website && <>
							<Typography className={classes.link} display="inline">See Live Website</Typography>
						</>}
					</div>
				</div>
			</CardContent>
		</Card>

	);
}

export default ProjectsCards;