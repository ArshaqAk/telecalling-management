import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../styles/components/datatable.css';
import { getFirestore, collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { app } from '../Firebase/firebaseConfigure';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { storedata } from '../Redux/studentsSlice';

const Datatable = () => {
  const dispatch = useDispatch();
  const db = getFirestore(app);
  const tableData = useSelector((state) => state.students);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "students"), (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(storedata(data));
    }, (error) => {
      console.error("Error fetching documents: ", error);
    });

    return () => unsubscribe();
  }, [db, dispatch]);

  // Delete
  const handleDelete = async (id) => {
    const userConfirmed = window.confirm("Are you sure?");
    if (userConfirmed) {
      try {
        await deleteDoc(doc(db, "students", id));
      } catch (error){
        console.error("Error deleting document: ", error);
      }
    }
  };

  const filteredData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="datatable-container ">
      <div className="search_container  m-1" >
        <input
          className='form-control w-25  '
          type="text"
          placeholder='Search by name'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <MDBTable className="datatable">
        <MDBTableHead>
          <tr className="datatable-head">
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => handleDelete(item.id)} className="btn btn-sm me-3"><MdDelete /></button>
                <Link to={`/profile/${item.id}`} className="link"><button className="btn btn-sm"><MdEdit /></button></Link>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Datatable;
