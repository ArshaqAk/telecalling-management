import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './componenets/Header'
import Profile from './pages/Profile'
import PrivateRoutes from './RoutesLayout/PrivateRoutes'
import Pagenotfound from './pages/Pagenotfound'

function App() {

  return (
    <>
   
   <div className="app">
   {/* <Header/> */}
      <Routes>
        <Route element={<PrivateRoutes/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
        </Route>
            <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
