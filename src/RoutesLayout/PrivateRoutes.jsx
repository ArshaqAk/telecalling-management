import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    // const tokenState= useSelector((state) => state.students.token);
    const sessiontoken = sessionStorage.getItem('userToken');
    console.log(sessiontoken)
    // console.log(tokenState);
    let auth = {'token':sessiontoken}
    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}
   
export default PrivateRoutes