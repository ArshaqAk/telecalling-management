import React from 'react'
import '../styles/components/form.css'
const Form = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="form-container">
            <h4 className='mt-4'>Upload Details</h4>
            <form>
                <input className='form-control  m-1' placeholder='Name' type="text" />
                <input className='form-control  m-1' placeholder='Phone' type="text" />
                <input className='form-control  m-1' placeholder='Email' type="email" />
                <input className='form-control  m-1' placeholder='College' type="text" />
                <button className='btn btn-sm btn-outline-secondary mt-2 '>Upload</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Form
