import {Navbar, Container, Nav, Button, Modal} from 'react-bootstrap'
import {Fragment, useContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export function LoginModal(){

	const [emailLogin, setEmailLogin] = useState("")
	const [pwLogin, setPWLogin] = useState("")

	const[login, setLogin] = useState(false)
	const navigate = useNavigate()

	const LoginSubmit = (e) => {
		(e).preventDefault()
		fetch(`http://localhost:3009/api/users/login`, {
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				email:emailLogin,
				password:pwLogin
			})
		})
		.then(result => result.json())
		.then(result => {
			localStorage.setItem(`token`, result.token)
			let token = localStorage.getItem(`token`)

			fetch(`http://localhost:3009/api/users/profile`,{
				method:"GET",
				headers:{
					"Authorization":`Bearer ${token}`
				}
			})
			.then(result => result.json())
			.then(result =>{



			if(result){	
				console.log(result)
				localStorage.setItem(`id`, result._id)
				localStorage.setItem(`isAdmin`, result.isAdmin)
				alert(`Login successfuly.`)

				window.location.reload(false)
			}else{
				alert(`Something went wrong. Please try again.`)
			}
			})
		})
	}


	return (
				<Fragment>
				<Button variant="outline-warning" className="button" onClick={()=> setLogin(true)}>Login</Button>
				<Modal show={login} onHide={()=>setLogin(false)} centered>
				    <Modal.Header closeButton>
				        <Modal.Title>Login</Modal.Title>
				    </Modal.Header>
				    <form className="text-left" id="login" onSubmit={LoginSubmit}>
				    <Modal.Body>
			    	  	    <div className="form-group">
			    	  	    	<label htmlFor="email">Email address:</label>
			    	  	    	<input type="email" value={emailLogin} className="form-control" onChange={(e) => setEmailLogin(e.target.value)}/>
			    	  	  	</div>
			    	  	  	<div className="form-group">
			    	  	   		<label htmlFor="password">Password:</label>
			    	  	    	<input type="password" className="form-control" value={pwLogin} onChange={(e) => setPWLogin(e.target.value)}/>
			    	  	  	</div>
				    </Modal.Body>
				    <Modal.Footer>
				        <Button variant="secondary" onClick={()=>setLogin(false)}>
				            Close
				        </Button>
				        <Button variant="warning" type="submit">
					        	Login
					    </Button>
				    </Modal.Footer>
				    </form>
				</Modal>
				</Fragment>
			
		)
}

export function RegisterModal(){
	const[register, setRegister] = useState(false)
	const [email, setEmail] = useState("")
	const [pw, setPW] = useState("")
	const [firstName,setFN] =useState("")
	const [lastName,setLN] =useState("")
	const [cpw,setCpw] =useState("")

	const RegisterSubmit = (e) => {
		(e).preventDefault()
		if(pw == cpw){
				fetch(`http://localhost:3009/api/users/email-exists`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						firstName: firstName,
						lastName: lastName,
						email: email,
						password: pw
					})
				})
				.then(result => result.json())
				.then(result => {
					if(result == false){
						
						fetch(`http://localhost:3009/api/users/register`, {
							method: "POST",
							headers:{
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								//user input
								firstName: firstName,
								lastName: lastName,
								email: email,
								password: pw
							})
						})
						.then(result => result.json())
						.then(result => {
							
							if(result){
								alert('User successfully registered!')
								window.location.reload(false)
							} else {
								alert(`Please try again`)
							}
						})

					} else {
						alert(`User already exists`)
					}
				})

			}else{
				alert(`Password does not match`)
			}
		}

	return(
			<Fragment>
				<Button variant="outline-warning" className="button" onClick={()=>setRegister(true)}>Register</Button>
				<Modal show={register} onHide={()=>setRegister(false)} centered>
					    <Modal.Header closeButton>
					        <Modal.Title>Register</Modal.Title>
					    </Modal.Header>
					    <form className="text-left" id="registerForm" onSubmit={RegisterSubmit}>
					    <Modal.Body>
					    		<div className="form-group">
					    	    	<label htmlFor="firstName">First Name:</label>
					    	    	<input type="text" className="form-control" value={firstName} onChange={(e) => setFN(e.target.value)}/>
					    	  	</div>
					    	  	<div className="form-group">
					    	    	<label htmlFor="lastName">Last Name:</label>
					    	    	<input type="text" className="form-control" value={lastName} onChange={(e) => setLN(e.target.value)}/>					        	    
					    	  	</div>
					    	    <div className="form-group">
					    	    	<label htmlFor="email">Email address:</label>
					    	    	<input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
					    	  	</div>
					    	  	<div className="form-group">
					    	   		<label htmlFor="password">Password:</label>
					    	    	<input type="password" className="form-control"value={pw} onChange={(e) => setPW(e.target.value)}/>
					    	  	</div>
					    	  	<div className="form-group">
					    	   		<label htmlFor="cpw">Confirm Password:</label>
					    	    	<input type="password" className="form-control" value={cpw} onChange={(e) => setCpw(e.target.value)}/>
					    	  	</div>
					    </Modal.Body>
					    <Modal.Footer>
					        <Button variant="secondary" onClick={()=>setRegister(false)}>
					            Close
					        </Button>
					        <Button variant="warning" type="submit">
					        	Register
					        </Button>
					    </Modal.Footer>
					    </form>
					</Modal>
				</Fragment>
			
		)
}