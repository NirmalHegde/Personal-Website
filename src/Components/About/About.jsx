import React from 'react'
import { Grid, Typography, Divider, Button, useMediaQuery, Fade } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile';

import AboutStyles from './AboutStyles'
import { links } from './links'

const About = () => {
	const classes = AboutStyles();
	const md = useMediaQuery('(max-width: 960px)');

	const [image, setImage] = React.useState(links["default"]);
	const languages = ["HTML,", "CSS,", "Javascript,", "Python"];

	const imageHandler = (language) => {
		setImage(links[language.replace(",","")])
	}

	return (
		<Grid id="about" container>
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">About Me</Typography>
				<Typography variant="h4">~ Who am I? ~</Typography>
				<br />
			</Grid>
			<Grid item xs={1}></Grid>
			{md && <Grid item xs={1}></Grid>}
			<Grid item xs={10} md={5}>
				<div className={classes.picSpacing}>
					<img alt="Display" src={image} className={classes.profilePic}></img>
				</div>
				<br /><br /><br />
			</Grid>
			{md && <Grid item xs={1}></Grid>}
			<Grid item xs={10} md={5}>
				<Typography variant="h6" className={classes.subTitle} display="inline">My name is Nirmal Hegde and I am a</Typography>
				<Typography variant="h6" style={{ color: "#8c97e1" }} className={classes.subTitle} display="inline"> Software Developer</Typography>
				<div style={{ paddingBottom: "2%" }} />
				<Typography variant="body1">
					I am a 1B Systems Design Engineering student at the University of Waterloo.
					Throughout my life, I have loved Swimming, Basketball, and helping those in my community through
					various volunteering activities. Currently, I am working on creating a class profile for my SYDE cohort
					to give insight to the public about the people who attend the program (ex: Demographics, Interests, etc.)
					If you would like to get in touch with me, feel free to reach out through any of the links below!
					<b>&nbsp;Currrently seeking internships for fall 2021.</b>
				</Typography>
				<br />
				<Divider />
				<br />
				<Typography variant="h6" className={classes.subTitle} display="inline">Here are </Typography>
				<Typography variant="h6" style={{ color: "#8c97e1" }} className={classes.subTitle} display="inline">my skills!</Typography>
				<div style={{ paddingBottom: "2%" }} />
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Languages: </Typography>
				{languages.map(language =>
					<Typography
						onMouseEnter={() => imageHandler(language)}
						onMouseLeave={() => imageHandler("default")}
						key={language}
						variant="body1"
						display="inline"
					>
						{language}&nbsp;
					</Typography>
				)}
				<div />
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Frontend: </Typography>
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Backend: </Typography>
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Tools: </Typography>
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