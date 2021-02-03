"use strict";
import React,{useState,useContext} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import StepperContext from "../stepperContext";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
//import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import {
  HandleCutCopyPasteRule,
  CheckIfNullOrEmpty,
  ValidateSinglePage,
  NumericOnly,
} from "./../../../../core/common/validate";
import { MaskTaxID } from "../../../../core/common/common";
import {
  StatusCodeEnum,
  APIURLTypeEnum,
  NotificationMessageTypeEnum,
} from "../../../../core/Enum";
import RequestHelper from "../../../../common/RequestHelper";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: "10px",
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  formLabel: {
    fontSize: "18px",
    color: "#005984",
    marginBottom: "25px",
  },

  optionlabel: {
    float: "left",
    width: "auto",
    marginRight: "60px !important",
    marginBottom: "0",
  },
  formgroup: {
    flexDirection: "column",
    display: "inline-block",
  },
  AccountSpanContainer: { display: "flex" },
  AccountSpan: { flex: 1, alignSelf: "center" },
  Radiogroup: { flexDirection: "row" },
});


const StepTwo = ({classes}) => {
    const { updateContextState,contextState } = useContext(StepperContext);
    const[formTwoState,setFormTwoState]=useState({
        address:"",
        phoneNo:""
    })
  
    const HandleFormTwoChange = (e) =>{
        let{name,value}=e.target
        if(name==="phoneNo"){
            value=NumericOnly(value)
        }
        setFormTwoState((prevState)=>({ ...prevState,[name]: value }));
        updateContextState({[name]: value})
    }

    console.log(formTwoState);

  return (
    <>
      <div className="rows">
        <div class="stepone agencyRegis">
          <div className="requestree">
            <div className="grouppay">
              <div class="register_first">
                <form className={classes.root} autoComplete="off" noValidate>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol className="FormWrapper registerStep1">
                        <form
                          id="registrationSection1"
                          className="stepperForm"
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="OrgName"
                            className="TextFieldWrapper"
                            label="Address"
                            name="address"
                            margin="normal"
                            variant="filled"
                             value={formTwoState.address?formTwoState.address:contextState.address}
                             onChange={HandleFormTwoChange}
                            inputProps={{
                              invaliderrormessage:
                                "Please enter Organization Name",
                              "aria-label": "Enter Organization Name",
                              validatemessage: "Please enter Organization Name",
                              mandatory: "1",
                              maxlength: "100",
                            }}
                          />
                           <TextField
                            id="phoneNo"
                            type="phone"
                            className="TextFieldWrapper"
                            label="Phone Number "
                            margin="normal"
                            name="phoneNo"
                            variant="filled"
                            value={formTwoState.phoneNo?formTwoState.phoneNo:contextState.phoneNo}
                            onChange={HandleFormTwoChange}
                            inputProps={{
                              invaliderrormessage:
                                "Please enter Organization Name",
                              "aria-label": "Enter Organization Name",
                              validatemessage: "Please enter Organization Name",
                              mandatory: "1",
                              maxlength: "100",
                            }}
                          />                                      
                        </form>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


StepTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepTwo);
