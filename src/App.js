import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserProvider} from './UserContext'

import {useState, useEffect} from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Register from './pages/Register'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'

import AppNavbar from './components/AppNavbar'
import Footer from './components/Footer'


function App() {
  const [user,setUser] = useState({
    id:null,
    isAdmin:null,
    email:null
  })

  useEffect( () => {
    const token=localStorage.getItem("token")

    fetch('http://localhost:3008/api/users/profile',{
      method:"GET",
      headers:{
        "Authorization": `Bearer${token}`
      }
    })
    .then(result => result.json())
    .then(result =>{
       console.log(result)
    })
  }, [])
  





  return(
    <UserProvider value={{user, setUser}}>
    <BrowserRouter>
      <AppNavbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          {
            user.id==null || user.id==undefined
            ?
              <Route path="/register" element={<Courses />} />
            :
              <Route path="/register" element={<Register />} />
          }
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </UserProvider>

  )
}

export default App;
