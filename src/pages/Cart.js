import {Fragment, useState} from 'react'
import Navigation from '../components/Navbar'
import Sticker from '../components/Sticker'

const id=localStorage.getItem('id')

export default function Cart(){

	// const fetchCartItems = () =>{
	// 	fetch(`http://localhost:3009/api/users/${id}`,{
	// 		method:"GET",
	// 		headers:{
	// 			"Authorization":`Bearer ${token}`
	// 		}
	// 	})
	// 	.then(result => result.json())
	// 	.then(result => {
			

	// 		const resultOrder = result.Order

	// 		setCart(resultOrder.map(orders =>{
	// 			return(
					

	// 			)	
	// 		}))
	// 	})

	// useEffect(()=>{
	// 	fetchCartItems()
	// },[])


	const [cart, setCart]=useState()
	return(
		<Fragment>
			<Navigation />
			<Sticker />
			<div className="cartList">  
			<h1 className="d-inline cartHeader">Cart</h1>
			<div className="container cart m-5 p-5">
				<div className="row align-items-center pb-3">
					<div className="col-3">
					<img src="../images/sampleMeal.png" width="200px" height="200px" className="img-fluid m-3" />
					</div>
					<div className="col-2">
						<div>
							<p>Big boy burger</p>
							<p>500 pesos</p>
						</div>
					</div>
					<div className="col-2">
					<p>2x</p>
					</div>
					<div className="col-5 text-right">
					<p id="total">1000 pesos</p>
					</div>
				</div>
				<div className="row p-3">
					<h6>Subtotal:</h6><span className="text-right">3000 pesos</span>
				</div>
			</div>	
			</div>

		</Fragment>
		)
}