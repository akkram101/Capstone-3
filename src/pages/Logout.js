import {useContext, useEffect} from 'react'
import UserContext from '../UserContext'
import {Navigate} from 'react-router-dom'

export default function Logout(){
	localStorage.clear()

	const{user, setUser} = useContext(UserContext)

	useEffect( () =>{(
		setUser({
			id:null,
			isAdmin:null
		})
	)}, [])

	return <Navigate to="/login" />
}