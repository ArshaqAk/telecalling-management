import React, { useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../styles/components/datatable.css'
import { Link } from 'react-router-dom';
const Datatable = () => {
  const [tabledata,setTabledata]=useState([
    {
      name:"Arshaq",
      email:"arshaqakard@gamil.com",
      phone:'9745935629',
      status:'Not called'
    },
    {
      name:"Kevin",
      email:"arshaqakard@gamil.com",
      phone:'9745935629',
      status:'Not called'
    },
  ])
  return (
    <>
      <div className="datatable-container">
      <MDBTable className='datatable'>
      <MDBTableHead>
        <tr className='datatable-head'>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          tabledata.map((item,index)=>(
            <tr>
            <th>{item.name}</th>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.status}</td>
          </tr>
          ))
          }
      </MDBTableBody>
    </MDBTable>
      </div>
    </>
  )
}

export default Datatable
