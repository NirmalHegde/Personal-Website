import React from 'react'
import { Grid, Typography, IconButton, useMediaQuery, Grow } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import ProjectsStyles from './ProjectsStyles'
import ProjectsCard from './ProjectsCard/ProjectsCards'
import { cardContents, firstSectionCards, secondSectionCards, thirdSectionCards } from './cardContents'

const Projects = () => {
	const classes = ProjectsStyles();

	const lg = useMediaQuery('(min-width: 1100px)');
	const md = useMediaQuery('(max-width: 1100px)');
	const sm = useMediaQuery('(min-width: 600px)');

	const [state, setState] = React.useState(0);
	const [grow, setGrow] = React.useState(true);
	const changeStateLeft = (event, newValue) => {
		const negativeChange = (((state - 1) % firstSectionCards.length) + firstSectionCards.length) % firstSectionCards.length;
		setGrow(false);
		setTimeout(() => {
			setState(negativeChange);
			setGrow(true);
		}, 500);
	}
	const changeStateRight = (event, newValue) => {
		setGrow(false);
		setTimeout(() => {
			setState((state + 1) % firstSectionCards.length);
			console.log(state);
			setGrow(true);
		}, 500);
	}
	const changeStateLeftOne = (event, newValue) => {
		const negativeChange = (((state - 1) % cardContents.length) + cardContents.length) % cardContents.length;
		setGrow(false);
		setTimeout(() => {
			setState(negativeChange);
			setGrow(true);
		}, 500);
	}
	const changeStateRightOne = (event, newValue) => {
		setGrow(false);
		setTimeout(() => {
			setState((state + 1) % cardContents.length);
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
							{firstSectionCards.map((firstSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={firstSectionCard.title}
											header={firstSectionCard.header}
											title={firstSectionCard.title}
											details={firstSectionCard.details}
											source={firstSectionCard.source}
										/>
									);
								})}
							</div>
						</Grid>
					</Grow>
					<Grow in={grow}>
						<Grid item xs={4}>
							<div className={classes.align}>
							{secondSectionCards.map((secondSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={secondSectionCard.title}
											header={secondSectionCard.header}
											title={secondSectionCard.title}
											details={secondSectionCard.details}
											source={secondSectionCard.source}
										/>
									);
								})}
							</div>
						</Grid>
					</Grow>
					<Grow in={grow}>
						<Grid item xs={4}>
							<div className={classes.align}>
								{thirdSectionCards.map((thirdSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={thirdSectionCard.title}
											header={thirdSectionCard.header}
											title={thirdSectionCard.title}
											details={thirdSectionCard.details}
											source={thirdSectionCard.source}
										/>
									);
								})}
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
						{cardContents.map((cardContent, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={cardContent.title}
											header={cardContent.header}
											title={cardContent.title}
											details={cardContent.details}
											source={cardContent.source}
										/>
									);
								})}
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