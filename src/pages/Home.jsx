import React from 'react'
import '../styles/pages/home.css'
import Remainder from '../componenets/Remainder';
import Form from '../componenets/Form';
const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
            <Remainder/>
        </div>
        <div className="col-lg-9">
            <Form/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
