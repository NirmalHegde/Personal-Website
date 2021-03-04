import React from 'react'
import { Grid, Typography, IconButton, useMediaQuery, Grow } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import ProjectsStyles from './ProjectsStyles'
import ProjectsCard from './ProjectsCard/ProjectsCards'

const Projects = () => {
	const classes = ProjectsStyles();

	const lg = useMediaQuery('(min-width: 1100px)');
	const md = useMediaQuery('(max-width: 1100px)');
	const sm = useMediaQuery('(min-width: 600px)');

	const [state, setState] = React.useState(0);
	const [grow, setGrow] = React.useState(true);
	const changeStateLeft = (event, newValue) => {
		const negativeChange = (((state - 1) % 2) + 2) % 2;
		setGrow(false);
		setTimeout(() => {
			setState(negativeChange);
			setGrow(true);
		}, 500);
	}
	const changeStateRight = (event, newValue) => {
		setGrow(false);
		setTimeout(() => {
			setState((state + 1) % 2);
			setGrow(true);
		}, 500);
	}
	const changeStateLeftOne = (event, newValue) => {
		const negativeChange = (((state - 1) % 6) + 6) % 6;
		setGrow(false);
		setTimeout(() => {
			setState(negativeChange);
			setGrow(true);
		}, 500);
	}
	const changeStateRightOne = (event, newValue) => {
		setGrow(false);
		setTimeout(() => {
			setState((state + 1) % 6);
			setGrow(true);
		}, 500);
	}

	return (
		<Grid id="projects" className={classes.root} container>
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">My Projects</Typography>
				<Typography variant="h4">~ What have I been working on? ~</Typography>
			</Grid>

			{sm && <Grid item xs={1}></Grid>}

			{lg && <>
				<Grid item xs={1}>
					<div className={classes.align}>
						<IconButton onClick={changeStateLeft} aria-label="arrow-left">
							<ArrowBackIcon />
						</IconButton>
					</div>
				</Grid>
				<Grid item container spacing={1} xs={8}>
					<Grow in={grow}>
						<Grid item xs={4}>
							<div className={classes.align}>
								{state === 0 &&
									<ProjectsCard
										demoTitle={"ASL Detector"}
										demoDetails={"Trained a model to be able to identify the American Sign Language letters."}
										gitHub={"https://github.com/anjalig21/Sign-Language-Detection"}
									/>
								}
								{state === 1 &&
									<ProjectsCard
										demoTitle={"Webcam Painter"}
										demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
										gitHub={"https://github.com/anjalig21/Webcam-Painter"}
									/>
								}
							</div>
						</Grid>
					</Grow>
					<Grow in={grow}>
						<Grid item xs={4}>
							<div className={classes.align}>
								{state === 0 &&
									<ProjectsCard
										demoTitle={"ASL Detector"}
										demoDetails={"Trained a model to be able to identify the American Sign Language letters."}
										gitHub={"https://github.com/anjalig21/Sign-Language-Detection"}
									/>
								}
								{state === 1 &&
									<ProjectsCard
										demoTitle={"Webcam Painter"}
										demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
										gitHub={"https://github.com/anjalig21/Webcam-Painter"}
									/>
								}
							</div>
						</Grid>
					</Grow>
					<Grow in={grow}>
						<Grid item xs={4}>
							<div className={classes.align}>
								{state === 0 &&
									<ProjectsCard
										demoTitle={"ASL Detector"}
										demoDetails={"Trained a model to be able to identify the American Sign Language letters."}
										gitHub={"https://github.com/anjalig21/Sign-Language-Detection"}
									/>
								}
								{state === 1 &&
									<ProjectsCard
										demoTitle={"Webcam Painter"}
										demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
										gitHub={"https://github.com/anjalig21/Webcam-Painter"}
									/>
								}
							</div>
						</Grid>
					</Grow>
				</Grid>
				<Grid item xs={1}>
					<div className={classes.align}>
						<IconButton onClick={changeStateRight} aria-label="arrow-right">
							<ArrowForwardIcon />
						</IconButton>
					</div>
				</Grid>
			</>}

			{md && <>
				<Grid item xs={2} sm={1}>
					<div className={classes.align}>
						<IconButton onClick={changeStateLeftOne} aria-label="arrow-left">
							<ArrowBackIcon />
						</IconButton>
					</div>
				</Grid>
				<Grid item xs={8}>
					<Grow in={grow}>
						<div className={classes.align}>
							{state === 0 &&
								<ProjectsCard
									demoTitle={"ASL Detector"}
									demoDetails={"Trained a model to be able to identify the American Sign Language letters."}
									gitHub={"https://github.com/anjalig21/Sign-Language-Detection"}
								/>
							}
							{state === 1 &&
								<ProjectsCard
									demoTitle={"Webcam Painter"}
									demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
									gitHub={"https://github.com/anjalig21/Webcam-Painter"}
								/>
							}
							{state === 2 &&
								<ProjectsCard
									demoTitle={"Photo Bot"}
									demoDetails={"A multi-purpose Discord Bot curated towards gaming communities."}
									gitHub={"https://github.com/anjalig21/Photo-Bot"}
								/>
							}
							{state === 3 &&
								<ProjectsCard
									demoTitle={"Webcam Painter"}
									demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
									gitHub={"https://github.com/anjalig21/Webcam-Painter"}
								/>
							}
							{state === 4 &&
								<ProjectsCard
									demoTitle={"Climate Bots"}
									demoDetails={"A social networking platform for individuals to discuss climate change."}
									gitHub={"https://github.com/anjalig21/Climate-Bots"}
								/>
							}
							{state === 5 &&
								<ProjectsCard
									demoTitle={"Shape Detection"}
									demoDetails={"Developed an application that can detect and identify shapes from an image."}
									gitHub={"https://github.com/anjalig21/Shape-Detection"}
								/>
							}
						</div>
					</Grow>
				</Grid>
				<Grid item xs={2} sm={1}>
					<div className={classes.align}>
						<IconButton onClick={changeStateRightOne} aria-label="arrow-right">
							<ArrowForwardIcon />
						</IconButton>
					</div>
				</Grid>
			</>}

		</Grid>
	)
}

export default Projects;