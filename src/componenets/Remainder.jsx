import React from 'react'
import '../styles/components/remainder.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Remainder = () => {
  return (
    <>
     <div className="container-fluid">
        <div className="row">
            <div className="col">
              
              {/* Remainder box */}
              <div className="remainder-box">
                <h4>Reminder</h4>
              <MDBTable>
                <MDBTableHead>
                  <tr className='table-head'>
                    <th scope='col'>Name</th>
                    <th scope='col'>Status</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope='row'>Arshaq</th>
                    <td>Call back</td>
                  </tr>
                  <tr>
                    <th scope='row'>Kevin</th>
                    <td>Call back</td>
                  </tr>
                  <tr>
                    <th scope='row'>Shameem</th>
                    <td>Call back</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>

              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Remainder
