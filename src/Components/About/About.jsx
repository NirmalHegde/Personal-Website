import React from 'react'
import { Grid, Typography, Divider, Button, useMediaQuery } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile';

import AboutStyles from './AboutStyles'

const About = () => {
	const classes = AboutStyles();

	const md = useMediaQuery('(max-width: 960px)');

	return (
		<Grid id="about" container>
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">About Me</Typography>
				<Typography variant="h4">~ Who am I? ~</Typography>
				<br />
			</Grid>
			<Grid item xs={1}></Grid>
			<Grid item xs={12} md={5}>

			</Grid>
			{md && <Grid item xs={1}></Grid>}
			<Grid item xs={10} md={5}>
				<Typography variant="h6" className={classes.subTitle} display="inline">My name is Nirmal Hegde and I am a</Typography>
				<Typography variant="h6" style={{ color: "#8c97e1" }} className={classes.subTitle} display="inline"> Software Developer</Typography>
				<div style={{ paddingBottom: "2%" }} />
				<Typography variant="body1">
					I am a 1B Systems Design Engineering student at the University of Waterloo.
					Currently, I am working on several projects which include programming a Sign-Language Detector
					and building e-commerce websites for various businesses. These projects showcase my love of coding and
					design. Previously, I have worked on various web development projects and
					tutored many kids on computer science and math. Some on my hobbies are playing sports,
					Graphic Designing and exploring various AI and ML algorithms. I also help out in the community
					by volunteering and knitting blankets for animal shelters! Currently, I am seeking
					internships for Fall 2021.
					</Typography>
				<br />
				<Divider />
				<br />
				<Typography variant="h6" className={classes.subTitle} display="inline">Here are </Typography>
				<Typography variant="h6" style={{ color: "#8c97e1" }} className={classes.subTitle} display="inline">my skills!</Typography>
				<div style={{ paddingBottom: "2%" }} />
				<Typography variant="body1" className={classes.subTitleSmall}>Languages: </Typography>
				<Typography variant="body1" className={classes.subTitleSmall}>Frontend: </Typography>
				<Typography variant="body1" className={classes.subTitleSmall}>Backend: </Typography>
				<Typography variant="body1" className={classes.subTitleSmall}>Tools: </Typography>
				<br />
				<Divider />
				<br />
				<Grid container>
					<Grid item xs={12} md={3}>
						<div className={classes.buttonSpacing}>
							<Button variant="contained" size="large" className={classes.button} startIcon={<AttachFileIcon />}>
								Resume
      				</Button>
						</div>
						{md && <br />}
					</Grid>
					<Grid item xs={12} md={3}>
						<div className={classes.buttonSpacing}>
							<Button variant="contained" size="large" className={classes.button} startIcon={<AttachFileIcon />}>
								Github
      				</Button>
						</div>
						{md && <br />}
					</Grid>
					<Grid item xs={12} md={3}>
						<div className={classes.buttonSpacing}>
							<Button variant="contained" size="large" className={classes.button} startIcon={<AttachFileIcon />}>
								LinkedIn
      				</Button>
						</div>
						{md && <br />}
					</Grid>
					<Grid item xs={12} md={3}>
						<div className={classes.buttonSpacing}>
							<Button variant="contained" size="large" className={classes.button} startIcon={<AttachFileIcon />}>
								Email
      				</Button>
						</div>
						{md && <br />}
					</Grid>
				</Grid>
			</Grid>
			{md && <Grid item xs={1}></Grid>}
			<Grid item xs={12}>
				<div style={{ paddingBottom: "5%" }} />
			</Grid>
		</Grid>
	)
}

export default About;