import React, { useState } from "react";
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import PledgesAutoPay from "./autopay_enrolled";

import DataFile from "../Pledges/DataFile";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Pledges() {
  const [modal, setModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [account, setAccount] = useState("");
  const [pledgeAmount, setPledgeAmount] = useState("");
  const [pledgeDate, setPledgeDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(true);
  const [pledgesData, setPledgesData] = useState(DataFile);
  const [isEdit, setIsEdit] = useState("");

  function addNewPledge() {
    setModal(true);
    setCustomerName("");
    setAccount("");
    setPledgeAmount("");
    setPledgeDate("");
    setExpDate("");
    setStatus("");
  }

  const saveFunction = (e) => {
    e.preventDefault();
    if(isEdit){
        pledgesData[Number(isEdit)] = {
            customer: customerName,
            account: account,
            currency: pledgeAmount,
            pledgedate: pledgeDate,
            expirydate: expDate,
            status: status,
        }
        setModal(false);
        setIsEdit('');
        setPledgesData(pledgesData);
        return;
    }
    const oldPledgesData = pledgesData.slice();
    oldPledgesData.push({
      customer: customerName,
      account: account,
      currency: pledgeAmount,
      pledgedate: pledgeDate,
      expirydate: expDate,
      status: status,
    });
    setModal(false);
    setIsEdit('');
    setPledgesData(oldPledgesData);
  };
  const cancelFunction = (e) => {
    // e.preventDefault();
    setModal(false);
  };
  const deletePledge = (index) => {
    const filterdata = pledgesData.filter((val, ind) => {
      return ind !== index;
    });
    setPledgesData(filterdata);
  };

  const editPledge = (index) => {
    setModal(true);
    setIsEdit(String(index));
    const {
      customer,
      account,
      currency,
      pledgedate,
      expirydate,
      status,
    } = pledgesData[index];

    setCustomerName(customer);
    setAccount(account);
    setPledgeAmount(currency);
    setPledgeDate(pledgedate);
    setExpDate(expirydate);
    setStatus(status);
  };
  return (
    <>
      <Dialog
        onClose={modal}
        aria-labelledby="customized-dialog-title"
        open={modal}
      >
        <DialogTitle id="alert-dialog-title">Customer</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div
              className={
                "form-group" + (submitted && !customerName ? " has-error" : "")
              }
            >
              <TextField
                className="LoginTextFields"
                id="username"
                label="Enter Email Address *"
                type="text"
                name="username"
                autoComplete="email"
                margin="normal"
                variant="filled"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              {submitted && !customerName && (
                <div className="help-block">customerName is required</div>
              )}
            </div>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <div
              className={
                "form-group" + (submitted && !account ? " has-error" : "")
              }
            >
              <TextField
                className="LoginTextFields"
                id="outlined-password-input"
                label="Account"
                name="account"
                type="text"
                margin="normal"
                variant="filled"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
              {submitted && !account && (
                <div className="help-block">account is required</div>
              )}
            </div>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <div
              className={
                "form-group" + (submitted && !pledgeAmount ? " has-error" : "")
              }
            >
              <TextField
                className="LoginTextFields"
                id="outlined-password-input"
                label="pledgeAmount"
                name="pledgeAmount"
                type="text"
                margin="normal"
                variant="filled"
                value={pledgeAmount}
                onChange={(e) => setPledgeAmount(e.target.value)}
              />
              {submitted && !pledgeAmount && (
                <div className="help-block">pledgeAmount is required</div>
              )}
            </div>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <div
              className={
                "form-group" + (submitted && !pledgeDate ? " has-error" : "")
              }
            >
              <TextField
                className="LoginTextFields"
                id="outlined-password-input"
                label="pledgeDate"
                name="pledgeDate"
                type="text"
                margin="normal"
                variant="filled"
                value={pledgeDate}
                onChange={(e) => setPledgeDate(e.target.value)}
              />
              {submitted && !pledgeDate && (
                <div className="help-block">pledgeDate is required</div>
              )}
            </div>
          </DialogContentText>

          <DialogContentText id="alert-dialog-description">
            <div
              className={
                "form-group" + (submitted && !expDate ? " has-error" : "")
              }
            >
              <TextField
                className="LoginTextFields"
                id="outlined-password-input"
                label="expDate"
                name="expDate"
                type="text"
                margin="normal"
                variant="filled"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
              />
              {submitted && !expDate && (
                <div className="help-block">expDate is required</div>
              )}
            </div>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <div
              className={
                "form-group" + (submitted && !status ? " has-error" : "")
              }
            >
              <TextField
                className="LoginTextFields"
                id="outlined-password-input"
                label="status"
                name="status"
                type="text"
                margin="normal"
                variant="filled"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />

              {submitted && !status && (
                <div className="help-block">status is required</div>
              )}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={saveFunction}>
            Save changes
          </Button>
          <Button color="danger" onClick={cancelFunction}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Grid component="div" className="pageheading-wrapper">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="6" xs="12">
              <Grid component="div" className="pageheading-box">
                <Typography component="h1">Pledge History</Typography>
              </Grid>
            </MDBCol>
            <MDBCol sm="6" xs="12">
              <Button
                aria-label="click here to make pledge"
                variant="outlined"
                className="make-pledges-btn"
                color="primary"
                onClick={addNewPledge}
              >
                Add New Pledge
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Grid>
      <section className="page-wrapper pledgeSec">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <TableContainer className="table-responsive pledges-table">
                <Table
                  className={`table mb-0 `}
                  aria-labelledby="tableTitle"
                  aria-label="pledge table"
                >
                  <TableBody>
                    <TableRow
                      hover
                      role="checkbox"
                      // aria-checked={isItemSelected}
                      // tabIndex={-1}
                      // key={index}
                      // selected={isItemSelected}
                      // classes={{ selected: classes.tabRow }}
                    >
                      <TableCell
                        component="td"
                        // id={labelId}
                        scope="row"
                        padding="none"
                        data-label="Customer"
                      >
                        Customer
                      </TableCell>
                      <TableCell align="left" data-label="Account">
                        Account
                        <p className="smlltxt"></p>
                      </TableCell>
                      <TableCell align="center" data-label="Pledge">
                        Currency
                      </TableCell>
                      <TableCell align="left" data-label="Pledge Date">
                        pledge Date
                      </TableCell>
                      <TableCell align="left" data-label="Expiry">
                        Expiry Date
                      </TableCell>
                      <TableCell align="left" data-label="Status">
                        Status
                      </TableCell>
                      <TableCell align="left" className="respMenu">
                        Action
                      </TableCell>
                    </TableRow>

                    {/* <TableCell
                          style={{ border: "0", padding: "0" }}
                          colSpan={6}
                        /> */}
                    {pledgesData &&
                      pledgesData.map((val, index) => {
                        return (
                          <>
                            <TableRow>
                              <TableCell
                                component="td"
                                // id={labelId}
                                scope="row"
                                padding="none"
                                data-label="Customer"
                              >
                                {val.customer}
                              </TableCell>
                              <TableCell align="left" data-label="Account">
                                {val.account}
                                <p className="smlltxt"></p>
                              </TableCell>
                              <TableCell align="center" data-label="Pledge">
                                {val.currency}
                              </TableCell>
                              <TableCell align="left" data-label="Pledge Date">
                                {val.pledgedate}
                              </TableCell>
                              <TableCell align="left" data-label="Expiry">
                                {val.expirydate}
                              </TableCell>
                              <TableCell align="left" data-label="Status">
                                {val.status}
                              </TableCell>
                              <TableCell align="left" data-label="Status">
                                <button
                                  onClick={() => {
                                    editPledge(index);
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    deletePledge(index);
                                  }}
                                >
                                  Delete
                                </button>
                              </TableCell>
                            </TableRow>
                          </>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default Pledges;
