import React from 'react'
import '../styles/pages/home.css'
import Remainder from '../componenets/Remainder';
import Form from '../componenets/Form';
import Datatable from '../componenets/Datatable';
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
      
      <div className="row mt-3">
        <div className="col-lg-12 col-sm-12">
          <Datatable/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
