import {Fragment} from "react"
import {Card, Row, Col, Button} from "react-bootstrap"

export default function Highlights(){
	return(

		<Fragment>
			<Row className="m-5">
				<Col xs={12} md={4}>
					<Card>
					  <Card.Body>
					    <Card.Title>Learn From Home</Card.Title>
					    <Card.Text>
					      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur illo, delectus doloribus consequuntur facere exercitationem laborum blanditiis magnam sequi iste, repellat aliquam, voluptate cupiditate voluptatum officiis, tempora numquam aperiam!
					    </Card.Text>
					  </Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4}>
					<Card>
					  <Card.Body>
					    <Card.Title>Study Now, Pay Later</Card.Title>
					    <Card.Text>
					      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur illo, delectus doloribus consequuntur facere exercitationem laborum blanditiis magnam sequi iste, repellat aliquam, voluptate cupiditate voluptatum officiis, tempora numquam aperiam!
					    </Card.Text>
					  </Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4}>
					<Card>
					  <Card.Body>
					    <Card.Title>Be Part of Our Community</Card.Title>
					    <Card.Text>
					      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur illo, delectus doloribus consequuntur facere exercitationem laborum blanditiis magnam sequi iste, repellat aliquam, voluptate cupiditate voluptatum officiis, tempora numquam aperiam!
					    </Card.Text>
					  </Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	)
}