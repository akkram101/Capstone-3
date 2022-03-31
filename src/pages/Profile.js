import {Fragment, useState, useEffect} from 'react'
import Navigation from '../components/Navbar'
import {Link} from 'react-router-dom'
// import SideNav from '../components/SideNav'
const admin=localStorage.getItem(`isAdmin`)
const id=localStorage.getItem(`id`)
const token=localStorage.getItem(`token`)

export default function Profile(){
	const [userId,setUserId]=useState()
	const [fullName,setFullName]=useState()
	const [email,setEmail]=useState()
	const [contact,setContact]=useState()
	const [gender,setGender]=useState()
	const [bday,setBday]=useState()
	const [address,setAddress]=useState()

	const [userLength,setUserL]=useState()
	const [adminLength,setAdminL]=useState()

	// const [userNum, setUserNum]=useState()
	const [users,setUsers]=useState()
	const [admins,setAdmins]=useState()

	const SideNav = () =>{

		const AdminCheck=()=>{
			if(admin=="true"){
				return(
					<Fragment>
					<li><a href="#">Edit Profile</a></li>
					<li><a href="#myOrders">Manage Orders</a></li>
					<li><a href="#users">Manage Users</a></li>
					<li><a href="#products">Manage Products</a></li>
					<li><a href="#">Business Insights</a></li>
					<li><a href="#">Settings</a></li>
					</Fragment>
					)
			}else{
				return(
					<Fragment>
					<li><a href="#">Edit Profile</a></li>
					<li><a href="#myOrders">My Orders</a></li>
					<li><a href="#">My Addresses</a></li>
					<li><a href="#">Payment Methods</a></li>
					<li><a href="#">Settings</a></li>
					</Fragment>
					)
			}
		}
		return (
			<div className="sideNav text-center pt-5">
				<img src="https://i.pinimg.com/550x/9f/d6/e2/9fd6e2c532bb9003cded155af3573415.jpg" width="150px" height="150px" className="img-fluid" />				
				<ul className="p-5 text-left" id="ul">	
				<AdminCheck />	
				</ul>
			</div>
			)
	}

	const fetchUsers = () =>{
		fetch(`http://localhost:3009/api/users/users`,{
				method:"GET",
				headers:{
					"Authorization":`Bearer ${token}`
				}
			})
			.then(result => result.json())
			.then(result => {
			setUserL(result.length)

			setUsers(result.map(users =>{
				const {
					_id:userId,
					firstName:userFN,
					lastName:userLN,
					email:userEmail,
					createdAt:userDate
					}=users
				const userNum = result.indexOf(users)+1

					

				return(
					<tr key={userId}>
					  <th scope="row" id="userIndex">{userNum}</th>
					  <td>{userId}</td>
					  <td>{userFN} {userLN}</td>
					  <td>{userEmail}</td>
					  <td>{userDate}</td>
					  <td><button className="btn btn-danger mx-3" onClick={()=>handleDelete(userEmail)}><small>Delete</small></button>
					  <button className="btn btn-info" onClick={()=>handleAdmin(userEmail)}><small>Make Admin</small></button></td>
					</tr>

				)
			}))
		})
	}

	const fetchAdmins = () =>{
		fetch(`http://localhost:3009/api/users/admins`,{
				method:"GET",
				headers:{
					"Authorization":`Bearer ${token}`
				}
			})
			.then(result => result.json())
			.then(result => {
			// Length.innerHTML=`${result.length}`

			setAdmins(result.map(users =>{
				const {
					_id:userId,
					firstName:userFN,
					lastName:userLN,
					email:userEmail,
					createdAt:userDate
					}=users
				const userNum = result.indexOf(users)+1

					

				return(
					<tr key={userId}>
					  <th scope="row" id="userIndex">{userNum}</th>
					  <td>{userId}</td>
					  <td>{userFN} {userLN}</td>
					  <td>{userEmail}</td>
					  <td>{userDate}</td>
					  <td><button className="btn btn-danger mx-3" onClick={()=>handleDelete(userEmail)}><small>Delete</small></button>
					  <button className="btn btn-info" onClick={()=>handleUser(userEmail)}><small>Make User</small></button></td>
					</tr>

				)
			}))
		})
	}

	useEffect(()=>{
		fetchUserData()
		fetchUsers()
		fetchAdmins()
	},[])

	const fetchUserData=()=>{
		fetch(`http://localhost:3009/api/users/${id}`,{
			method:"GET",
			headers:{
				"Authorization":`Bearer ${token}`
			}
		})
		.then(result => result.json())
		.then(result => {
			setUserId(`${result._id}`)
			setFullName(`${result.firstName} ${result.lastName}`)
			setEmail(`${result.email}`)
			setContact(`${result.contact}`)
			setGender(`${result.gender}`)
			setBday(`${result.bday}`)
			setAddress(`${result.address}`)
		})
	}

	const handleDelete = (userEmail) =>{
			fetch(`http://localhost:3009/api/users/deleteUser`,{
				method:"DELETE",
				headers:{
					"Content-Type":"application/json",
					"Authorization":`Bearer ${token}`
				},
				body:JSON.stringify({
					email:userEmail
				})
			})
				.then(result => result)
				.then(result=>{
					alert(`User deleted`)
					fetchUsers()
					fetchAdmins()
				})
			}

	const handleAdmin = (userEmail) =>{
			fetch(`http://localhost:3009/api/users/isAdminT`,{
				method:"PATCH",
				headers:{
					"Content-Type":"application/json",
					"Authorization":`Bearer ${token}`
				},
				body:JSON.stringify({
					email:userEmail
				})
			})
				.then(result => result)
				.then(result=>{
					alert(`User is now an Admin`)
					fetchUsers()
					fetchAdmins()
				})
			}
	
	const handleUser = (userEmail) =>{
			fetch(`http://localhost:3009/api/users/isAdminF`,{
				method:"PATCH",
				headers:{
					"Content-Type":"application/json",
					"Authorization":`Bearer ${token}`
				},
				body:JSON.stringify({
					email:userEmail
				})
			})
				.then(result => result)
				.then(result=>{
					alert(`User is no longer an admin`)
					fetchUsers()
					fetchAdmins()
				})
			}




	return (
		<Fragment>
			<Navigation />
			<SideNav />
			<div className="container profile">
				<div className="row profileRow" id="editProfile">
					<div className="col-12 col-sm-10 profileCol p-5 m-5 text-dark">
						<h4><strong>My Profile</strong></h4>
						<p>Edit Profile</p>
						 <div className="pt-5">
						 	<h5 className="pb-5"><strong>Basics Information:</strong></h5>
						 	<div className="d-flex">
							 	<div>
								 	<p>UserId: {userId}</p>
								 	<p>Name: {fullName}</p>
								 	<p>Email: {email}</p>
								 	<p>Contact: {contact}</p>
							 	</div>
							 	<div className="mx-5">
							 		<p>Gender:{gender}</p>
							 		<p>Birthday:{bday}</p>
							 		<p>Address:{address}</p>
							 	</div>
						 	</div>
						 </div>
					</div>
				</div>
				<div className="row profileNorm">
					<div className="col-12 col-sm-12">
						<h4>Users</h4>
						<p className="pb-5">Manage Users</p>
						<div className="d-flex">
							<p>Admins: <span id="adminLength"></span></p>
							<p className="mx-5">Users: <span id="userLength">{userLength}</span></p>			
						</div>
						<h6>Admins</h6>
						<table className="table table-striped table-dark">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">#</th>
						      <th scope="col">UserId</th>
						      <th scope="col">Full Name</th>
						      <th scope="col">email</th>
						      <th scope="col">createdAt</th>
						      <th scope="col">Action</th>
						    </tr>
						  </thead>
						  <tbody id="tableAdmins">
						  {admins}
						  </tbody>
						</table>

						<h6>Users</h6>
						<table className="table table-striped table-dark">
						  <thead className="thead-dark">
						    <tr>
						      <th scope="col">#</th>
						      <th scope="col">UserId</th>
						      <th scope="col">Full Name</th>
						      <th scope="col">email</th>
						      <th scope="col">createdAt</th>
						      <th scope="col">Action</th>
						    </tr>
						  </thead>
						  <tbody>
						  {users}
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		
		</Fragment>
		)
}