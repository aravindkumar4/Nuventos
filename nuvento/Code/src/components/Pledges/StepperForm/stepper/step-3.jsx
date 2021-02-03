"use strict";
import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import StepperContext from "../stepperContext";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import OrganizationName from "../../../../assets/images/Organization_Name.svg";

const useStyles = makeStyles((theme) => ({
  TypoBox: {
    padding: "10px 0",
    borderBottom: "1px solid #ccc",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  optionlabel: {
    marginBottom: "0",
  },
  expandcontent: {
    backgroundColor: "#f5fcfd",
    boxShadow: "none !important",
    marginTop: "0 !important",
    "&:before": {
      backgroundColor: "#f5fcfd",
    },
  },
  expandbuttonarea: {
    paddingLeft: "0",
    width: "50%",
    fontSize: "15px",
    minHeight: "48px !important",
  },

  expanddetails: {
    padding: "0",
  },

  removebg: {
    background: "#ffffff",
    display: "inline-flex",
    alignItems: "flex-start",
  },
  dividerCom: {
    flex: "1",
    marginLeft: "57px",
    display: "none",
  },
  listitems: {
    paddingTop: 20,
    flexWrap: "wrap",
  },
}));

export default function StepThree() {
   const {contextState} = useContext(StepperContext);
  
  const classes = useStyles();
  return (
    <div className="rows">
      
      <div class="steptwo">
        <div className="accountareastep2">
          <div className="grouppay registerstep3 Resregisterstep3">
            <div className={"registerstep3"}>
              <List className={classes.root}>
               
                <h3>Primary Contact Information</h3>

                <ListItem classes={{ root: classes.listitems }}>
                  <Avatar className={classes.removebg}>
                    <i class="material-icons home_ico">account_circle</i>
                  </Avatar>
                  <ListItemText
                    primary=" First Name"
                     secondary={contextState.firstName}
                  />
               
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  className={classes.dividerCom}
                />
                 <ListItem classes={{ root: classes.listitems }}>
                  <Avatar className={classes.removebg}>
                    <i class="material-icons home_ico">account_circle</i>
                  </Avatar>
                  <ListItemText
                    primary=" Middle Namee"
                     secondary={contextState.middleName}
                  />
               
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  className={classes.dividerCom}
                />
                 <ListItem classes={{ root: classes.listitems }}>
                  <Avatar className={classes.removebg}>
                    <i class="material-icons home_ico">account_circle</i>
                  </Avatar>
                  <ListItemText
                    primary=" Last Name"
                     secondary={contextState.lastName}
                  />
               
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  className={classes.dividerCom}
                />
                 <ListItem classes={{ root: classes.listitems }}>
                  <Avatar className={classes.removebg}>
                    <i class="material-icons home_ico">account_circle</i>
                  </Avatar>
                  <ListItemText
                    primary=" Address "
                     secondary={contextState.address}
                  />
               
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  className={classes.dividerCom}
                />
                 <ListItem classes={{ root: classes.listitems }}>
                  <Avatar className={classes.removebg}>
                    <i class="material-icons home_ico">account_circle</i>
                  </Avatar>
                  <ListItemText
                    primary=" Phone Number "
                     secondary={contextState.phoneNo}
                  />
               
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  className={classes.dividerCom}
                />
      
              
              </List>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
