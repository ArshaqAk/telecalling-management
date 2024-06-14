import React, { useEffect } from 'react'
import '../styles/components/remainder.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

const Remainder = () => {
  const reminder_data =useSelector((state)=>state.students.studentsData)

  //Date
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0'); 
    let day = String(today.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;
    // console.log(formattedDate)


  return (
    <>
      <div className="reminder-container">
      <div className="remainder-box">
                <h4>Reminder</h4>
              <MDBTable>
                <MDBTableHead>
                  <tr className='table-head'>
                    <th scope='col'>Name</th>
                    <th scope='col'>Status</th>
                  </tr>
                </MDBTableHead>
                {
                  reminder_data.filter(item => item.status == 'call back' && item.date == formattedDate)
                  .map((item,index)=>(
                    <MDBTableBody key={index}>
                      
                    <tr>
                      <th scope='row'>{item.name}</th>
                      <td className=''>{item.status}</td>
                    </tr>
                  </MDBTableBody>
  
                  ))
                }
              </MDBTable>

              </div>

      </div>
    </>
  )
}

export default Remainder
