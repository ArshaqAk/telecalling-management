import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import '../styles/components/form.css'
import { getFirestore } from "firebase/firestore";
import { app } from '../Firebase/firebaseConfigure';
const Form = () => {
  const db = getFirestore(app);

  const [formData,setFormdata]=useState({
    name:'',
    phone:'',
    email:'',
    college:''
  })

  //upload
  const handleUpload=async(e)=>{
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.college.trim()) {
      alert('Please fill all the fields');
    }
        
    else{
      try {
        const docRef = await addDoc(collection(db, "students"), {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          college: formData.college,
          status: 'Not called',
          comment: ''
        });
        console.log("Document written with ID: ", docRef.id);
        // alert('Data uploaded successfully')
        setFormdata({
          name:'',
          phone:'',
          email:'',
          college:''    
        })
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="form-container">
            <h4 className='mt-4'>Upload Details</h4>
            <form>
                <input onChange={(e)=>setFormdata({...formData,name:e.target.value})} value={formData.name} className='form-control  m-1' placeholder='Name' type="text" />
                <input onChange={(e)=>setFormdata({...formData,phone:e.target.value})} value={formData.phone} className='form-control  m-1' placeholder='Phone' type="text" />
                <input onChange={(e)=>setFormdata({...formData,email:e.target.value})} value={formData.email} className='form-control  m-1' placeholder='Email' type="email" />
                <input onChange={(e)=>setFormdata({...formData,college:e.target.value})} value={formData.college} className='form-control  m-1' placeholder='College' type="text" />
                <button onClick={handleUpload} className='btn btn-sm btn-outline-secondary mt-2 '>upload</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Form
