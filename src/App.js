import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserProvider} from './UserContext'

import {useState, useEffect} from 'react';

import Home from './pages/Home'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'




function App() {
  // const [user,setUser] = useState({
  //   id:null,
  //   isAdmin:null,
  //   email:null
  // })

  // useEffect( () => {
  //   const token=localStorage.getItem("token")

  //   fetch('http://localhost:3008/api/users/profile',{
  //     method:"GET",
  //     headers:{
  //       "Authorization": `Bearer${token}`
  //     }
  //   })
  //   .then(result => result.json())
  //   .then(result =>{
  //      console.log(result)
  //   })
  // }, [])
  





  return(

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  

  )
}

export default App;
