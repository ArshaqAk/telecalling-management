import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { app } from '../Firebase/firebaseConfigure';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const navigate = useNavigate();
    const db = getFirestore(app);
    let { id } = useParams();
    const [formData, setFormdata] = useState({
        name: '',
        phone: '',
        email: '',
        college: '',
        status: '',
        id: '',
        comment: '',
        level: '',
        date:''
    });
    //    console.log(formData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "students"));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                const student = data.find(student => student.id === id);
                setFormdata(student);
            } catch (error) {
                console.error("Error fetching documents: ", error);
                toast.error("Failed to fetch student data");
            }
        };

        fetchData();
    }, [db, id]);

    //update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const studentDoc = doc(db, "students", id);
            await updateDoc(studentDoc, formData);
            //toast setting
            toast.success('Updated successfully');
            setTimeout(function() { 
                navigate('/home');
              }, 1500);

        } catch (error) {
            console.error("Error updating document: ", error);
            toast.error("Failed to update student data");
        }
    };

    return (
        <div className="profile_container">
            <div className="row">
                <div className="col-lg-3 col-sm-12"></div>
                <div className="col-lg-6 col-sm-12 text-center">
                    <h4 className='mt-4'> Student Profile</h4>
                    <form className='mt-4' onSubmit={handleUpdate}>
                        <div className="name_input d-flex w-100 align-items-center">
                            <label htmlFor="name">Name:</label>
                            <input id="name" onChange={(e) => setFormdata({ ...formData, name: e.target.value })} value={formData.name} className='form-control m-1 w-75 ms-auto' placeholder='Name' type="text" />
                        </div>
                        <div className="phone_input d-flex w-100 align-items-center">
                            <label htmlFor="phone">Phone:</label>
                            <input id="phone" onChange={(e) => setFormdata({ ...formData, phone: e.target.value })} value={formData.phone} className='form-control m-1 w-75 ms-auto' placeholder='Phone' type="text" />
                        </div>
                        <div className="email_input d-flex w-100 align-items-center">
                            <label htmlFor="email">Email:</label>
                            <input id="email" onChange={(e) => setFormdata({ ...formData, email: e.target.value })} value={formData.email} className='form-control m-1 w-75 ms-auto' placeholder='Email' type="email" />
                        </div>
                        <div className="college_input d-flex w-100 align-items-center">
                            <label htmlFor="college">College:</label>
                            <input id="college" onChange={(e) => setFormdata({ ...formData, college: e.target.value })} value={formData.college} className='form-control m-1 w-75 ms-auto' placeholder='College' type="text" />
                        </div>
                        <div className="select-box text-start d-flex align-items-center" style={{ width: '100%' }}>
                            <label htmlFor="status">Status:</label>
                            <select id="status" onChange={(e) => setFormdata({ ...formData, status: e.target.value })} value={formData.status} className='my-1 form-select w-75 ms-auto'>
                                <option value="not called">Not called</option>
                                <option value="call back">Call back</option>
                                <option value="call attended">Call Attended</option>
                                <option value="switch off">Switch off</option>
                                <option value="not answered">Not Answered</option>
                            </select>
                        </div>
                            {/* date */}
                            {
                                formData.status == 'call back'  &&
                                <div className="name_input d-flex w-100 align-items-center">
                                <label htmlFor="name">Date:</label>
                                <input onChange={(e)=>setFormdata({...formData,date:e.target.value})}  value={formData.date}  type="date"  className='form-control m-1 w-75 ms-auto'/>
                                </div>
    
                            }
                        <div className="select-box text-start d-flex align-items-center" style={{ width: '100%' }}>
                            <label htmlFor="level">Level:</label>
                            <select id="level" onChange={(e) => setFormdata({ ...formData, level: e.target.value })} value={formData.level} className='my-1 form-select w-75 ms-auto'>
                                <option value="Lv 1">Lv 1</option>
                                <option value="Lv 2">Lv 2</option>
                                <option value="Lv 3">Lv 3</option>
                            </select>

                        </div>
                        <div className="comment_input d-flex align-items-center w-100">
                            <label htmlFor="comment">Comments:</label>
                            <input id="comment" onChange={(e) => setFormdata({ ...formData, comment: e.target.value })} value={formData.comment} className='form-control m-1 w-75 ms-auto' placeholder='Comments' type="text" />
                        </div>
                        <div className="button_box">
                            <Link to={'/home'}>
                                <button type="button" className='btn btn-sm btn-outline-secondary mt-2 me-2'>Cancel</button>
                            </Link>
                            <button type="submit" className='btn btn-sm btn-outline-secondary mt-2'>Save</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-sm-12"></div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={700}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
                transition: Bounce
                />  
      </div>
    );
}

export default Profile;
