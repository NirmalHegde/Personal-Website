import virtualWonders from "./Images/virtualWonders.gif";
import tuqTacToe from "./Images/tuqTacToe.gif";
import nodeInfluencers from "./Images/nodeInfluencers.gif";
import leagueStatsBot from "./Images/leagueStatsBot.gif";
import intersectionSimulation from "./Images/intersection.gif";
import purplePurlers from "./Images/purplePurlers.gif";
import poliViews from "./Images/poliviews.gif";
import movieNominator from "./Images/movieNominator.gif";
import sydeClassProfile from "./Images/sydeclassprofile.gif";

export const cardContents = [
  {
    header: sydeClassProfile,
    title: "SYDE '25 Class Profile",
    details: `Website profile which took aggregated data from students in our Systems Design Engineering Cohort 
			  and displayed them in an easily readable and understandable format. Data was analyzed and stored 
			  using XGBoost, Pandas, NumPy, Seaborn, and Firebase, while the frontend was created using Next.
			  Currently, there are over 4600 monthly viewers.`,
    website: "https://syde.social",
    source: "https://github.com/SYDE-25/Class-Profile1A-Data-Analysis",
  },
  {
    header: poliViews,
    title: "PoliViews",
    details: `Submission for Hack the North. Web app which allows users to search up key topics for the 2021
			  federal election and receive the perspectives of each major party in 5 lines or less.`,
    website: "https://www.youtube.com/watch?v=UQHYVmcF8TY&ab_channel=Clfrca",
    source: "https://github.com/NirmalHegde/PoliViews",
  },
  {
    header: purplePurlers,
    title: "Purple Purlers",
    details: `Charity that collects blankets from the community to donate to animal shelters accross the GTA.
			  To date, 1200+ blankets and over $10000 have been raised.`,
    website: "https://sites.google.com/view/purple-purlers",
  },	
  {
    header: movieNominator,
    title: "Movie Nominator",
    details: `Developed for Shopify Developer Challenge. Web app which allows users to search up movies and learn 
			  more about them. After this, they can nominate their top 5 and compare with others. Frontend was created 
			  using React, Shopify Polaris, and Apollo, while backend was made using Express, GraphQL, and queries to the 
			  OMDB API.`,
    website: "https://the-shoppies-595bc.web.app/",
    source: "https://github.com/NirmalHegde/Movie-Nominator",
  },
  {
    header: leagueStatsBot,
    title: "League Stats Bot",
    details: `Discord bot which allows users to search up their League of Legends stats during discussions.
			  Used by over 100 people on multiple servers. Developed using Node.js`,
    source: "https://github.com/NirmalHegde/League-Stats-Bot",
  },
  {
    header: virtualWonders,
    title: "Virtual Wonders",
    details: `Hackathon project created for HackAttack. Website that lets users to travel
			  the globe and explore different cultures during COVID-19. Developed using HTML, CSS, and JS.`,
    source: "https://github.com/NirmalHegde/Virtual-Wonders",
    website: "https://nirmalhegde.github.io/Virtual-Wonders/",
  },
  {
    header: nodeInfluencers,
    title: "Node Influencers",
    details: `Web app created for Node App coding challenge. Node is an application
			  that allows for influencers to connect with businesses for marketing reasons.`,
    source: "https://github.com/NirmalHegde/Node-Influencers",
    website: "https://node-influencers.web.app/",
  },
  {
    header: tuqTacToe,
    title: "Tuq Tac Toe",
    details: `Tic tac toe application created for the Tuq coding challenge. UI was developed using Tkinter and PyGame and all logic
			  was completed using Python.`,
    source: "https://github.com/NirmalHegde/Tuq-Tac-Toe",
  },
  {
    header: intersectionSimulation,
    title: "Intersection Simulation",
    details: `Built a prototype version of a new intersection. Used light sensors to detect traffic while also implementing
							a sound system for police cars. Developed using C++ and Arduino.`,
    source: "https://github.com/NirmalHegde/Intersection-Simulation",
  },
];
