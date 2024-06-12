import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './componenets/Header'
import Profile from './pages/Profile'

function App() {

  return (
    <>
   
   <div className="app">
   <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
