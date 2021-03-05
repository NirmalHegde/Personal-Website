// dependancies
import React from 'react'
import { Grid, Typography, Divider, Button, useMediaQuery, Fade } from '@material-ui/core'
import { Link } from 'react-scroll'

// icons
import { FaRegFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// file imports
import AboutStyles from './AboutStyles'
import { links } from './links'

const About = () => {
	// classes and queries
	const classes = AboutStyles();
	const md = useMediaQuery('(max-width: 960px)');

	// variable declaration and values for mapping
	const [image, setImage] = React.useState(links["default"]);
	const [fade, setFade] = React.useState(true)
	const languages = ["Javascript,", "HTML,", "CSS,", "C,", "C++,", "Python"];
	const frontend = ["React,", "Vue,", "Material-UI"];
	const backend = ["Node,", "Express,", "Firebase,", "MongoDB,", "Puppeteer"];
	const tools = ["Git,", "Jest,", "VS Code,", "SolidWorks,", "AutoCAD,", "Heroku"];

	// handling for changing the image
	const imageHandler = (language) => {
		setFade(false);
		setTimeout(() => {
			setImage(links[language.replace(",", "")]); // replace needed to remove the comma
			setFade(true);
		}, 300);
	}

	return (
		<Grid id="about" container>
			{/* Title Section */}
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">About Me</Typography>
				<Typography variant="h4">~ Who am I? ~</Typography>
				<br /><br />
			</Grid>
			<Grid item xs={1}></Grid>
			{md && <Grid item xs={1}></Grid>}
			<Fade in={fade}>
				<Grid item xs={10} md={5}>
					<div className={classes.picSpacing}>
						<img alt="Display" src={image} className={classes.profilePic}></img>
					</div>
					<br /><br /><br />
				</Grid>
			</Fade>
			{md && <Grid item xs={1}></Grid>}

			{/* Text Section */}
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
				<Typography variant="h6" style={{ color: "#8c97e1" }} className={classes.subTitle} display="inline">My Skills!</Typography>
				<div style={{ paddingBottom: "2%" }} />

				{/* Mapping for languages */}
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Languages: &nbsp;</Typography>
				{languages.map(language =>
					<Typography
						onMouseEnter={() => imageHandler(language)}
						onMouseLeave={() => imageHandler("default")}
						className={classes.skills}
						key={language}
						variant="body1"
					>
						{language}&nbsp;
					</Typography>
				)}
				<div />

				{/* Mapping for frontend */}
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Frontend: &nbsp;</Typography>
				{frontend.map(frontend =>
					<Typography
						onMouseEnter={() => imageHandler(frontend)}
						onMouseLeave={() => imageHandler("default")}
						className={classes.skills}
						key={frontend}
						variant="body1"
					>
						{frontend}&nbsp;
					</Typography>
				)}
				<div />

				{/* Mapping for backend */}
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Backend: &nbsp;</Typography>
				{backend.map(backend =>
					<Typography
						onMouseEnter={() => imageHandler(backend)}
						onMouseLeave={() => imageHandler("default")}
						className={classes.skills}
						key={backend}
						variant="body1"
					>
						{backend}&nbsp;
					</Typography>
				)}
				<div />

				{/* Mapping for tools */}
				<Typography variant="body1" className={classes.subTitleSmall} display="inline">Tools: &nbsp;</Typography>
				{tools.map(tool =>
					<Typography
						onMouseEnter={() => imageHandler(tool)}
						onMouseLeave={() => imageHandler("default")}
						className={classes.skills}
						key={tool}
						variant="body1"
					>
						{tool}&nbsp;
					</Typography>
				)}
				<div />
				<br />
				<Divider />
				<br />

				{/* Grid section */}
				<Grid container>
					<Grid item xs={12} md={3}>
						<a rel="noreferrer" target="_blank" href={links["Resume"]} className={classes.links}>
							<div className={classes.buttonSpacing}>
								<Button variant="contained" size="large" className={classes.button} startIcon={<FaRegFilePdf />}>
									Resume
      					</Button>
							</div>
						</a>
						{md && <br />}
					</Grid>
					<Grid item xs={12} md={3}>
						<a rel="noreferrer" target="_blank" href={links["Github"]} className={classes.links}>
							<div className={classes.buttonSpacing}>
								<Button variant="contained" size="large" className={classes.button} startIcon={<FaGithub />}>
									Github
      					</Button>
							</div>
						</a>
						{md && <br />}
					</Grid>
					<Grid item xs={12} md={3}>
						<a rel="noreferrer" target="_blank" href={links["LinkedIn"]} className={classes.links}>
							<div className={classes.buttonSpacing}>
								<Button variant="contained" size="large" className={classes.button} startIcon={<FaLinkedin />}>
									LinkedIn
      						</Button>
							</div>
						</a>
						{md && <br />}
					</Grid>
					<Grid item xs={12} md={3}>
						<Link smooth="true" duration={1000} offset={-70} to="contact">
							<div className={classes.buttonSpacing}>
								<Button variant="contained" size="large" className={classes.button} startIcon={<MdEmail />}>
									Email
      					</Button>
							</div>
						</Link>
						{md && <br />}
					</Grid>
				</Grid>
			</Grid>
			{md && <Grid item xs={1}></Grid>}

			{/* Bottom spacing */}
			<Grid item xs={12}>
				<div style={{ paddingBottom: "7%" }} />
			</Grid>
		</Grid>
	)
}

export default About;