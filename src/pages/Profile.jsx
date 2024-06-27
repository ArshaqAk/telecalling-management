// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
// import { app } from '../Firebase/firebaseConfigure';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

// const Profile = () => {
//     const navigate = useNavigate();
//     const db = getFirestore(app);
//     let { id } = useParams();
//     const [formData, setFormdata] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         college: '',
//         status: '',
//         id: '',
//         comment: '',
//         current_level: '',
//         callback_date: '',
//         level_details: [
//             { 
//               stage: 'Lv 1',
//               person: {
//                 shena: false,
//                 shameem: false,
//                 aniq: false
//               },
//               date: ''
//             },
//             { 
//               stage: 'Lv 2',
//               person: {
//                 shena: false,
//                 shameem: false,
//                 aniq: false
//               },
//               date: ''
//             },
//             { 
//               stage: 'Lv 3',
//               person: {
//                 shena: false,
//                 shameem: false,
//                 aniq: false
//               },
//               date: ''
//             },
//         ],
//     });

//       //Date
//       let today = new Date();
//       let year = today.getFullYear();
//       let month = String(today.getMonth() + 1).padStart(2, '0'); 
//       let day = String(today.getDate()).padStart(2, '0');
//       let formattedDate = `${year}-${month}-${day}`;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const querySnapshot = await getDocs(collection(db, "students"));
//                 const data = querySnapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }));
//                 const student = data.find(student => student.id === id);
//                 setFormdata(student);
//             } catch (error) {
//                 console.error("Error fetching documents: ", error);
//                 toast.error("Failed to fetch student data");
//             }
//         };

//         fetchData();
//     }, [db, id]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             const studentDoc = doc(db, "students", id);
//             await updateDoc(studentDoc, formData);
//             toast.success('Updated successfully');
//             setTimeout(function () {
//                 navigate('/home');
//             }, 1500);

//         } catch (error) {
//             console.error("Error updating document: ", error);
//             toast.error("Failed to update student data");
//         }
//     };

//     const handlePersonChange = (stage, person) => {
//         setFormdata(prevState => {
//             const newLevelDetails = prevState.level_details.map(detail => {
//                 if (detail.stage === stage) {
//                     return {
//                         ...detail,
//                         person: {
//                             shena: false,
//                             shameem: false,
//                             aniq: false,
//                             [person]: true
//                         }
//                     };
//                 }
//                 return detail;
//             });
//             return { ...prevState, level_details: newLevelDetails };
//         });
//     };

//     return (
//         <div className="profile_container">
//             <div className="row">
//                 <div className="col-lg-3 col-sm-12"></div>
//                 <div className="col-lg-6 col-sm-12 text-center">
//                     <h4 className='mt-4'> Student Profile</h4>
//                     <form className='mt-4 shadow' onSubmit={handleUpdate} >
//                         <div className="name_input d-flex w-100 align-items-center">
//                             <label htmlFor="name">Name:</label>
//                             <input id="name" onChange={(e) => setFormdata({ ...formData, name: e.target.value })} value={formData.name} className='form-control m-1 w-75 ms-auto' placeholder='Name' type="text" />
//                         </div>
//                         <div className="phone_input d-flex w-100 align-items-center">
//                             <label htmlFor="phone">Phone:</label>
//                             <input id="phone" onChange={(e) => setFormdata({ ...formData, phone: e.target.value })} value={formData.phone} className='form-control m-1 w-75 ms-auto' placeholder='Phone' type="text" />
//                         </div>
//                         <div className="email_input d-flex w-100 align-items-center">
//                             <label htmlFor="email">Email:</label>
//                             <input id="email" onChange={(e) => setFormdata({ ...formData, email: e.target.value })} value={formData.email} className='form-control m-1 w-75 ms-auto' placeholder='Email' type="email" />
//                         </div>
//                         <div className="college_input d-flex w-100 align-items-center">
//                             <label htmlFor="college">College:</label>
//                             <input id="college" onChange={(e) => setFormdata({ ...formData, college: e.target.value })} value={formData.college} className='form-control m-1 w-75 ms-auto' placeholder='College' type="text" />
//                         </div>
//                         <div className="select-box text-start d-flex align-items-center" style={{ width: '100%' }}>
//                             <label htmlFor="status">Status:</label>
//                             <select id="status" onChange={(e) => setFormdata({ ...formData, status: e.target.value })} value={formData.status} className='my-1 form-select w-75 ms-auto'>
//                                 <option value="not called">Not called</option>
//                                 <option value="call back">Call back</option>
//                                 <option value="call attended">Call Attended</option>
//                                 <option value="switch off">Switch off</option>
//                                 <option value="not answered">Not Answered</option>
//                             </select>
//                         </div>
//                         {/* Date */}
//                         {
//                             formData.status === 'call back' &&
//                             <div className="name_input d-flex w-100 align-items-center">
//                                 <label htmlFor="name">Date:</label>
//                                 <input onChange={(e) => setFormdata({ ...formData, callback_date: e.target.value })} value={formData.callback_date} type="date" className='form-control m-1 w-75 ms-auto' />
//                             </div>
//                         }
//                         {/* Level */}
//                         {
//                             formData.level_details
//                             .filter(item => item.stage === formData.current_level)
//                             .map((item, i) => (
//                                 <div key={i} className="Levels-container" style={{ width: '100%' }}>
//                                     <div className='select-box text-start d-flex align-items-center'>
//                                         <label htmlFor="level">Level:</label>
//                                         <select id="level" onChange={(e) => setFormdata({ ...formData, current_level: e.target.value })} value={formData.current_level} className='my-1 form-select w-75 ms-auto'>
//                                             <option value="Lv 1">Lv 1</option>
//                                             <option value="Lv 2">Lv 2</option>
//                                             <option value="Lv 3">Lv 3</option>
//                                         </select>
//                                     </div>
//                                     <div className='check-box  d-flex justify-content-end align-items-center  pe-5 ps-3'>
//                                         <p className='me-5  mt-2 pt-1'>Called by :</p>
//                                         <div className="radio w-50 ">
//                                         <label className='me-2'><input onChange={() => handlePersonChange(item.stage, 'shena')} checked={item.person.shena} type="radio" className='me-1' name={`person_${item.stage}`} />shena </label>
//                                         <label className='me-2'><input onChange={() => handlePersonChange(item.stage, 'shameem')} checked={item.person.shameem} type="radio" className='me-1' name={`person_${item.stage}`} />shameem </label>
//                                         <label className='me-2'><input onChange={() => handlePersonChange(item.stage, 'aniq')} checked={item.person.aniq} type="radio" className='me-1' name={`person_${item.stage}`} />aniq </label>

//                                         </div>
//                                     </div>
//                                     <div className="date">
//                                         <p> Updated on: 17/02/24 </p>   
//                                     </div>
//                                 </div>
//                             ))
                            
//                         }

//                         <div className="comment_input d-flex align-items-center w-100 mt-2">
//                             <label htmlFor="comment">Comments:</label>
//                             <input id="comment" onChange={(e) => setFormdata({ ...formData, comment: e.target.value })} value={formData.comment} className='form-control m-1 w-75 ms-auto' placeholder='Comments' type="text" />
//                         </div>
//                         <div className="button_box">
//                             <Link to={'/home'}>
//                                 <button type="button" className='btn btn-sm btn-outline-secondary mt-2 me-2'>Cancel</button>
//                             </Link>
//                             <button type="submit" className='btn btn-sm btn-outline-secondary mt-2'>Save</button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="col-lg-3 col-sm-12"></div>
//             </div>

//             {/* Toast */}
//             <ToastContainer
//                 position="bottom-right"
//                 autoClose={700}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//             />
//         </div>
//     );
// };

// export default Profile;
