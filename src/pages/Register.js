import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Register(){

	const [fn, setFN] = useState("")
	const [ln, setLN] = useState("")
	const [email, setEmail] = useState("")
	const [pw, setPw] = useState("")
	const [cpw, setCpw] = useState("")
	const [isDisabled,setIsDisabled] = useState(true)

	const navigate = useNavigate()

	useEffect(() =>{
		// console.log(`render`)
		if((fn !="" && ln !="" && email !="" && pw !="" && cpw !="") && (pw == cpw)){
			setIsDisabled(false)
		}else{
			setIsDisabled(true)
		}
	},[fn,ln,email,pw,cpw])

	const registerUser = (e) =>{
		e.preventDefault()
		fetch('http://localhost:3008/api/users/email-exists',{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				email:email
			})
		}).then(response => response.json())
		.then(response =>{
			if(!response){
				fetch('http://localhost:3008/api/users/register',{
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					},
					body:JSON.stringify({
						firstName:fn,
						lastName:ln,
						email:email,
						password:pw
					})
				}).then(response => response.json())
				.then(response =>{
					if(response){
						alert(`User successfully registered`)
						navigate('/login')
					}else {
						console.log(`ENGKK`)
					}
				})	
			}else {
				console.log(`else`)
			}
		})	
	}

	return(
		<Container>
			<h1 className="m-5 text-center">Register</h1>
			<Row className="justify-content-center">
				<Col xs={10} md={4}>
					<Form onSubmit={(e) => registerUser(e) }>
						<Form.Group className="mb-3">
						    <Form.Label>First Name</Form.Label>
						    <Form.Control type="text" value={fn} onChange={(e)=>setFN(e.target.value)}/>
					 	</Form.Group>

						<Form.Group className="mb-3">
						    <Form.Label>Last Name</Form.Label>
						    <Form.Control type="text" value={ln} onChange={(e)=>setLN(e.target.value)}/>
					 	</Form.Group>

					    <Form.Group className="mb-3" >
						    <Form.Label>Email address</Form.Label>
						    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
					 	</Form.Group>

					 	<Form.Group className="mb-3">
						    <Form.Label>Password</Form.Label>
						    <Form.Control type="password" value={pw} onChange={(e)=>setPw(e.target.value)}/>
						 </Form.Group>

						 <Form.Group className="mb-3" >
						    <Form.Label>Confirm Passowrd</Form.Label>
						    <Form.Control type="password" value={cpw} onChange={(e)=>setCpw(e.target.value)}/>
						 </Form.Group>
					  	<Button variant="primary" type="submit" disabled={isDisabled}>Submit</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}