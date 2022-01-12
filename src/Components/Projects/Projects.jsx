import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";

import ProjectsStyles from "./ProjectsStyles";
import { cardContents } from "./cardContents";

const Projects = () => {
  const classes = ProjectsStyles();

  const md = useMediaQuery("(max-width: 960px)");

  return (
    <Grid id="projects" className={classes.root} container>
      <Grid className={classes.title} item xs={12}>
        <br />
        <Typography variant="h2">My Projects</Typography>
        <br />
      </Grid>
      {cardContents.map((card, idx) => (
        <>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={1} />
          {md && <Grid item xs={3} />}
          {(idx % 2 === 0 || md) && (
            <Grid item xs={5} lg={3}>
              <img
                style={{ height: "auto", width: "23vw", borderRadius: "10%" }}
                src={card.header}
                aria-label={card.title}
              />
            </Grid>
          )}
          {md && <Grid item xs={3} />}
          {md && <Grid item xs={1} />}
          <Grid item xs={10} lg={7}>
            <Typography variant="h3">
              <b>{card.title}</b>
            </Typography>
            <br />
            <Typography variant="body1">{card.details}</Typography>
            <br />
            <Grid container>
              {card["website"] && (
                <Grid item xs={12} md={3}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={card.website}
                    className={classes.links}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      className={classes.button}
                    >
                      See Live Demo
                    </Button>
                  </a>
                </Grid>
              )}
              {md && (
                <Grid item xs={12}>
                  <br />
                </Grid>
              )}
              {card["source"] && (
                <Grid item xs={12} md={3}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={card.source}
                    className={classes.links}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      className={classes.button}
                    >
                      See Github
                    </Button>
                  </a>
                </Grid>
              )}
            </Grid>
          </Grid>
          {idx % 2 === 1 && !md && (
            <Grid item xs={3}>
              <img
                style={{ height: "auto", width: "23vw", borderRadius: "10%" }}
                src={card.header}
                aria-label={card.title}
              />
            </Grid>
          )}
          <Grid item xs={1} />
          <Grid item xs={12}>
            <br />
          </Grid>
        </>
      ))}
      <Grid className={classes.title} item xs={12}>
        <br />
      </Grid>
    </Grid>
  );
};

export default Projects;
