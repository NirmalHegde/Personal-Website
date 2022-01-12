// dependancies
import React from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  useMediaQuery,
} from "@material-ui/core";

// icons
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// file imports
import ContactStyles from "./ContactStyles";

const Contact = () => {
  // classes and queries
  const classes = ContactStyles();
  const md = useMediaQuery("(max-width: 960px)");
  const lg = useMediaQuery("(min-width: 960px)");

  // state declaration
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");
  const [errorName, setErrorName] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorSubject, setErrorSubject] = React.useState(false);
  const [errorBody, setErrorBody] = React.useState(false);

  // event handler
  const submitHander = (e) => {
    e.preventDefault(); // prevents screen refresh
    // uses regex to verify email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setErrorName(false);
    setErrorEmail(false);
    setErrorBody(false);

    // if a field is invalid, ensure that email is not submitted and error is thrown
    if (name === "" || !emailRegex.test(email) || body === "") {
      if (name === "") {
        setErrorName(true);
      }

      if (!emailRegex.test(email)) {
        setErrorEmail(true);
      }

      if (body === "") {
        setErrorBody(true);
      }

      if (subject === "") {
        setErrorSubject(true);
      }
    } else {
      const emailObject = {
        // object to be sent to firebase and email
        name: name,
        sender: email,
        body: body,
        subject: subject,
      };

      axios
        .post(
          "https://personal-website-email-service.herokuapp.com/",
          emailObject
        )
        .then((res) => {
          alert("message sent 🚀");
          setName("");
          setEmail("");
          setSubject("");
          setBody("");
          setErrorName(false);
          setErrorEmail(false);
          setErrorBody(false);
          setErrorSubject(false);
        })
		.catch((err) => {
			alert("something went wrong....");
			setName("");
			setEmail("");
			setSubject("");
			setBody("");
			setErrorName(false);
			setErrorEmail(false);
			setErrorBody(false);
			setErrorSubject(false);
		})
    }
  };

  return (
    <Grid container className={classes.root} id="contact">
      {/* Title */}
      <Grid className={classes.title} item xs={12}>
        <br />
        <Typography variant="h2">Contact Me</Typography>
      </Grid>

      {/* Contact Text */}
      {lg && (
        <>
          <Grid item xs={1}></Grid>
          <Grid item xs={10} md={5}>
            <br />
            <br />
            <Typography variant="h5">
              <b>Get in Touch!</b>
            </Typography>
            <Divider></Divider>
            <br />
            <MdEmail />
            &nbsp;
            <Typography display="inline">
              <b> Email:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.contact}
              href="mailto:nhegde@uwaterloo.ca"
            >
              <Typography display="inline"> nhegde@uwaterloo.ca</Typography>
            </a>
            <div />
            <br />
            <FaPhone />
            &nbsp;
            <Typography display="inline">
              <b> Phone:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.contact}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
            >
              <Typography className={classes.contact} display="inline">
                {" "}
                647-425-8826
              </Typography>
            </a>
            <div />
            <br />
            <FaGithub />
            &nbsp;
            <Typography display="inline">
              <b> Github:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.contact}
              href="https://www.github.com/NirmalHegde"
            >
              <Typography display="inline"> github.com/NirmalHegde</Typography>
            </a>
            <div />
            <br />
            <FaLinkedin />
            &nbsp;
            <Typography display="inline">
              <b> LinkedIn:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.contact}
              href="https://www.linkedin.com/in/NirmalHegde"
            >
              <Typography display="inline">
                {" "}
                linkedin.com/in/NirmalHegde
              </Typography>
            </a>
            <br />
            <br />
            <br />
          </Grid>
          <Grid item xs={1}></Grid>
        </>
      )}

      {/* Contact Form */}
      {md && <Grid item xs={1}></Grid>}
      <Grid item xs={10} md={4}>
        <div className={classes.formContainer}>
          <form onSubmit={submitHander} className={classes.form}>
            <TextField
              className={classes.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              variant="outlined"
              error={errorName}
              helperText={errorName ? "Please enter a name." : ""}
            />
            <br />
            <br />
            <TextField
              className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              error={errorEmail}
              helperText={errorEmail ? "Please enter a correct email." : ""}
            />
            <br />
            <br />
            <TextField
              className={classes.input}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              label="Subject"
              variant="outlined"
              error={errorSubject}
              helperText={errorSubject ? "Please enter a subject." : ""}
            />
            <br />
            <br />
            <TextField
              className={classes.input}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              label="Message"
              multiline
              rows={10}
              variant="outlined"
              error={errorBody}
              helperText={errorBody ? "Please enter a message." : ""}
            />
            <br />
            <br />
            <div className={classes.center}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                className={classes.button}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Contact;
