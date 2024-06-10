import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../Firebase/firebaseConfigure';

const Profile = () => {
    const db = getFirestore(app);
    let { id } = useParams();
    console.log(id);
    const [tableData, setTableData] = useState({});
    const [formData,setFormdata]=useState({
        name:'',
        phone:'',
        email:'',
        college:'',
        status:'',
        id:''

      })

      useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "students"));
            const data = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            const student = data.find(student => student.id === id);
            console.log(student);
            setFormdata(student);
           }
          catch (error) {
            console.error("Error fetching documents: ", error);
          }
        };
      
        fetchData();
      }, [db]);

      console.log(formData);          

      //update
      const handleUpdate=()=>{
        
      }
    
  return (
    <>
      <div className="profile_container">
        <div className="row">
            <div className="col-lg-3 col-sm-12"></div>
            <div className="col-lg-6 col-sm-12 text-center">
            <h4 className='mt-4'> Student Profile</h4>
            <form className='mt-4 '> 
                <input onChange={(e)=>setFormdata({...formData,name:e.target.value})} value={formData.name} className='form-control  m-1' placeholder='Name' type="text" />
                <input onChange={(e)=>setFormdata({...formData,phone:e.target.value})} value={formData.phone} className='form-control  m-1' placeholder='Phone' type="text" />
                <input onChange={(e)=>setFormdata({...formData,email:e.target.value})} value={formData.email} className='form-control  m-1' placeholder='Email' type="email" />
                <input onChange={(e)=>setFormdata({...formData,college:e.target.value})} value={formData.college} className='form-control  m-1' placeholder='College' type="text" />
                <input onChange={(e)=>setFormdata({...formData,status:e.target.value})} value={formData.status} className='form-control  m-1' placeholder='Status' type="text" />
                <div className="select-box text-start" style={{width:'100%'}}>
                <select name="" id="" className='my-1'>
                    <option value="">Call back</option>
                    <option value="">Call Attended</option>
                    <option value="">Switch off</option>
                    <option value="">Not Answered</option>
                </select>

                </div>
                <button onClick={handleUpdate} className='btn btn-sm btn-outline-secondary mt-2 '>Save </button>
            </form>
            </div>
            <div className="col-lg-3 col-sm-12"></div>
        </div>
      </div>
    </>
  )
}

export default Profile
