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