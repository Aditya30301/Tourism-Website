import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

//STEPPER CODE

function getSteps(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i] = "DAY " + i;
  }
  return arr;
}

function getStepContent(step) {
  console.log(step);
  switch (step) {
    case 1:
      return `dsfjhsdhfjsjfjjhgj`;
    case 2:
      return "sahdhiahs";
    case 3:
      return step.fullDescription3;
    case 4:
      return;
    case 5:
      return `sahdhakjhdkjahj`;
    case 6:
      return step.fullDescription6;
    case 7:
      return "sdkjhaskfhkhi";
    case 8:
      return step.fullDescription8;
    default:
      return "Helllo ";
  }
}

export default function Cards(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps(props.num);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="card mb-3">
        <img
          src={props.imageLink}
          className="img-responsive card-img-top"
          style={{ width: 1235, height: 300 }}
          alt="cardimg"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">{props.duration}</small>
          </p>
        </div>

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="h3">
            <center>Trip Details:</center>
          </Typography>

          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, i) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(1)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        color="primary"
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>Your Journey - Completes&apos;Here</Typography>
              <Button
                onClick={handleReset}
                className={classes.button}
                color="primary"
              >
                GetBack
              </Button>
            </Paper>
          )}
        </Collapse>
      </div>
    </div>
  );
}
