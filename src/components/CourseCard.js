
import {Card, Row, Col, Button} from "react-bootstrap"
import { useState } from 'react';

export default function CourseCard({courseProp}) {

	const[count,setCount] = useState(0)
	const[seat,seatCount] = useState(30)

	const {name, description, price} = courseProp

	const handleClick = () =>{
		// console.log(`Im clicked`, count++)
		setCount(count + 1)
	}

	const clickSeats = () =>{
		if(seat>0){
		seatCount(seat - 1)
		}else{
			return alert(`No more seats`)
		}
	}


	return(
		<Card className="m-5">
		  <Card.Body>
		    <Card.Title>{name}</Card.Title>
		    <Card.Subtitle>Description:</Card.Subtitle>
		    <Card.Text>
		      {description}
		    </Card.Text>
		    <Card.Subtitle>Price:</Card.Subtitle>
		    <Card.Text>
		    	{price}
		    </Card.Text>
		    <Card.Text>Count: {count}</Card.Text>
		    <Button className="btn-info" onClick={handleClick}>Enroll</Button>
		    <Card.Text>Seats: {seat}</Card.Text>
		    <Button className="btn-info" onClick={clickSeats}>Enroll</Button>
		  </Card.Body>
		</Card>
	)
}