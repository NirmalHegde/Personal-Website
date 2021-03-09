import virtualWonders from './Images/virtualWonders.gif'
import tuqTacToe from './Images/tuqTacToe.gif'
import nodeInfluencers from './Images/nodeInfluencers.gif'
import leagueStatsBot from './Images/leagueStatsBot.gif'
import intersectionSimulation from './Images/intersection.gif'

export const cardContents = [
	{
		header: virtualWonders,
		title: "Virtual Wonders",
		details: `Web app that lets users to travel the globe and explore different cultures in COVID-19.`,
		source: "https://nirmalhegde.github.io/Virtual-Wonders/"
	},
	{
		header: tuqTacToe,
		title: "Tuq Tac Toe",
		details: `Tic tac toe game created for the Tuq coding challenge.`,
		source: "https://github.com/NirmalHegde/Tuq-Tac-Toe"
	},
	{
		header: nodeInfluencers,
		title: "Node Influencers",
		details: `Web app created for Node App coding challenge. Node is an application
							that allows for influencers to connect with businesses for marketing reasons.`,
		source: "https://github.com/NirmalHegde/Tuq-Tac-Toe"
	},
	{
		header: nodeInfluencers,
		title: "Purple Purlers",
		details: `Charity that collects blankets from the community to donate to animal shelters accross the GTA.
							To date, 1200+ blankets and over $6000 have been raised.`,
		source: "https://sites.google.com/view/purple-purlers"
	},
	{
		header: leagueStatsBot,
		title: "League Stats Bot",
		details: `Discord bot which allows users to search up their League of Legends stats during discussions.
							Used by over 100 people on multiple servers.`,
		source: "https://github.com/NirmalHegde/League-Stats-Bot"
	},
	{
		header: intersectionSimulation,
		title: "Arduino Intersection",
		details: `Built a prototype version of a new intersection. Used light sensors to detect traffic while also implementing
							a sound system for police cars.`,
		source: "https://github.com/NirmalHegde/Intersection-Simulation"
	},
];

// init for populating split arrays
const cardNumber = 3;
let firstSectionInit = [];
let secondSectionInit = [];
let thirdSectionInit = [];

// populate arrays for each section
for (let i = 0; i < cardContents.length; i++) {
	firstSectionInit.push(cardContents[i * cardNumber]);
	secondSectionInit.push(cardContents[i * cardNumber + 1]);
	thirdSectionInit.push(cardContents[i * cardNumber + 2]);

	if (i * cardNumber + 3 >= cardContents.length) {
		break;
	}
}

// export arrays for each section
export const firstSectionCards = firstSectionInit;
export const secondSectionCards = secondSectionInit;
export const thirdSectionCards = thirdSectionInit;