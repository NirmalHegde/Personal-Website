export const cardContents = [
	{
		header: "",
		title: "title1",
		details: "description1",
		source: "https://nirmalhegde.github.io/Virtual-Wonders/"
	},
	{
		title: "title2",
		details: "description2"
	},
	{
		title: "title3",
		details: "description3"
	},
	{
		title: "title4",
		details: "description4"
	},
	{
		title: "title5",
		details: "description5"
	},
	{
		title: "title6",
		details: "description6"
	},
	{
		title: "title7",
		details: "description7"
	},
	{
		title: "title8",
		details: "description8"
	},
	{
		title: "title9",
		details: "description9"
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