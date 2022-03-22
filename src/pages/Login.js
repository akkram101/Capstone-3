import {Form,Button,Col,Row,Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'

export default function Login(){
	const [isDisabled, setIsDisabled] = useState(true)
	const [email, setEmail] = useState("")
	const [pw, setPw] = useState("")

	useEffect(()=>{
		if(email != "" && pw != ""){
			setIsDisabled(false)
		}else{
			setIsDisabled(true)
		}
	},[pw, email])

	const loginUser = (e) =>{
		e.preventDefault()
		alert(`User login successfuly`)
	}



	return (
		<Container>
			<h1 className="m-5 text-center">Login</h1>
			<Row className="justify-content-center">
				<Col xs={10} md={4}>
					<Form onSubmit={(e) => loginUser(e) }>

					    <Form.Group className="mb-3" >
						    <Form.Label>Email address</Form.Label>
						    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
					 	</Form.Group>

					 	<Form.Group className="mb-3">
						    <Form.Label>Password</Form.Label>
						    <Form.Control type="password" value={pw} onChange={(e)=>setPw(e.target.value)}/>
						 </Form.Group>


					  	<Button variant="primary" type="submit" disabled={isDisabled}>Submit</Button>
					</Form>
				</Col>
			</Row>
		</Container>
		)
}