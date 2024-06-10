import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../styles/components/datatable.css';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../Firebase/firebaseConfigure';
import { Link } from 'react-router-dom';

const Datatable = () => {
  const db = getFirestore(app);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTableData(data);
        console.log(data); 
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
  
    fetchData();
  }, [db]); 
  
  return (
    <>
      <div className="datatable-container">
        <MDBTable className='datatable'>
          <MDBTableHead>
            <tr className='datatable-head'>
              <th scope='col'>Name</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Email</th>
              <th scope='col'>Status</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td><Link to={`/profile/${item.id}`} className='link'>{item.name}</Link></td>
                <td><Link to={`/profile/${item.id}`} className='link'>{item.phone}</Link></td>
                <td><Link to={`/profile/${item.id}`} className='link'>{item.email}</Link></td>
                <td><Link to={`/profile/${item.id}`} className='link'>{item.status}</Link></td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default Datatable;
