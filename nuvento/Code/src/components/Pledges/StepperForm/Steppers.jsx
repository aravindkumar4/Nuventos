import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import HorizontalLabelPositionBelowStepper from './stepper';

export default function Steppers() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="12" sm="12" xs="12" className="smallcontainer">
          <div className={'wrapper-box paybilltopspace'}>
            <MDBCol lg="7" xs="12" className="ml-auto mr-auto">
              <Paper elevation={1} className="ShortPaper">
                <div class="billingpayarea regisFooterBtn" role="region" aria-label="Registration">
                  <Typography color="primary" component="h2" className="titlehead"> Agency Account Registration  </Typography>
                  <HorizontalLabelPositionBelowStepper />
                </div>
              </Paper>
            </MDBCol>    
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}