// dependancies
import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  Fade,
} from "@material-ui/core";
import { Link } from "react-scroll";

// icons
import { FaRegFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// file imports
import AboutStyles from "./AboutStyles";
import { links } from "./links";

const About = () => {
  // classes and queries
  const classes = AboutStyles();
  const md = useMediaQuery("(max-width: 960px)");

  // variable declaration and values for mapping
  const [image, setImage] = React.useState(links["default"]);
  const [fade, setFade] = React.useState(true);
  const languages = [
    "Javascript,",
    "Typescript,",
    "Python,",
    "C#,",
    "C,",
    "C++,",
    "GraphQL,",
    "HTML,",
    "CSS",
  ];
  const frontend = ["React,", "Vue,", "Material-UI,", "Chakra-UI"];
  const backend = [
    "Node,",
    "Express,",
    "Django,",
    ".NET,",
    "Firebase,",
    "MongoDB,",
    "Puppeteer",
  ];
  const tools = [
    "Git,",
    "Jest,",
    "RabbitMQ,",
    "Apollo,",
    "SolidWorks,",
    "Heroku,",
    "Docker,",
    "Kubernetes"
  ];

  // handling for changing the image
  const imageHandler = (language) => {
    setFade(false);
    setTimeout(() => {
      setImage(links[language.replace(",", "")]); // replace needed to remove the comma
      setFade(true);
    }, 300);
  };

  return (
    <Grid id="about" className={classes.root} container>
      {/* Title */}
      <Grid className={classes.title} item xs={12}>
        <br />
        <Typography variant="h2">About Me</Typography>
        <br />
        <br />
      </Grid>
      <Grid item xs={1}></Grid>
      {md && <Grid item xs={1}></Grid>}
      <Fade in={fade}>
        <Grid item xs={10} md={5}>
          <div className={classes.picSpacing}>
            <img alt="Display" src={image} className={classes.profilePic}></img>
          </div>
          <br />
          <br />
          <br />
        </Grid>
      </Fade>
      {md && <Grid item xs={1}></Grid>}

      {/* Text */}
      <Grid item xs={10} md={5}>
        <Typography variant="h6" className={classes.subTitle} display="inline">
          Hello there! My name is
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "#8c97e1" }}
          className={classes.subTitle}
          display="inline"
        >
          {" "}
          Nirmal Hegde
        </Typography>
        <div style={{ paddingBottom: "2%" }} />
        <Typography variant="body1">
          I am a 2A Systems Design Engineering student at the University of
          Waterloo. I love swimming, basketball, video games, and volunteering
          in my community. Currently, I am part of UW Blueprint where I am
          working with an NPO with over 65,000 participants. This NPO strives to
          provide men suffering through depression with resources to help keep
          them informed. We are developing a new web application for them, which
          will incentivize users to stay on the website and learn more about
          men's depression. If you would like to get in touch with me, feel free
          to reach out through any of the links below!
          <b>&nbsp;Currrently seeking internships for Spring 2022.</b>
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="h6" className={classes.subTitle} display="inline">
          Here are{" "}
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "#8c97e1" }}
          className={classes.subTitle}
          display="inline"
        >
          My Skills!
        </Typography>
        <div style={{ paddingBottom: "2%" }} />

        {/* Languages */}
        <Typography
          variant="body1"
          className={classes.subTitleSmall}
          display="inline"
        >
          Languages: &nbsp;
        </Typography>
        {languages.map((language) => (
          <Typography
            onMouseEnter={() => imageHandler(language)}
            onMouseLeave={() => imageHandler("default")}
            className={classes.skills}
            key={language}
            variant="body1"
          >
            {language}&nbsp;
          </Typography>
        ))}
        <div />

        {/* Frontend */}
        <Typography
          variant="body1"
          className={classes.subTitleSmall}
          display="inline"
        >
          Frontend: &nbsp;
        </Typography>
        {frontend.map((frontend) => (
          <Typography
            onMouseEnter={() => imageHandler(frontend)}
            onMouseLeave={() => imageHandler("default")}
            className={classes.skills}
            key={frontend}
            variant="body1"
          >
            {frontend}&nbsp;
          </Typography>
        ))}
        <div />

        {/* Backend */}
        <Typography
          variant="body1"
          className={classes.subTitleSmall}
          display="inline"
        >
          Backend: &nbsp;
        </Typography>
        {backend.map((backend) => (
          <Typography
            onMouseEnter={() => imageHandler(backend)}
            onMouseLeave={() => imageHandler("default")}
            className={classes.skills}
            key={backend}
            variant="body1"
          >
            {backend}&nbsp;
          </Typography>
        ))}
        <div />

        {/* Tools */}
        <Typography
          variant="body1"
          className={classes.subTitleSmall}
          display="inline"
        >
          Tools: &nbsp;
        </Typography>
        {tools.map((tool) => (
          <Typography
            onMouseEnter={() => imageHandler(tool)}
            onMouseLeave={() => imageHandler("default")}
            className={classes.skills}
            key={tool}
            variant="body1"
          >
            {tool}&nbsp;
          </Typography>
        ))}
        <div />
        <br />
        <Divider />
        <br />

        {/* Buttons */}
        <Grid container>
          <Grid item xs={12} md={3}>
            <a
              rel="noreferrer"
              target="_blank"
              href={links["Resume"]}
              className={classes.links}
            >
              <div className={classes.buttonSpacing}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </div>
            </a>
            {md && <br />}
          </Grid>
          <Grid item xs={12} md={3}>
            <a
              rel="noreferrer"
              target="_blank"
              href={links["Github"]}
              className={classes.links}
            >
              <div className={classes.buttonSpacing}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaGithub />}
                >
                  Github
                </Button>
              </div>
            </a>
            {md && <br />}
          </Grid>
          <Grid item xs={12} md={3}>
            <a
              rel="noreferrer"
              target="_blank"
              href={links["LinkedIn"]}
              className={classes.links}
            >
              <div className={classes.buttonSpacing}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
              </div>
            </a>
            {md && <br />}
          </Grid>
          <Grid item xs={12} md={3}>
            <Link smooth="true" duration={1000} offset={-70} to="contact">
              <div className={classes.buttonSpacing}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<MdEmail />}
                >
                  Contact
                </Button>
              </div>
            </Link>
            {md && <br />}
          </Grid>
        </Grid>
      </Grid>
      {md && <Grid item xs={1}></Grid>}

      {/* Bottom */}
      <Grid item xs={12}>
        <div style={{ paddingBottom: "7%" }} />
      </Grid>
    </Grid>
  );
};

export default About;
