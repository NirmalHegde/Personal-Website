import virtualWonders from './Images/virtualWonders.gif'
import tuqTacToe from './Images/tuqTacToe.gif'
import nodeInfluencers from './Images/nodeInfluencers.gif'
import leagueStatsBot from './Images/leagueStatsBot.gif'
import intersectionSimulation from './Images/intersection.gif'

export const cardContents = [
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
		header: virtualWonders,
		title: "Virtual Wonders",
		details: `Hackathon project created for HackAttack. It is a web app that lets users to travel
							the globe and explore different cultures during COVID-19.`,
		source: "https://nirmalhegde.github.io/Virtual-Wonders/"
	},
	{
		header: nodeInfluencers,
		title: "Node Influencers",
		details: `Web app created for Node App coding challenge. Node is an application
							that allows for influencers to connect with businesses for marketing reasons.`,
		source: "https://github.com/NirmalHegde/Tuq-Tac-Toe"
	},
	{
		header: tuqTacToe,
		title: "Tuq Tac Toe",
		details: `Tic tac toe game created for the Tuq coding challenge.`,
		source: "https://github.com/NirmalHegde/Tuq-Tac-Toe"
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
const cardNumberSmall = 2;
let firstSectionInit = [];
let secondSectionInit = [];
let thirdSectionInit = [];
let firstSmallSectionInit = [];
let secondSmallSectionInit = [];

// populate arrays for each section
for (let i = 0; i < cardContents.length; i++) {
	firstSectionInit.push(cardContents[i * cardNumber]);
	secondSectionInit.push(cardContents[i * cardNumber + 1]);
	thirdSectionInit.push(cardContents[i * cardNumber + 2]);

	if (i * cardNumber + cardNumber >= cardContents.length) {
		break;
	}
}
for (let i = 0; i < cardContents.length; i++) {
	firstSmallSectionInit.push(cardContents[i * cardNumberSmall]);
	secondSmallSectionInit.push(cardContents[i * cardNumberSmall + 1]);

	if (i * cardNumberSmall + cardNumberSmall >= cardContents.length) {
		break;
	}
}

// export arrays for each section
export const firstSectionCards = firstSectionInit;
export const secondSectionCards = secondSectionInit;
export const thirdSectionCards = thirdSectionInit;
export const firstSmallSectionCards = firstSmallSectionInit;
export const secondSmallSectionCards = secondSmallSectionInit;