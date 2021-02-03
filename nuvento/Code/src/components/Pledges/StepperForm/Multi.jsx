import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MessageBox from "../../../shared/Views/MessageBox";
import { useHistory } from "react-router-dom";
import Loader from "../../../shared/Views/Loader";
import StepperContext from "./stepperContext";

const getNavStyles = (indx, length) => {
  let styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
  }
  return styles;
};

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showSecondstep: true,
      showPreviousBtn: true,
      showNextBtn: true,
    };
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
      showCancelBtn: true,
      showFirststep: true,
    };
  } else {
    return {
      showPreviousBtn: true,
      showSubmitBtn: true,
      showThirdstep: true,
    };
  }
};

const useStyles = makeStyles((theme) => ({
  ButtonContained: {
    padding: "6px 35px",
    color: "#ffffff",
    fontSize: "0.875rem",
    display: "inline-flex",
    alignItems: "center",
    textTransform: "uppercase",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 4,
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#098169",
    },
  },
  ButtonOutlined: {
    padding: "8px 35px",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 4,
    color: theme.palette.secondary.main,
    "&:hover": {
      color: "#098169",
      backgroundColor: "transparent",
    },
  },
}));

export default function MultiStep(props) {
  const history = useHistory();
  const [stylesState, setStyles] = useState(
    getNavStyles(0, props.steps.length)
  );
  const messageRef = React.useRef(null);
  const [compState, setComp] = useState(0);
  const [loading, setLoading] = useState(false);

  const [contextState, setContextState] = useState({});

  const [buttonsState, setButtons] = useState(
    getButtonsState(0, props.steps.length)
  );
  const classes = useStyles();

  const updateContextState = (objectToUpdate) => {
    setContextState((prev) => {
      return {
        ...prev,
        ...objectToUpdate,
      };
    });
  };
  const next = () => {
    switch (compState) {
      case 0: {
        if (
          !contextState.firstName ||
          !contextState.middleName ||
          !contextState.lastName
        ) {
          toast.error("Please enter all the mandatory information.");
          return;
        }

        break;
      }
      case 1: {
        if (!contextState.address || !contextState.phoneNo) {
          toast.error("Please enter all the mandatory information.");
          return;
        }

        break;
      }

      default: {
        break;
      }
    }

    setLoading(false);
    setStepState(compState + 1);
  };

  const previous = () => {
    setStepState(compState > 0 ? compState - 1 : compState);
  };

  const handleKeyDown = (evt) =>
    evt.which === 13 ? next(props.steps.length) : {};

  const handleOnClick = (evt) => {
    if (
      evt.currentTarget.value === props.steps.length - 1 &&
      compState === props.steps.length - 1
    ) {
      setStepState(props.steps.length);
    } else {
      setStepState(evt.currentTarget.value);
    }
  };
  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length));
  }

  const renderSteps = () =>
    props.steps.map((s, i) => (
      <li
        className={"progtrckrs-" + stylesState[i]}
        onClick={handleOnClick}
        key={i}
        value={i}
      >
        <em>{i + 1}</em>
        <span>{props.steps[i].name}</span>
      </li>
    ));

  const handleClick = () => {};

  return (
    <StepperContext.Provider
      value={{ updateContextState, contextState, setContextState }}
    >
      <div className="stepheading" onKeyDown={handleKeyDown}>
        {loading && <Loader />}
        <ol className="progtrckrs progtrckrss">{renderSteps()}</ol>

        {props.steps[compState].component}
        <div
          className="paybuttons"
          style={props.showNavigation ? {} : { display: "none" }}
        >
          <Button
            aria-label="click here to back"
            color="secondary"
            className={classes.ButtonOutlined}
            style={buttonsState.showPreviousBtn ? {} : { display: "none" }}
            onClick={previous}
          >
            Back
          </Button>

          <Link
            to="/"
            aria-label="click here to Cancel and go to login page"
            color="secondary"
            className={classes.ButtonOutlined}
            style={buttonsState.showCancelBtn ? {} : { display: "none" }}
          >
            Cancel
          </Link>
          <Button
            aria-label="click here to next"
            color="secondary"
            variant="contained"
            className={classes.ButtonContained}
            style={buttonsState.showNextBtn ? {} : { display: "none" }}
            onClick={next}
          >
            Next
          </Button>

          <Button
            aria-label="click here to submit"
            className={classes.ButtonContained}
            onClick={handleClick}
            style={buttonsState.showSubmitBtn ? {} : { display: "none" }}
            //onClick={next}
          >
            Register
          </Button>
        </div>
        <MessageBox ref={messageRef} />
      </div>
    </StepperContext.Provider>
  );
}

MultiStep.defaultProps = {
  showNavigation: true,
};
