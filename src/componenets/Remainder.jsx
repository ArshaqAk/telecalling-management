import React, { useEffect } from 'react'
import '../styles/components/remainder.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

const Remainder = () => {
  // useEffect(()=>{
  //   const fetchReminder = useSelector()
  // })
  const reminder_data =useSelector((state)=>state.students)
  console.log(reminder_data);

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
                  reminder_data.filter(item => item.status == 'call back')
                  .map((item,index)=>(
                    <MDBTableBody>
                    <tr>
                      <th scope='row'>{item.name}</th>
                      <td>{item.status}</td>
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
