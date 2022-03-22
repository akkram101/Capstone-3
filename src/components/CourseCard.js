
import {Card, Row, Col, Button} from "react-bootstrap"

export default function CourseCard({courseProp}) {
	 // console.log(props) //object
	/* { courseProp: {
				id: "wdc001",
				name: "PHP-Laravel",
				description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur illo, delectus doloribus consequuntur facere exercitationem laborum blanditiis magnam sequi iste",
				price: 25000,
				onOffer: true
	 		}
	 	}
	*/
	console.log(courseProp)
	/*
		{
			id: "wdc001",
			name: "PHP-Laravel",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur illo, delectus doloribus consequuntur facere exercitationem laborum blanditiis magnam sequi iste",
			price: 25000,
			onOffer: true
 		}
	*/

	const {name, description, price} = courseProp
	// console.log(name)
	// console.log(description)
	// console.log(price)

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
		    <Button className="btn-info">Enroll</Button>
		  </Card.Body>
		</Card>
	)
}