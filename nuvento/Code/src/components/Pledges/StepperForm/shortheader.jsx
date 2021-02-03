import React from 'react';
import Paper from '@material-ui/core/Paper';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';



const styles = theme => ({   
    HeaderMain: {
        display: 'none',
    },
    });

class ShortHeader extends React.Component {
  render() {
  return (
   
    <MDBContainer>
        <MDBRow>
        <MDBCol size="12">
             <Paper  className={'wrapper-box paybilltopspace'}> 
		        <MDBCol size="8" className="float-left">
                    <div class="billingpayarea">
                      tertertretretre
                    </div>
                </MDBCol>

            </Paper>
		</MDBCol>
         </MDBRow>
        </MDBContainer>
   
  );
}
}

export default ShortHeader;